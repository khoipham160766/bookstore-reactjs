<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nhap_hang extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ma_NV',
        'Tong_Tien',
        'Nguon_Nhap',
        'Ngay_Nhap'
    ];
}
