<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    use HasFactory;
    protected $table = 'gallery_image';
    public $timestamps = false;
    protected $fillable = [
        'product_id',
    ];

    protected $casts = [
        'id' => 'string'
    ];
}
