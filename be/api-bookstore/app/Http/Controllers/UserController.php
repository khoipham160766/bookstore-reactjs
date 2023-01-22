<?php

namespace App\Http\Controllers;

use App\Models\khach_hang;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userregister(Request $request){
        $user = khach_hang::create([
            'Ho_KH'=>$request->Ho_KH,
            'Tai_Khoan'=>$request->Tai_Khoan,
            'Mat_Khau'=>Hash::make($request->Mat_Khau),
            'Ten_KH'=>$request->Ten_KH,
            'Dia_Chi'=>$request->Dia_Chi,
            'SDT'=>$request->SDT,
            'Gioi_Tinh'=>$request->Gioi_Tinh,
            'Avatar'=>$request->Avatar,
            'Tinh_Trang'=>$request->Tinh_Trang,
            'Ngay_Tao'=>$request->Ngay_Tao,

        ]);
        if($user){
            return response()->json([$user,'status'=>true]);
        }else{
            return response()->json(['status'=>false]);
        }
    }

    public function login(Request $request){
        $user= request(['email', 'password']);
        if(!$token = auth()->guard('user-api')->attempt($user)){
            return response()->json(['status'=>'fail','error' => 'Unauthorized'],401);
        }
        return $this->respondWithToken($token);
    }

    public function me()
    {
        return response()->json(auth()->guard('user-api')->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->guard('user-api')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'status' => 'access',
            'accessToken' => $token,
            'token_type' => 'bearer',
        ]);
    }
}
