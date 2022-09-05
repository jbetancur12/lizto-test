<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;
    protected $fillable = ['state', 'total_cost', 'supplier_id'];

    public function supplier()
    {
        return $this->belongsTo('App\Models\Supplier');
    }

    public function products()
    {
        return $this->hasMany('App\Models\Product');
    }

    public function purchaseDetails()
    {
        return $this->hasMany('App\Models\PurchaseDetail');
    }
}
