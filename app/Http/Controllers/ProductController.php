<?php

namespace App\Http\Controllers;

use App\Models\Images;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with('images')->get();;
        return view('product_table')->with(['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('product_form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'detail' => 'required',
            'desc' => 'required',
        ]);
        $uuid = Str::uuid()->toString();
        $product = new Product();
        $product->id = $uuid;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->detail = $request->detail;
        $product->description = $request->desc;
        $is_save = $product->save();
        if ($is_save) {
            // Images Upload
            if ($request->hasFile('photos')) {
                $allowedfileExtension = ['pdf', 'jpg', 'png', 'docx'];
                $files = $request->file('photos');
                foreach ($files as $file) {

                    $extension = $file->getClientOriginalExtension();
                    $check = in_array($extension, $allowedfileExtension);
                    if ($check) {
                        $filename = $file->getClientOriginalName();
                        $fileStore = $file->storeAs('public/upload', $filename);
                        $image = new Images();
                        $image->product_id = $uuid;
                        $image->image_path = $filename;
                        $image->save();
                    } else {
                        echo '<div class="alert alert-warning"><strong>Warning!</strong> Sorry Only Upload png , jpg , doc</div>';
                    }
                }
            }
            return redirect('/admin/product');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $action = 'edit';
        if ($request->delete) {
            $action = 'delete';
        }
        $product = Product::where('id', $id)->with('images')->first();

        return view('product_form', ['obj' => $product, 'action' => $action]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'detail' => 'required',
            'desc' => 'required',
        ]);

        $product = Product::where('id', $id)->first();
        $productID = $product->id;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->detail = $request->detail;
        $product->description = $request->desc;
        $is_save = $product->save();
        if ($is_save) {
            if ($request->hasFile('photos')) {

                $allowedfileExtension = ['pdf', 'jpg', 'png', 'docx'];
                $files = $request->file('photos');
                foreach ($files as $file) {
                    $extension = $file->getClientOriginalExtension();
                    $check = in_array($extension, $allowedfileExtension);
                    if ($check) {
                        $filename = $file->getClientOriginalName();
                        $fileStore = $file->storeAs('public/upload', $filename);
                        $image = new Images();
                        $image->product_id = $productID;
                        $image->image_path = $filename;
                        $image->save();
                    } else {
                        echo '<div class="alert alert-warning"><strong>Warning!</strong> Sorry Only Upload png , jpg , doc</div>';
                    }
                }
            } else {
                echo "File Not Found";
            }
            return redirect('/admin/product');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::where('id', $id)->first();
        $is_delete = $product->delete();
        if ($is_delete) {
            return redirect('/admin/product');
        }
    }

    public function deleteImage($image_id , $product_id)
    {
        $image = Images::where('id', $image_id)->first();
        $image->delete();
        $product = Product::where('id', $product_id)->with('images')->first();
        return view('product_form', ['obj' => $product, 'action' => 'edit']);
    }
}
