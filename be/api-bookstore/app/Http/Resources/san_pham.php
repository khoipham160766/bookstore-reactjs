<?php

namespace App\Http\Resources;

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
            'Ma_Sach'=>$this->id,
            'NXB'=>$this->NXB,
            'Tac_Gia'=>$this->Tac_Gia,
            'Don_Gia'=>$this->Don_Gia,
            'So_Luong'=>$this->So_Luong,
            'Giam_Gia'=>$this->Giam_Gia,
            'Mo_Ta'=>$this->Mo_Ta,
            'Danh_Muc'=>$this->Danh_Muc,
            'Tinh_Trang'=>$this->Tinh_Trang,
            'Hinh_Anh'=>$this->Hinh_Anh,
            'created_at'=>$this->created_at->format('d/m/Y'),
            'updated_at'=>$this->updated_at->format('d/m/Y')
        ];
    }
}
