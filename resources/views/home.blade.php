@extends('layout.home_layout')

@section('main')
<section class="py-5 my-5" id="categories">
    <div class="container-fluid">
        <h1 class="header brdr-botm text-center text-uppercase"><span class="text-success">Pro</span>ducts</h1>
        <div class="row" id="watch-block">
            @foreach($products as $product)
            <a href="{{URL('product/detail/'.$product->id)}}" class="col-md-3">
                <div class="card">
                    <img src="/storage/upload/{{$product['images'][0]['image_path']}}" alt="" />
                    <div class="card-body">
                        <h4 class="text-dark">{{$product['name']}}</h4>
                        <h4 class="text-success price float-left">${{$product['price']}}</h4>
                    </div>
                </div>
            </a>
            @endforeach
        </div>

    </div>
</section>
@endsection