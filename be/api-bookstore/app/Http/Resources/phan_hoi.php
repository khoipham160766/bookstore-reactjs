<?php

namespace App\Http\Resources;
// thêm model
use App\Models\khach_hang;
// thêm lệnh use resource
use App\Http\Resources\khach_hang as khach_hang_resource;
use Illuminate\Http\Resources\Json\JsonResource;

class phan_hoi extends JsonResource
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
            'Ma_PH'=>$this->id,
            'Ma_KH'=>new khach_hang_resource(khach_hang::find($this->Ma_KH)),
            'Noi_Dung'=>$this->Noi_Dung,
            'Email' => $this->Email,
            'created_at' => $this->created_at->format('Y-m-d'),
            'updated_at' => $this->updated_at->format('d/m/Y')
        ];
    }
}
