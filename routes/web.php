<?php

use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;


Route::get('/', [MediaController::class, 'halaman_cms'])->name('home');
Route::get('/halaman-cms', [MediaController::class, 'halaman_cms'])->name('cms.page');
Route::get('/buat-media', [MediaController::class, 'buat_media'])->name('buat.media');
Route::post('/upload-media', [MediaController::class, 'upload'])->name('upload.media');
Route::post('/media/{id}/play', [MediaController::class, 'play'])->name('media.play');
Route::get('/media/{id}/edit', [MediaController::class, 'edit_media'])->name('media.edit');
Route::post('/media/{id}/update', [MediaController::class, 'update'])->name('media.update_content');
Route::put('/media/{id}', [MediaController::class, 'update'])->name('media.update');
Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.delete');

Route::post('/media/reject/{id}', [MediaController::class, 'reject'])->name('media.reject');
Route::post('/media/approve-play/{id}', [MediaController::class, 'approve_and_play'])->name('media.approve_play');

//DS PLAYER ROUTE
Route::get('/ds-player', [MediaController::class, 'ds_player'])->name('ds.player');
Route::get('/get-playlist', [MediaController::class, 'get_playlist'])->name('get.playlist');
