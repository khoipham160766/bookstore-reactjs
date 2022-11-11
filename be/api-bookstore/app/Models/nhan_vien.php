<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nhan_vien extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ho_NV',
        'Ten_NV',
        'Ngay_Sinh',
        'Gioi_Tinh',
        'Dia_Chi',
        'SDT',
        'Tai_Khoan',
        'Mat_Khau',
        'Tinh_Trang',
        'Quyen'
    ];
}
