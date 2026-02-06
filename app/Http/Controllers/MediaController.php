<?php

namespace App\Http\Controllers;

use App\Events\MediaEvent;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MediaController extends Controller
{

  public function halaman_cms()
  {
    return Inertia::render('cms/ListMedia', [
      'mediaList' => Media::latest()->get()->map(function ($m) {
        return [
          'id' => $m->id,
          'judul_media' => $m->judul_media,
          'deskripsi' => $m->deskripsi,
          'running_text' => $m->running_text,
          'status' => $m->status,
          'is_active' => $m->is_active,
          'url' => asset('storage/' . $m->video_path),
          'images' => $m->images,
        ];
      })
    ]);
  }

  public function buat_media()
  {
    return Inertia::render('cms/UploadMedia');
  }

  public function upload(Request $request)
  {
    $request->validate([
      'judul_media' => 'required|string|max:100',
      'deskripsi' => 'nullable|string',
      'running_text' => 'required|string|max:255',
      'video_file' => 'required|mimes:mp4,mov,ogg',
      'image_files' => 'required',
      'image_files.*' => 'mimes:jpeg,png,jpg'
    ]);

    $videoPath = null;
    if ($request->hasFile('video_file')) {
      $videoPath = $request->file('video_file')->store('media/videos', 'public');
    }

    $imagePaths = [];
    if ($request->hasFile('image_files')) {
      foreach ($request->file('image_files') as $file) {
        $imagePaths[] = $file->store('media/images', 'public');
      }
    }

    $media = Media::create([
      'judul_media' => $request->judul_media,
      'deskripsi' => $request->deskripsi,
      'running_text' => $request->running_text,
      'video_path' => $videoPath,
      'images' => $imagePaths,
      'status' => 'pending',
      'is_active' => false,
    ]);

    broadcast(new MediaEvent($media, 'create'));

    return response()->json($media);
  }

  public function edit_media($id)
  {
    $media = Media::findOrFail($id);

    return Inertia::render('cms/EditMedia', [
      'media' => [
        'id' => $media->id,
        'judul_media' => $media->judul_media,
        'deskripsi' => $media->deskripsi,
        'running_text' => $media->running_text,
        'video_url' => asset('storage/' . $media->video_path),
        'images' => collect($media->images)->map(function ($path, $index) {
          return [
            'uid' => '-' . $index,
            'name' => 'image-' . $index,
            'status' => 'done',
            'url' => asset('storage/' . $path),
            'path' => $path,
          ];
        }),
      ]
    ]);
  }

  public function update(Request $request, $id)
  {
    $request->validate([
      'judul_media' => 'required|string|max:100',
      'deskripsi' => 'nullable|string',
      'running_text' => 'required|string|max:255',
      'video_file' => 'nullable|mimes:mp4,mov,ogg',
      'image_files' => 'nullable',
      'image_files.*' => 'mimes:jpeg,png,jpg'
    ]);

    $media = Media::findOrFail($id);

    $dataToUpdate = [
      'judul_media' => $request->judul_media,
      'deskripsi' => $request->deskripsi,
      'running_text' => $request->running_text,
      'status' => 'pending',
      'is_active' => false
    ];

    if ($request->hasFile('video_file')) {
      if (Storage::disk('public')->exists($media->video_path)) {
        Storage::disk('public')->delete($media->video_path);
      }
      $dataToUpdate['video_path'] = $request->file('video_file')->store('media/videos', 'public');
    }


    $existingImages = $request->input('existing_images', []);

    $currentImagesInDb = $media->images ?? [];

    foreach ($currentImagesInDb as $dbImage) {
      if (!in_array($dbImage, $existingImages)) {
        if (Storage::disk('public')->exists($dbImage)) {
          Storage::disk('public')->delete($dbImage);
        }
      }
    }

    $newImagePaths = [];
    if ($request->hasFile('image_files')) {
      foreach ($request->file('image_files') as $file) {
        $newImagePaths[] = $file->store('media/images', 'public');
      }
    }

    $finalImages = array_merge($existingImages, $newImagePaths);
    $dataToUpdate['images'] = $finalImages;

    $media->update($dataToUpdate);

    broadcast(new MediaEvent($media, 'update'));

    return redirect()->route('home')->with('success', 'Konten berhasil diperbarui!');
  }






  public function play($id)
  {
    $media = Media::findOrFail($id);

    Media::query()->update(['is_active' => false]);
    $media->update(['is_active' => true]);


    broadcast(new MediaEvent($media, 'play'));

    return back();
  }

  public function approve_and_play($id)
  {
    $media = Media::findOrFail($id);

    Media::query()->update(['is_active' => false]);
    $media->update([
      'status' => 'approved',
      'is_active' => true
    ]);


    $media->video_url = asset('storage/' . $media->video_path);

    $media->images_url = collect($media->images)->map(function ($path) {
      return asset('storage/' . $path);
    })->toArray();

    broadcast(new MediaEvent($media, 'play'));

    return back();
  }
  public function reject($id)
  {
    $media = Media::findOrFail($id);
    $media->update(['status' => 'rejected', 'is_active' => false]);

    broadcast(new MediaEvent($media, 'rejected'));

    return back();
  }

  public function destroy($id)
  {
    $media = Media::findOrFail($id);
    broadcast(new MediaEvent($media, 'deleted'));


    if (Storage::disk('public')->exists($media->video_path)) {
      Storage::disk('public')->delete($media->video_path);
    }

    foreach ($media->images as $image) {
      if (Storage::disk('public')->exists($image)) {
        Storage::disk('public')->delete($image);
      }
    }

    $media->delete();


    return back();
  }

  public function ds_player()
  {
    return Inertia::render('player/MediaPlayer');
  }

  public function get_playlist()
  {
    return Media::where('is_active', true)->get()->map(function ($m) {
      $imageUrls = collect($m->images)->map(function ($path) {
        return asset('storage/' . $path);
      });

      return [
        'id' => $m->id,
        'name' => $m->judul_media,
        'running_text' => $m->running_text,
        'video_url' => asset('storage/' . $m->video_path),
        'images_url' => $imageUrls,
      ];
    });
  }
}
