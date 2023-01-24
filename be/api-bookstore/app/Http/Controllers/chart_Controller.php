<?php

namespace App\Http\Controllers;
//model
use App\Models\chi_tiet_don_hang;
//resource
use App\Http\Resources\doughnut as doughnut_resource;
use Illuminate\Http\Request;

class chart_Controller extends Controller
{
    public function doughnut(){
        $doughnut = chi_tiet_don_hang::select('Ma_SP')
                    ->selectRaw('SUM(So_Luong) AS Tong_So_Luong')
                    ->groupBy('Ma_SP')
                    ->get();
        $arr = [
            'status'=> 'success',
            'data' =>  doughnut_resource::collection($doughnut)
        ];
        return response()->json($arr, 200);

    }
}
