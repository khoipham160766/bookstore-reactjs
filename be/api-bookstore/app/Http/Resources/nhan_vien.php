<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class nhan_vien extends JsonResource
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
            'id' => $this->id,
            'Ho_NV' => $this->Ho_NV,
            'Ten_NV' => $this->Ten_NV,
            'Ngay_Sinh' => $this->Ngay_Sinh,
            'Gioi_Tinh' => $this->Gioi_Tinh,
            'Dia_Chi' => $this->Dia_Chi,
            'SDT' => $this->SDT,
            'Tai_Khoan' => $this->Tai_Khoan,
            'Mat_Khau' => $this->Mat_Khau,
            'Tinh_Trang' => $this->Tinh_Trang,
            'Quyen' => $this->Quyen,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y')
        ];
    }
}
