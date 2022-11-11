<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class phan_quyen extends JsonResource
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
            'Ma_Quyen' => $this->id,
            'Ten_Quyen' => $this->Ten_Quyen,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y')
        ];
    }
}
