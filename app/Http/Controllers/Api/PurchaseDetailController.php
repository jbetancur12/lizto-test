<?php

namespace App\Http\Controllers\Api;

use App\Models\PurchaseDetail;
use App\Http\Controllers\Controller;
use App\Http\Requests\PurchaseDetailRequest;
use App\Http\Resources\PurchaseDetailResource;

class PurchaseDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PurchaseDetailResource::collection(PurchaseDetail::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PurchaseDetailRequest $request)
    {
        $purchaseDetail = PurchaseDetail::create($request->validated());

        return new PurchaseDetailResource($purchaseDetail);
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
    public function update(PurchaseDetailRequest $request, PurchaseDetail $purchaseDetail)
    {
        $purchaseDetail->update($request->validated());

        return new PurchaseDetailResource($purchaseDetail);
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
