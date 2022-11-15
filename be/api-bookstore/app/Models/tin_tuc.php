<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tin_tuc extends Model
{
    use HasFactory;
    protected $fillable = [
        'Ma_NV',
        'Tieu_De',
        'Hinh_Chinh',
        'Ngay_Dang',
        'Ma_DM',
        'Loai_Tin_Tuc',
        'Noi_Dung'
    ];
}
