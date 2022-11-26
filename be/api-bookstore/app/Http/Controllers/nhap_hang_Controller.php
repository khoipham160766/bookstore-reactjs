<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\nhap_hang;
// thêm lệnh use resource
use App\Http\Resources\nhap_hang as nhap_hang_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class nhap_hang_Controller extends Controller
{
    public function index()
    {
        $nhap_hang = nhap_hang::all();
        $arr = [
            'status' => 'success',
            'data' => nhap_hang_resource::collection($nhap_hang)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ma_NV'=>'required',
            'Tong_Tien'=>'required',
            'Nguon_Nhap'=>'required',
            'Ngay_Nhap'=>'required'
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $nhap_hang = nhap_hang::create($input);
        $arr = [
            'status' => 'success',
            'data' => new nhap_hang_resource($nhap_hang)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $nhap_hang = nhap_hang::find($id);
        if(is_null($nhap_hang)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại mã nhập hàng này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new nhap_hang_resource($nhap_hang)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $nhap_hang = nhap_hang::find($id);
        if(is_null($nhap_hang)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có nhập hàng này'
            ];
            return response()->json($arr, 200);
        }
        $nhap_hang->update($input);
        $arr = [
            'status' => 'success',
            'data' => new nhap_hang_resource($nhap_hang)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $nhap_hang = nhap_hang::find($id);
        if(is_null($nhap_hang)){
            $arr = [
                'status' => 'fail',
                'message' => 'Không có mã nhập hàng này. Xóa thất bại.'
            ];
            return response()->json($arr, 200);
        }
        nhap_hang::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'Nhập hàng đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
