<?php

namespace App\Http\Controllers;

// thêm model
use App\Models\san_pham;
// thêm lệnh use resource
use App\Http\Resources\san_pham as san_pham_resource;
use App\Http\Resources\book_user as book_user_resource;
// validate
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class san_pham_Controller extends Controller
{
    public function index()
    {
        $san_pham = san_pham::select(san_pham::raw('*,ROW_NUMBER() OVER(ORDER BY id ASC) AS STT'))->get();
        $arr = [
            'status' => 'success',
            'data' => san_pham_resource::collection($san_pham)
        ];
        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all(); 
        $validator = Validator::make($input, [
            'Ten_SP' => 'required', 
            'NXB' => 'required',
            'Tac_Gia' => 'required', 
            'Don_Gia' => 'required',
            'So_Luong' => 'required', 
            'Giam_Gia' => 'required',
            'Danh_Muc' => 'required',
            'Tinh_Trang' => 'required',
            'Hinh_Anh' => 'required',
        ]);
        if($validator->fails()){
            $arr = [
            'status' => 'fail',
            'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $san_pham = san_pham::create($input);
        $arr = [
            'status' => 'success',
            'data'=> new san_pham_resource($san_pham)
        ];
        return response()->json($arr, 201);
    }

    public function show($id)
    {
        $san_pham = san_pham::find($id);
        if (is_null($san_pham)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có sản phẩm này',
            'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
        'status' => 'success',
        'data'=> new san_pham_resource($san_pham)
        ];
        return response()->json($arr, 201);
    }


    public function update(Request $request, $id)
    {
        $input = $request->all();
         $san_pham = san_pham::find($id);
         if (is_null($san_pham)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có sản phẩm này',
            'data' => []
            ];
            return response()->json($arr, 200);
        }
         $san_pham->update($input);
         $arr = [
            'status' => 'success',
            'data' => new san_pham_resource($san_pham)
         ];
         return response()->json($arr, 200);
    }

    public function destroy($id)
    {
        //
    }
    public function publisher(){
        $publisher = san_pham::select('NXB')->groupBy('NXB')->get();
        if (is_null($publisher)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Lấy danh sách tác giả thất bại',
            'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => 'success',
            'data' => $publisher
        ];
        return response()->json($arr,200);
    }
    public function detail($id){
        $info_book = san_pham::find($id);
        if (is_null($info_book)) {
            $arr = [
            'status' => 'fail',
            'message' => 'Không có sản phẩm này',
            'data' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
        'status' => 'success',
        'data'=> new book_user_resource($info_book)
        ];
        return response()->json($arr, 201);
    }
}
