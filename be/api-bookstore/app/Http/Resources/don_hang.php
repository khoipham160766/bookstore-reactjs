<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class don_hang extends JsonResource
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
            'Ma_KH'=> $this->Ma_KH,
            'Ma_NV' => $this->Ma_NV,
            'Ho_Ten_KH' => $this->Ho_Ten_KH,
            'Dia_Chi'=> $this->Dia_Chi,
            'SDT' => $this->SDT,
            'Tong_Tien' => $this->Tong_Tien,
            'Ma_KM' => $this->Ma_KM,
            'Thanh_Tien' => $this->Thanh_Tien,
            'Trang_Thai'=>$this->Trang_Thai,
            'created_at'=>$this->created_at->format('d/m/Y'),
            'updated_at'=>$this->updated_at->format('d/m/Y')
        ];
    }
}
