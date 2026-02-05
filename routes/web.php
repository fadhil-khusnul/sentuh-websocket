<?php

use App\Http\Controllers\MediaController;
use Illuminate\Support\Facades\Route;


Route::get('/', [MediaController::class, 'halaman_cms'])->name('home');
Route::get('/halaman-cms', [MediaController::class, 'halaman_cms'])->name('cms.page');
Route::post('/upload-media', [MediaController::class, 'upload'])->name('upload.media');
Route::post('/media/{id}/play', [MediaController::class, 'play'])->name('media.play');
Route::put('/media/{id}', [MediaController::class, 'update'])->name('media.update');
Route::delete('/media/{id}', [MediaController::class, 'destroy'])->name('media.delete');


//DS PLAYER ROUTE
Route::get('/ds-player', [MediaController::class, 'ds_player'])->name('ds.player');
Route::get('/get-playlist', [MediaController::class, 'get_playlist'])->name('get.playlist');
