<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\phan_hoi;
// thêm lệnh use resource
use App\Http\Resources\phan_hoi as phan_hoi_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class phan_hoi_Controller extends Controller
{
    public function index()
    {
        $phan_hoi = phan_hoi::select(phan_hoi::raw('*,ROW_NUMBER() OVER(ORDER BY id ASC) AS STT'))->get();
        $arr = [
            'status' => 'success',
            'data' => phan_hoi_resource::collection($phan_hoi)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ma_KH'=>'required',
            'Noi_Dung'=>'required',
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $phan_hoi = phan_hoi::create($input);
        $arr = [
            'status' => 'success',
            'data' => new phan_hoi_resource($phan_hoi)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $phan_hoi = phan_hoi::find($id);
        if(is_null($phan_hoi)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại mã phản hồi này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new phan_hoi_resource($phan_hoi)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $phan_hoi = phan_hoi::find($id);
        if(is_null($phan_hoi)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có phản hồi này'
            ];
            return response()->json($arr, 200);
        }
        $phan_hoi->update($input);
        $arr = [
            'status' => 'success',
            'data' => new phan_hoi_resource($phan_hoi)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $phan_hoi = phan_hoi::find($id);
        if(is_null($phan_hoi)){
            $arr = [
                'status' => 'fail',
                'message' => 'Xóa thất bại.'
            ];
            return response()->json($arr, 200);
        }
        phan_hoi::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'Phản hồi đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
