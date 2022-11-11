<?php

namespace App\Http\Resources;

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
            'Ma_PH'=>$this->id,
            'Ma_KH'=>$this->Ma_KH,
            'Noi_Dung'=>$this->Noi_Dung,
            'Phan_Hoi'=>$this->Phan_Hoi,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y')
        ];
    }
}
