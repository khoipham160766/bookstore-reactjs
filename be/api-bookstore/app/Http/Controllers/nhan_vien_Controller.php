<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\nhan_vien;
// thêm lệnh use resource
use App\Http\Resources\nhan_vien as nhan_vien_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class nhan_vien_Controller extends Controller
{
    public function index()
    {
        $nhan_vien = nhan_vien::all();
        $arr = [
            'status' => 'success',
            'data' => nhan_vien_resource::collection($nhan_vien)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ho_NV' => 'required',
            'Ten_NV' => 'required',
            'Ngay_Sinh' => 'required',
            'Gioi_Tinh' => 'required',
            'Dia_Chi' => 'required',
            'SDT' => 'required',
            'Tai_Khoan' => 'required',
            'Mat_Khau' => 'required',
            'Quyen' => 'required',
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $nhan_vien = nhan_vien::create($input);
        $arr = [
            'status' => 'success',
            'data' => new nhan_vien_resource($nhan_vien)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $nhan_vien = nhan_vien::find($id);
        if(is_null($nhan_vien)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại nhân viên này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new nhan_vien_resource($nhan_vien)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $nhan_vien = nhan_vien::find($id);
        if(is_null($nhan_vien)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có nhân viên này'
            ];
            return response()->json($arr, 200);
        }
        $nhan_vien->update($input);
        $arr = [
            'status' => 'success',
            'data' => new nhan_vien_resource($nhan_vien)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        //
    }
}
