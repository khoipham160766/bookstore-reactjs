<?php

namespace App\Http\Controllers;
// thêm model
use App\Models\chi_tiet_don_hang;
// thêm lệnh use resource
use App\Http\Resources\chi_tiet_don_hang as chi_tiet_don_hang_resource;
use Illuminate\Http\Request;

class chi_tiet_don_hang_Controller extends Controller
{
    public function index()
    {
        $chi_tiet_don_hang = chi_tiet_don_hang::all();
        $arr = [
            'status' => 'success',
            'message' => "Danh sách chi tiết đơn hàng",
            'data'=>chi_tiet_don_hang_resource::collection($chi_tiet_don_hang)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $chi_tiet_don_hang = chi_tiet_don_hang::create($input);
        $arr = [
            'status' => 'success',
            'message'=> 'Thêm chi tiết đơn hàng thành công',
            'data'=> new chi_tiet_don_hang_resource($chi_tiet_don_hang)
        ];
        return response()->json($arr, 201);
    }

    public function show($id)
    {
        $chi_tiet_don_hang = chi_tiet_don_hang::where('id','=',$id)->get();
        if (is_null($chi_tiet_don_hang)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có chi tiết đơn hàng',
            'dara' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
        'status' => 'success',
        'message' => "Chi tiết đơn hàng ",
        'data'=> chi_tiet_don_hang_resource::collection($chi_tiet_don_hang)
        ];
        return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'Ten_DM'=>'required'
        ]);
        if($validator->fails()){
            $arr = [
              'status' => 'fail',
              'message' => 'Lỗi kiểm tra dữ liệu',
              'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
         }
         $chi_tiet_don_hang = chi_tiet_don_hang::find($id);
         if (is_null($chi_tiet_don_hang)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có chi tiết đơn hàng này',
            'data' => []
            ];
            return response()->json($arr, 200);
        }
         $chi_tiet_don_hang->update($input);
         $arr = [
            'status' => 'success',
            'message' => 'chi tiết đơn hàng cập nhật thành công',
            'data' => new chi_tiet_don_hang_resource($chi_tiet_don_hang)
         ];
         return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        chi_tiet_don_hang::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'chi tiết đơn hàng đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
