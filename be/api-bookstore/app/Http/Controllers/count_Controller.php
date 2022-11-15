<?php

namespace App\Http\Controllers;

// gọi model
use App\Models\san_pham;
use App\Models\khach_hang;
use App\Models\don_hang;
use App\Models\tin_tuc;

use Illuminate\Http\Request;

class count_Controller extends Controller
{
    public function countProduct(){
        $san_pham = san_pham::count();
        $arr = [
            'status' => 'success',
            'data'=> $san_pham
        ];
        return response()->json($arr, 200);
    }
    public function countCustomer(){
        $khach_hang = khach_hang::count();
        $arr = [
            'status' => 'success',
            'data'=> $khach_hang
        ];
        return response()->json($arr, 200);
    }
    public function countOrder(){
        $don_hang = don_hang::where('Trang_Thai','=','Hoàn thành')->count();
        $arr = [
            'status' => 'success',
            'data'=> $don_hang
        ];
        return response()->json($arr, 200);
    }
    public function countNews(){
        $tin_tuc = tin_tuc::count();
        $arr = [
            'status' => 'success',
            'data'=> $tin_tuc
        ];
        return response()->json($arr, 200);
    }
}
