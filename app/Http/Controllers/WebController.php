<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class WebController extends Controller
{
    public function home()
    {

        $products = Product::with('images')->get();
        return view('home')->with(['products' => $products]);
    }

    public function admin()
    {
        return view('login');
    }

    public function productDetail($id)
    {
        $product = Product::where('id', $id)->with('images')->first();
        return view('product_detail')->with(['product' => $product]);
    }
}
