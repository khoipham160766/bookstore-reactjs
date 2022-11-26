<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chi_tiet_don_hang extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'Ma_SP', 'So_Luong'];
}
