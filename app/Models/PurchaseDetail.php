<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseDetail extends Model
{
    use HasFactory;
    protected $fillable = ['purchase_id', 'product_id', 'quantity', 'cost', 'total_cost'];

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    public function purchase()
    {
        return $this->belongsTo('App\Models\Purchase');
    }
}
