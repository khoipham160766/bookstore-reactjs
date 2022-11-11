<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\don_hang;
// thêm lệnh use resource
use App\Http\Resources\don_hang as don_hang_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class don_hang_Controller extends Controller
{
    public function index()
    {
        $don_hang = don_hang::all();
        $arr = [
            'status' => 'success',
            'data' => don_hang_resource::collection($don_hang)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ma_KH' => 'required',
            'Ho_Ten_KH' => 'required',
            'Dia_Chi' => 'required',
            'SDT' => 'required',
            'Tong_Tien' => 'required',
            'Thanh_Tien' => 'required',
            'Trang_Thai' => 'required',
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $don_hang = don_hang::create($input);
        $arr = [
            'status' => 'success',
            'data' => new don_hang_resource($don_hang)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $don_hang = don_hang::find($id);
        if(is_null($don_hang)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại đơn hàng này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new don_hang_resource($don_hang)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $don_hang = don_hang::find($id);
        if(is_null($don_hang)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có đơn hàng này'
            ];
            return response()->json($arr, 200);
        }
        $don_hang->update($input);
        $arr = [
            'status' => 'success',
            'data' => new don_hang_resource($don_hang)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $don_hang = don_hang::find($id);
        if(is_null($don_hang)){
            $arr = [
                'status' => 'fail',
                'message' => 'Không có đơn hàng này'
            ];
            return response()->json($arr, 200);
        }
        don_hang::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'Đơn hàng đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
