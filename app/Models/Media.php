<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{

  protected $table = 'media';
  protected $fillable = [
    'judul_media',
    'file_path',
    'type',
    'is_active',
  ];
}
