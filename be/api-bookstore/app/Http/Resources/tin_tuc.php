<?php

namespace App\Http\Resources;

use App\Models\danh_muc;
// thêm lệnh use resource
use App\Http\Resources\danh_muc as danh_muc_resource;
use Illuminate\Http\Resources\Json\JsonResource;

class tin_tuc extends JsonResource
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
            'id'=>$this->id,
            'Ma_NV'=>$this->Ma_NV,
            'Tieu_De'=>$this->Tieu_De,
            'Hinh_Chinh'=>$this->Hinh_Chinh,
            'Loai_Tin_Tuc'=>$this->Loai_Tin_Tuc,
            'Danh_Muc'=>new danh_muc_resource(danh_muc::find($this->Ma_DM)),
            'Ngay_Dang'=>$this->Ngay_Dang,
            'Noi_Dung'=>$this->Noi_Dung,
            'created_at'=>$this->created_at->format('d/m/Y'),
            'updated_at'=>$this->created_at->format('d/m/Y')
        ];
    }
}
