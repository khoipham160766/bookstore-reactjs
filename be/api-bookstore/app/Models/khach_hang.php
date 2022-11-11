<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class khach_hang extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ho_KH',
        'Ten_KH',
        'Dia_Chi',
        'SDT',
        'Gioi_Tinh',
        'Tai_Khoan',
        'Mat_Khau',
        'Avatar',
        'Tinh_Trang'
    ];
}
