<?php

namespace App\Http\Controllers;
// model
use App\Models\chi_tiet_don_hang;
use App\Models\don_hang;
use App\Models\san_pham;
// resource
use App\Http\Resources\dashboard_best_book as dashboard_best_book_resource;
use App\Http\Resources\dashboard_best_customer as dashboard_best_customer_resource;
use App\Http\Resources\book_user as book_user_resource;
use Carbon\Carbon;

class dashboard_Controller extends Controller
{
    public function bestBook(){
        $nowdate = new Carbon();
        $date_in_month = Carbon::now()->daysInMonth;
        $start = "{$nowdate->year}-{$nowdate->month}-1";
        $end = "{$nowdate->year}-{$nowdate->month}-{$date_in_month}";
        
        $best_book = chi_tiet_don_hang::select(chi_tiet_don_hang::raw('ROW_NUMBER() OVER(ORDER BY Tong_So_Luong DESC) AS STT,Ma_SP'))
                    ->selectRaw('SUM(So_Luong) AS Tong_So_Luong')
                    ->whereBetween('created_at',[$start,$end])
                    ->limit(10)->groupBy('Ma_SP')
                    ->orderBy('Tong_So_Luong','desc')
                    ->get();
        // $best_book = chi_tiet_don_hang::whereBetween('created_at',[$start,$end])->get();
        $arr = [
            'status' => 'success',
            'start' => $start,
            'end' => $end,
            'data' =>  dashboard_best_book_resource::collection($best_book)
        ];
        return response()->json($arr, 200);
    }
    public function bestCustomer() {
        $nowdate = new Carbon();
        $date_in_month = Carbon::now()->daysInMonth;
        $start = "{$nowdate->year}-{$nowdate->month}-1";
        $end = "{$nowdate->year}-{$nowdate->month}-{$date_in_month}";
        $best_customer = don_hang::select(don_hang::raw('ROW_NUMBER() OVER(ORDER BY Tong_Thanh_Tien DESC) AS STT,Ma_KH'))
                    ->selectRaw('COUNT(Ma_KH) AS So_Don_Hang')
                    ->selectRaw('SUM(Thanh_Tien) AS Tong_Thanh_Tien')
                    ->whereBetween('Ngay_Tao',[$start,$end])
                    ->where('Trang_Thai','=','Giao thành công')
                    ->limit(10)->groupBy('Ma_KH')
                    ->orderBy('Tong_Thanh_Tien','desc')
                    ->get();
        // $best_book = chi_tiet_don_hang::whereBetween('created_at',[$start,$end])->get();
        $arr = [
            'status' => 'success',
            'start' => $start,
            'end' => $end,
            'data' =>  dashboard_best_customer_resource::collection($best_customer)
        ];
        return response()->json($arr, 200);
    }
    //book user
    public function bestBookIndexUser(){
        
        $best_book = chi_tiet_don_hang::select(chi_tiet_don_hang::raw('ROW_NUMBER() OVER(ORDER BY Tong_So_Luong DESC) AS STT,Ma_SP'))
                    ->selectRaw('SUM(So_Luong) AS Tong_So_Luong')
                    ->limit(10)->groupBy('Ma_SP')
                    ->orderBy('Tong_So_Luong','desc')
                    ->get();
        // $best_book = chi_tiet_don_hang::whereBetween('created_at',[$start,$end])->get();
        $arr = [
            'status' => 'success',
            'data' =>  dashboard_best_book_resource::collection($best_book)
        ];
        return response()->json($arr, 200);
    }
    public function newBookIndexUser(){
        
        $new_book = san_pham::select('id')
                    ->limit(10)
                    ->orderBy('Ngay_Tao','desc')
                    ->get();
        // $best_book = chi_tiet_don_hang::whereBetween('created_at',[$start,$end])->get();
        $arr = [
            'status' => 'success',
            'data' =>  book_user_resource::collection($new_book)
        ];
        return response()->json($arr, 200);
    }
    public function allBookIndexUser(){
        
        $all_book = san_pham::all();
        // $best_book = chi_tiet_don_hang::whereBetween('created_at',[$start,$end])->get();
        $arr = [
            'status' => 'success',
            'data' =>  book_user_resource::collection($all_book)
        ];
        return response()->json($arr, 200);
    }
    public function searchBookInCategory($id){
        
        $book = san_pham::where('Danh_Muc','=',$id)->get();
        // $best_book = chi_tiet_don_hang::whereBetween('created_at',[$start,$end])->get();
        $arr = [
            'status' => 'success',
            'data' =>  book_user_resource::collection($book)
        ];
        return response()->json($arr, 200);
    }

}
