<?php

namespace App\Http\Resources;

use App\Models\san_pham;
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
            'id'=>$this->STT,
            'Ma_DM'=>$this->id,
            'Ten_DM'=>$this->Ten_DM,
            'Ngay_Dang'=>$this->created_at->format('d/m/Y'),
            'Ngay_Cap_Nhat'=>$this->updated_at->format('d/m/Y'),
            'Tong_San_Pham' => $san_pham = san_pham::where('Danh_Muc','=',$this->id)->count()
        ];
    }
}
