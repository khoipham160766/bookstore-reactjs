<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class nhap_hang extends JsonResource
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
            'Ma_Nhap'=>$this->id,
            'Ma_NV'=>$this->Ma_NV,
            'Tong_Tien'=>$this->Tong_Tien,
            'Nguon_Nhap'=>$this->Nguon_Nhap,
            'Ngay_Nhap'=>$this->Ngay_Nhap,
            'created_at'=>$this->created_at->format('d/m/Y'),
            'updated_at'=> $this->updated_at->format('d/m/Y')
        ];
    }
}
