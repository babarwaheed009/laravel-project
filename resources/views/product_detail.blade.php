@extends('layout.home_layout')

@section('main')
<div id="product-detail" class="my-5">
    <div class="container">
        <div class="row py-3">
            <div class="col-sm-4">
                <img class="img-fluid w-100" style="height:250px" src="/storage/upload/{{$product['images'][0]['image_path']}}" alt="">
                <div class="row">
                    @foreach($product['images'] as $img)
                        <div class="col-sm-3 mt-2 small-images">
                            <img class="img-fluid h-100" src="/storage/upload/{{$img['image_path']}}" alt="">
                        </div>
                    @endforeach
                </div>

            </div>
            <div class="col-sm-8">
                <h3>{{$product['name']}}</h3>
                <h3 class="text-success">Price: ${{$product['price']}}</h3>
                <div>{!!$product['description']!!}</div>
            </div>
        </div>
    </div>
</div>
@endsection