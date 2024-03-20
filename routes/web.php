<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', Controllers\DashboardController::class)->name('dashboard');

    // Auth User Settings
    Route::get('settings/account', [Controllers\Settings\UpdateAccountController::class, 'index'])->name('settings.account');
    Route::patch('settings/account', [Controllers\Settings\UpdateAccountController::class, 'update']);

    Route::get('settings/security', [Controllers\Settings\SecurityController::class, 'index'])->name('settings.security');
    Route::put('settings/security', [Controllers\Settings\SecurityController::class, 'update']);

    Route::get('settings/dangerous-area', [Controllers\Settings\DeleteAccountController::class, 'index'])->name('settings.danger');
    Route::delete('settings/dangerous-area', [Controllers\Settings\DeleteAccountController::class, 'destroy']);
});

require __DIR__ . '/auth.php';
