<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\san_pham;
// thêm lệnh use resource
use App\Http\Resources\san_pham as san_pham_resource;
class dashboard_best_book extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id'=>$this->STT,
            'Ma_SP'=>$this->Ma_SP,
            'Tong_So_Luong'=>$this->Tong_So_Luong,
            'TT_SP'=>new san_pham_resource(san_pham::find($this->Ma_SP))
        ];
    }
}
