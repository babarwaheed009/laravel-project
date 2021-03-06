<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WebController::class, 'home']);
Route::get('/admin', [WebController::class, 'admin'])->middleware('logout');
Route::post('/login', [AuthController::class, 'login']);
Route::resource('/admin/product',ProductController::class)->middleware('login');
Route::get('/delete/image/{image_id}/{product_id}',[ProductController::class,'deleteImage']);
Route::get('/product/detail/{id}',[WebController::class,'productDetail']);
Route::get('/logout',[AuthController::class,'logout']);
