<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\khuyen_mai;
// thêm lệnh use resource
use App\Http\Resources\khuyen_mai as khuyen_mai_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class khuyen_mai_Controller extends Controller
{
    public function index()
    {
        $khuyen_mai = khuyen_mai::all();
        $arr = [
            'status' => 'success',
            'data' => khuyen_mai_resource::collection($khuyen_mai)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ma_KM'=>'required',
            'Ten_KM'=>'required',
            'Mo_Ta'=>'required',
            'Ngay_Bat_Dau'=>'required',
            'Ngay_Ket_Thuc'=>'required'
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $khuyen_mai = khuyen_mai::create($input);
        $arr = [
            'status' => 'success',
            'data' => new khuyen_mai_resource($khuyen_mai)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $khuyen_mai = khuyen_mai::find($id);
        if(is_null($khuyen_mai)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại khuyến mãi này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new khuyen_mai_resource($don_hang)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $khuyen_mai = khuyen_mai::find($id);
        if(is_null($khuyen_mai)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có khuyến mãi này'
            ];
            return response()->json($arr, 200);
        }
        $khuyen_mai->update($input);
        $arr = [
            'status' => 'success',
            'data' => new khuyen_mai_resource($khuyen_mai)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $khuyen_mai = khuyen_mai::find($id);
        if(is_null($khuyen_mai)){
            $arr = [
                'status' => 'fail',
                'message' => 'Không có khuyến mãi này'
            ];
            return response()->json($arr, 200);
        }
        khuyen_mai::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'Khuyến mãi đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
