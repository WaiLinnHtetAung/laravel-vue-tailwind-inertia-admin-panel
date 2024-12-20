<?php

namespace App\Modules\ProductManagement\Brand\Controllers;

use App\Modules\ProductManagement\Brand\Requests\UpdateBrandRequest;
use App\Modules\ProductManagement\Brand\Resources\BrandResource;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Modules\ProductManagement\Brand\Models\Brand;
use App\Modules\ProductManagement\Brand\Requests\StoreBrandRequest;

class BrandController extends Controller
{
    public function index(){
        $brands = BrandResource::collection(Brand::select('id', 'name', 'slug', 'image')->get());

        return Inertia::render('ProductManagement/Brand/Views/Index', compact('brands'));
    }

    public function store(StoreBrandRequest $request){
        DB::beginTransaction();
        try {
            $file_name = null;
            if($request->hasFile('image') && gettype($request->image) == 'object') {
                $file_name = uniqid().'_'.$request->file('image')->getClientOriginalName();
                $request->file('image')->storeAs('public/images/brands', $file_name);
            }

            $brand = new Brand();
            $brand->name = $request->name;
            $brand->image = $file_name ? '/images/brands/'.$file_name : null;
            $brand->save();

            DB::commit();
            return redirect()->route('product-management.brands.index')->with('success', 'User created successfully.');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', $e->getMessage());
        }
    }

    public function updateBrand(Request $request, Brand $brand){

        DB::beginTransaction();

        try {
           $file_name = null;
            if($request->hasFile('image') && gettype($request->image) == 'object') {
                //delete old image
                if($brand->image) {
                    \File::delete(public_path('/storage' . $brand->image));
                }

                $file_name = uniqid().'_'.$request->file('image')->getClientOriginalName();
                $request->file('image')->storeAs('public/images/brands', $file_name);
            }

            $brand->name = $request->name;
            $brand->image = $file_name ? '/images/brands/'.$file_name : $brand->image;
            $brand->update();

            DB::commit();
            return redirect()->route('product-management.brands.index')->with('success', 'User updated successfully.');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', $e->getMessage());
        }
    }

    public function destroy(Brand $brand){
        \File::delete(public_path('/storage' . $brand->image));
        $brand->delete();
        return redirect()->route('product-management.brands.index')->with('success', 'Brand deleted successfully.');
    }

    public function destroyMulti(Request $request) {
        $ids = $request->ids;

        if(is_array($ids)) {
            foreach($ids as $id) {
                $brand = Brand::find($id);
                \File::delete(public_path('/storage' . $brand->image));
                $brand->delete();
            }
        }

        return redirect()->route('product-management.brands.index')->with('success', 'Brands deleted successfully.');
    }
}
