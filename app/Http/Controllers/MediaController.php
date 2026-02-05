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
          'type' => $m->type,
          'is_active' => $m->is_active,
          'url' => asset('storage/' . $m->file_path)
        ];
      })
    ]);
  }

  public function upload(Request $request)
  {
    // dd($request->all());
    $request->validate([
      'file' => 'required|mimes:mp4,mov,ogg,jpeg,png,jpg|max:100000',
    ]);

    Media::query()->update(['is_active' => false]);

    $file = $request->file('file');
    $path = $file->store('media', 'public');

    $media = Media::create([
      'judul_media' => $file->getClientOriginalName(),
      'file_path' => $path,
      'type' => str_contains($file->getMimeType(), 'video') ? 'video' : 'gambar',
      'is_active' => true,
    ]);

    broadcast(new MediaEvent($media));

    return response()->json($media);
  }
  public function play($id)
  {
    $media = Media::findOrFail($id);

    Media::query()->update(['is_active' => false]);
    $media->update(['is_active' => true]);

    broadcast(new MediaEvent($media));

    return back();
  }

  public function destroy($id)
  {
    $media = Media::findOrFail($id);

    if (Storage::disk('public')->exists($media->file_path)) {
      Storage::disk('public')->delete($media->file_path);
    }

    $media->delete();

    return back();
  }



  public function update(Request $request, $id)
  {
    $request->validate(['judul_media' => 'required|string|max:255']);

    Media::findOrFail($id)->update([
      'judul_media' => $request->judul_media
    ]);

    return back();
  }

  public function ds_player()
  {
    return Inertia::render('player/MediaPlayer');
  }

  public function get_playlist()
  {
    return Media::where('is_active', true)->get()->map(function ($m) {
      return [
        'id' => $m->id,
        'name' => $m->judul_media,
        'type' => $m->type,
        'url' => asset('storage/' . $m->file_path)
      ];
    });
  }
}
