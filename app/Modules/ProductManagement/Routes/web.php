<?php
use App\Modules\ProductManagement\Brand\Controllers\BrandController;
use Illuminate\Support\Facades\Route;
use App\Modules\UserManagement\Users\Controllers\UserController;

Route::group(['prefix' => 'product-management', 'as' => 'product-management.'], function () {
    Route::post('brands/delete-multi', [BrandController::class, 'destroyMulti'])->name('brands.delete-multi');
    Route::post('brand-update/{brand}', [BrandController::class, 'updateBrand'])->name('brand-update');
    Route::resource('brands', BrandController::class);
});
