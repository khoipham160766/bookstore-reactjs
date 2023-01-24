<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\tin_tuc;
// thêm lệnh use resource
use App\Http\Resources\tin_tuc as tin_tuc_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class tin_tuc_Controller extends Controller
{
    public function index()
    {
        $tin_tuc = tin_tuc::select(tin_tuc::raw('*,ROW_NUMBER() OVER(ORDER BY Ngay_Dang DESC) AS STT'))->get();
        $arr = [
            'status' => 'success',
            'data' => tin_tuc_resource::collection($tin_tuc)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input,[
            'Ma_NV'=>'required',
            'Tieu_De'=>'required',
            'Hinh_Chinh'=>'required',
            'Noi_Dung'=>'required'
        ]);
        if($validator->fails()){
            $arr = [
                'status' => 'fail',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $tin_tuc = tin_tuc::create($input);
        $arr = [
            'status' => 'success',
            'data' => new tin_tuc_resource($tin_tuc)
        ];
        return response()->json($arr, 200);
    }

    public function show($id)
    {
        $tin_tuc = tin_tuc::find($id);
        if(is_null($tin_tuc)){
            $arr = [
                'status' => 'fail',
                'messege' => 'Không tồn tại tin tức này',
                'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data'=> new tin_tuc_resource($tin_tuc)
            ];
            return response()->json($arr, 201);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $tin_tuc = tin_tuc::find($id);
        if(is_null($tin_tuc)){
            $arr = [
                'status' => 'fail',
                'mesage' => 'Không có tin tức này'
            ];
            return response()->json($arr, 200);
        }
        $tin_tuc->update($input);
        $arr = [
            'status' => 'success',
            'data' => new tin_tuc_resource($tin_tuc)
        ];
        return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        $tin_tuc = tin_tuc::find($id);
        if(is_null($tin_tuc)){
            $arr = [
                'status' => 'fail',
                'message' => 'Không cótin tức này. Xóa thất bại.'
            ];
            return response()->json($arr, 200);
        }
        tin_tuc::destroy($id);
        $arr = [
            'status' => 'success',
            'message' =>'Tin tức đã được xóa',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
    public function getNewsPromotion($id){
        if($id != 0){
            $news = tin_tuc::where('Loai_Tin_Tuc','=','Khuyến mãi')
                            ->where('Ma_DM','=',$id)
                            ->orderBy('Ngay_Dang','desc')->get();
        }else if($id == 0){
            $news = tin_tuc::where('Loai_Tin_Tuc','=','Khuyến mãi')
                            ->orderBy('Ngay_Dang','desc')->get();
        }
        $arr = [
            'status' => 'success',
            'data' => tin_tuc_resource::collection($news)
        ];
        return response()->json($arr,200);
    }
    public function getNewsProduct($id){
        if($id != 0){
            $news = tin_tuc::where('Loai_Tin_Tuc','=','Tin Tức Sản phẩm')
                            ->where('Ma_DM','=',$id)
                            ->orderBy('Ngay_Dang','desc')->get();
        }else if($id == 0){
            $news = tin_tuc::where('Loai_Tin_Tuc','=','Tin Tức Sản phẩm')
                            ->orderBy('Ngay_Dang','desc')->get();
        }
        $arr = [
            'status' => 'success',
            'data' => tin_tuc_resource::collection($news)
        ];
        return response()->json($arr,200);
    }
}
