<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class danh_muc extends JsonResource
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
            'Ma_DM'=>$this->id,
            'Ten_DM'=>$this->Ten_DM,
            'Ngay_Dang'=>$this->created_at->format('d/m/Y'),
            'Ngay_Cap_Nhat'=>$this->updated_at->format('d/m/Y')
        ];
    }
}
