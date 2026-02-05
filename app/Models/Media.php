<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{

  protected $table = 'media';
  protected $fillable = [
    'judul_media',
    'deskripsi',
    'running_text',
    'video_path',
    'images',
    'status',
    'is_active'
  ];

  protected $casts = [
    'images' => 'array',
    'is_active' => 'boolean',
  ];
}
