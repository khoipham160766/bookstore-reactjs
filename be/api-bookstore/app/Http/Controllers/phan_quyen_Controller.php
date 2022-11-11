<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\phan_quyen;
// thêm lệnh use resource
use App\Http\Resources\phan_quyen as phan_quyen_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class phan_quyen_Controller extends Controller
{
    public function index()
    {
        $phan_quyen = phan_quyen::all();
        $arr = [
            'status' => 'success',
            'data' => phan_quyen_resource::collection($phan_quyen)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ten_Quyen' => 'required'
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $phan_quyen = phan_quyen::create($input);
        $arr = [
            'status' => 'success',
            'data' => new phan_quyen_resource($phan_quyen)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $phan_quyen = phan_quyen::find($id);
        if(is_null($phan_quyen)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại quyền này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new phan_quyen_resource($phan_quyen)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $phan_quyen = phan_quyen::find($id);
        if(is_null($phan_quyen)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có quyền này'
            ];
            return response()->json($arr, 200);
        }
        $phan_quyen->update($input);
        $arr = [
            'status' => 'success',
            'data' => new phan_quyen_resource($phan_quyen)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $phan_quyen = phan_quyen::find($id);
        if(is_null($phan_quyen)){
            $arr = [
                'status' => 'fail',
                'message' => 'Không có quyền này'
            ];
            return response()->json($arr, 200);
        }
        phan_quyen::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'Quyền đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
