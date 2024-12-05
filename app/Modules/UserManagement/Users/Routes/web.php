<?php
use Illuminate\Support\Facades\Route;
use App\Modules\UserManagement\Users\Controllers\UserController;

Route::group(['prefix' => 'user-management', 'as' => 'user-management.'], function () {
    Route::post('users/delete-multi', [UserController::class, 'destroyMulti'])->name('users.delete-multi');
    Route::resource('users', UserController::class);
});
