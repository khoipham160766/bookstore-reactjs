<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class khach_hang extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'Ma_KH'=>$this->id,
            'Ho_KH'=>$this->Ho_KH,
            'Ten_KH'=>$this->Ten_KH,
            'Dia_Chi'=>$this->Dia_Chi,
            'SDT'=>$this->SDT,
            'Gioi_Tinh'=>$this->Gioi_Tinh,
            'Tai_Khoan'=>$this->Tai_Khoan,
            'Mat_Khau'=>$this->Mat_Khau,
            'Avatar'=>$this->Avatar,
            'Tinh_Trang'=>$this->Tinh_Trang,
            'created_at'=>$this->created_at->format('d/m/Y'),
            'updated_at'=>$this->updated_at->format('d/m/Y')
        ];
    }
}
