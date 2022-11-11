<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class khuyen_mai extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ma_KM',
        'Ten_KM',
        'Mo_Ta',
        'Phan_Tram_KM',
        'Tien_KM',
        'Ngay_Bat_Dau',
        'Ngay_Ket_Thuc'
    ];
}
