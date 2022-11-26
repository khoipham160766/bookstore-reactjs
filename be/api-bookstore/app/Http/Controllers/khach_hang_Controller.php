<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\khach_hang;
// thêm lệnh use resource
use App\Http\Resources\khach_hang as khach_hang_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class khach_hang_Controller extends Controller
{
    public function index()
    {
        $khach_hang = khach_hang::all();
        $arr = [
            'status' => 'success',
            'data' => khach_hang_resource::collection($khach_hang),
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'Ho_KH' => 'required', 
            'Ten_KH' => 'required',
            'Dia_Chi' => 'required', 
            'SDT' => 'required',
            'Gioi_Tinh' => 'required', 
            'Tai_Khoan' => 'required',
            'Mat_Khau' => 'required', 
            'Avatar' => 'required',
            'Tinh_Trang' => 'required',
        ]);
        if($validator->fails()){
            $arr = [
            'status' => 'fail',
            'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $khach_hang = khach_hang::create($input);
        $arr = [
            'status' => 'success',
            'data'=> new khach_hang_resource($khach_hang)
        ];
        return response()->json($arr, 201);
    }

    public function show($id)
    {
        $khach_hang = khach_hang::find($id);
        if(is_null($khach_hang)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại khách hàng này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new khach_hang_resource($khach_hang)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $khach_hang = khach_hang::find($id);
        if (is_null($khach_hang)) {
           $arr = [
           'status' => 'fail',
           'message' => 'Không có khách hàng này',
           'data' => []
           ];
           return response()->json($arr, 200);
       }
        $khach_hang->update($input);
        $arr = [
           'status' => 'success',
           'data' => new khach_hang_resource($khach_hang)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $khach_hang = khach_hang::find($id);
        if(is_null($khach_hang)){
            $arr = [
                'status' => 'fail',
                'message' => 'Xóa thất bại. Không tìm thấy.',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        khach_hang::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'khách hàng đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
