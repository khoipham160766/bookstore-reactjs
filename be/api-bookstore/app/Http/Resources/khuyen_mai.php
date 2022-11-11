<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class khuyen_mai extends JsonResource
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
            'ID_KM'=>$this->id,
            'Ma_KM'=>$this->Ma_KM,
            'Ten_KM'=>$this->Ten_KM,
            'Mo_Ta'=>$this->Mo_Ta,
            'Phan_Tram_KM'=>$this->Phan_Tran_KM,
            'Tien_KM'=>$this->Tien_KM,
            'Ngay_Bat_Dau'=>$this->Ngay_Bat_Dau,
            'Ngay_Ket_Thuc'=>$this->Ngay_Ket_Thuc,
            'created_at'=>$this->created_at->format('d/m/Y'),
            'updated_at'=>$this->updated_at->format('d/m/Y')
        ];
    }
}
