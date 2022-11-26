<?php

namespace App\Http\Resources;
// thêm model
use App\Models\danh_muc;
// thêm lệnh use resource
use App\Http\Resources\danh_muc as danh_muc_resource;
use Illuminate\Http\Resources\Json\JsonResource;

class san_pham extends JsonResource
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
            'id'=>$this->STT,
            'Ma_SP'=>$this->id,
            'Ten_SP'=>$this->Ten_SP,
            'NXB'=>$this->NXB,
            'Tac_Gia'=>$this->Tac_Gia,
            'Don_Gia'=> number_format($this->Don_Gia,0,'.','.'),
            'So_Luong'=>$this->So_Luong,
            'Giam_Gia'=>$this->Giam_Gia,
            'Mo_Ta'=>$this->Mo_Ta,
            'Danh_Muc'=> new danh_muc_resource(danh_muc::find($this->Danh_Muc)),
            'Tinh_Trang'=>$this->Tinh_Trang,
            'Hinh_Anh'=>$this->Hinh_Anh,
            'created_at'=>$this->created_at->format('Y-m-d'),
            'updated_at'=>$this->updated_at->format('d/m/Y')
        ];
    }
}
