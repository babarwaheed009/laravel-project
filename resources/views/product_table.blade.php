@extends('layout.admin_layout')

@section('main')
<div class="container">
    <h1 class="display-1 text-center my-3">Products</h1>
    <a class="btn btn-primary" href="/admin/product/create">Add New</a>
    <table class="table table-striped mt-2">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @foreach($products as $product)
            <tr>
                <td>{{$product['name']}}</td>
                <td>${{$product['price']}}</td>
                <td>
                    <a class="btn btn-warning" href="{{URL('/admin/product/'.$product->id)}}"><span class="fas fa-edit"></span></a>
                    <a href="{{URL('/admin/product/'.$product->id.'?delete=1')}}" class="btn btn-danger"><span class="fas fa-trash"></span></a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection