<?php

namespace App\Http\Controllers\Api;

use App\Models\PurchaseDetail;
use App\Http\Controllers\Controller;
use App\Http\Requests\PurchaseDetailRequest;
use App\Http\Resources\PurchaseDetailResource;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $id = $request->query('purchase_id');

        if(isset($id)){
        return  DB::table('purchase_details')->where('purchase_id', $id)->get();}

        return PurchaseDetailResource::collection(PurchaseDetail::all());
    }

    public function findByPurchase(){
        return  DB::table('purchase_details')->where('purchase_id', 2)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $data = $request->all();

    foreach ($data as $key => $value) {
        PurchaseDetail::create($value);
    }

    return response()->noContent();

        // die();
        // $purchaseDetail = PurchaseDetail::create($request->validated());

        // return new PurchaseDetailResource($purchaseDetail);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PurchaseDetail  $purchaseDetail
     * @return \Illuminate\Http\Response
     */
    public function show(PurchaseDetail $purchaseDetail)
    {
        return new PurchaseDetailResource($purchaseDetail);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PurchaseDetail  $purchaseDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PurchaseDetail $purchaseDetail)
    {

    //       $id = $request->query('purchase_id');

    //     if(isset($id)){
    //     return  DB::table('purchase_details')->where('purchase_id', $id)->get();
    // }

    ddd($request);

        return PurchaseDetailResource::collection(PurchaseDetail::all());
        // $purchaseDetail->update($request->validated());

        // return new PurchaseDetailResource($purchaseDetail);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PurchaseDetail  $purchaseDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(PurchaseDetail $purchaseDetail)
    {
        $purchaseDetail->delete($purchaseDetail);

        return response()->noContent();
    }
}
