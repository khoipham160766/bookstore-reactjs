<?php

namespace App\Http\Resources;
use App\Models\san_pham;
// thêm lệnh use resource
use App\Http\Resources\san_pham as san_pham_resource;
use Illuminate\Http\Resources\Json\JsonResource;

class book_user extends JsonResource
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
            'TT_SP'=> new san_pham_resource(san_pham::find($this->id))

        ];
    }
}
