<?php

namespace App\Http\Controllers;
// thêm model
use App\Models\danh_muc;
// thêm lệnh use resource
use App\Http\Resources\danh_muc as danh_muc_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class danh_muc_Controller extends Controller
{

    public function index()
    {
        $danh_muc = danh_muc::select(danh_muc::raw('*,ROW_NUMBER() OVER(ORDER BY id ASC) AS STT'))->get();
        $arr = [
            'status' => 'success',
            'message' => "Danh sách danh mục",
            'data'=>danh_muc_resource::collection($danh_muc)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ten_DM'=>'required',
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'message'=> 'Lỗi kiểm tra dữ liệu',
                'data'=> $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $danh_muc = danh_muc::create($input);
        $arr = [
            'status' => 'success',
            'message'=> 'Thêm danh mục thành công',
            'data'=> new danh_muc_resource($danh_muc)
        ];
        return response()->json($arr, 201);
    }

    public function show($id)
    {
        $danh_muc = danh_muc::find($id);
        if (is_null($danh_muc)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có sản danh mục này',
            'dara' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
        'status' => 'success',
        'message' => "Chi tiết danh mục ",
        'data'=> new danh_muc_resource($danh_muc)
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
         $danh_muc = danh_muc::find($id);
         if (is_null($danh_muc)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có danh mục này',
            'data' => []
            ];
            return response()->json($arr, 200);
        }
         $danh_muc->update($input);
         $arr = [
            'status' => 'success',
            'message' => 'danh mục cập nhật thành công',
            'data' => new danh_muc_resource($danh_muc)
         ];
         return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        danh_muc::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'danh mục đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
