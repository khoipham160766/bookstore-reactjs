<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class don_hang extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ma_KH',
        'Ma_NV',
        'Ho_Ten_KH',
        'Dia_Chi',
        'SDT',
        'Tong_Tien',
        'Ma_KM',
        'Thanh_Tien',
        'Trang_Thai'
    ];
}
