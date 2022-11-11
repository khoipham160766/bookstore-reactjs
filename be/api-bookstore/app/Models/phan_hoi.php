<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class phan_hoi extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ma_KH',
        'Noi_Dung',
    ];
}
