<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/', '/dashboard');
    Route::get('/dashboard', fn() => Inertia::render('Dashboard/Dashboard'))->name('dashboard');

    require base_path('app/Modules/UserManagement/Users/Routes/web.php');
});

require __DIR__.'/auth.php';
