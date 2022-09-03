<?php

namespace App\Http\Controllers\Api;

use App\Models\Supplier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\SupplierRequest;
use App\Http\Resources\SupplierResource;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     */
    private $NUM_PAGES = 5;
    public function index(Request $request)
    {
        // $name = $request->$name;
        // $name = $request->route('name');
        // error_log($request);
        // $suppliers = Supplier::searchByName($name)->paginate($this->NUM_PAGES)->withQueryString();
        // return SupplierResource::collection($suppliers);

        return SupplierResource::collection(Supplier::all());
        // return SupplierResource::collection(Supplier::paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplierRequest $request)
    {
        $supplier = Supplier::create($request->validated());
        error_log("---->");
        error_log($supplier);

        return new SupplierResource($supplier);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function show(Supplier $supplier)
    {
        return new SupplierResource($supplier);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function update(SupplierRequest $request, Supplier $supplier)
    {
         $supplier->update($request->validated());

        return new SupplierResource($supplier);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Supplier  $supplier
     * @return \Illuminate\Http\Response
     */
    public function destroy(Supplier $supplier)
    {
        $supplier->delete($supplier);

        return response()->noContent();
    }
}
