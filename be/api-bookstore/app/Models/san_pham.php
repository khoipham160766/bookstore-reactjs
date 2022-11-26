<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class san_pham extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ten_SP',
        'NXB',
        'Tac_Gia',
        'Don_Gia',
        'So_Luong',
        'Giam_Gia',
        'Mo_Ta',
        'Danh_Muc',
        'Tinh_Trang',
        'Hinh_Anh'
    ];
}
