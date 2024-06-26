<?php

use App\Http\Controllers\TesztController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tesztek', [TesztController::class, 'tesztek']);
Route::get('/tesztek/kategoria/{id}', [TesztController::class, 'tesztek_kategoria']);
Route::get('/kategoria', [TesztController::class, 'kategoria']);