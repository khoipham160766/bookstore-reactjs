<?php

namespace App\Http\Resources;
// thêm model
use App\Models\san_pham;
// thêm lệnh use resource
use App\Http\Resources\san_pham as san_pham_resource;
use Illuminate\Http\Resources\Json\JsonResource;

class chi_tiet_don_hang extends JsonResource
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
            'Ma_SP' =>$this->Ma_SP,
            'So_Luong' => $this->So_Luong,
            'Thong_Tin_San_Pham' => new san_pham_resource(san_pham::find($this->Ma_SP))
        ];
    }
}
