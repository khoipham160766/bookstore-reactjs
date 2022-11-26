<?php

namespace App\Http\Resources;
use App\Models\khach_hang;
// thêm lệnh use resource
use App\Http\Resources\khach_hang as khach_hang_resource;
use Illuminate\Http\Resources\Json\JsonResource;

class dashboard_best_customer extends JsonResource
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
            'Ma_KH'=>$this->Ma_KH,
            'Tong_Thanh_Tien'=>$this->Tong_Thanh_Tien,
            'So_Don_Hang'=>$this->So_Don_Hang,
            'TT_KH'=>new khach_hang_resource(khach_hang::find($this->Ma_KH))
        ];;
    }
}
