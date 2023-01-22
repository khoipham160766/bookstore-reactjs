<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
// thêm model
use App\Models\san_pham;
// thêm lệnh use resource
use App\Http\Resources\san_pham as san_pham_resource;
class doughnut extends JsonResource
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
            'Ma_SP' => $this->Ma_SP,
            'TT_SP'=> new san_pham_resource(san_pham::find($this->Ma_SP)),
        ];
    }
}
