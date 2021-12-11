<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    public $timestamps = false;

    protected $casts = [
        'id' => 'string'
    ];

    function images(){
        return $this->hasMany(Images::class, 'product_id', 'id');
    }
}
