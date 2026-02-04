<?php

namespace App\Http\Controllers;

use App\Events\MediaEvent;
use App\Models\Media;
use Illuminate\Http\Request;
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

    $file = $request->file('file');
    $path = $file->store('media', 'public');

    $media = Media::create([
      'judul_media' => $file->getClientOriginalName(),
      'file_path' => $path,
      'type' => str_contains($file->getMimeType(), 'video') ? 'video' : 'gambar',
    ]);

    broadcast(new MediaEvent($media));

    return response()->json($media);
  }


}
