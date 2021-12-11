<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Summernote Editor in Laravel with Coding Driver</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>
</head>

<body>
    <div class="container">
        <h1 class="text-center display-1 mb-5">Add Product</h1>

        @if(isset($action))
        <form action="{{URL('/admin/product/'.$obj->id)}}" method="POST" enctype="multipart/form-data">
            @if($action == 'edit')
            @method('put')
            @elseif($action == 'delete')
            @method('delete')
            @endif
            @else
            <form action="/admin/product" method="POST" enctype="multipart/form-data">
                @endif
                <!-- @foreach($errors->all() as $error)
        <p>{{$error}}</p>
    @endforeach -->
                @csrf
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" value="{{$obj->name ?? old('name')}}" placeholder="Enter Name">
                    @error("name")
                    <div class="alert alert-danger mt-2">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="lname">Price</label>
                    <input type="number" class="form-control" name="price" value="{{$obj->price ?? old('price')}}" placeholder="Enter Price">
                    @error("price")
                    <div class="alert alert-danger mt-2">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="detail">Detail</label>
                    <textarea class="summernote" name="detail">@if(isset($obj)){!!$obj->detail!!}@endif</textarea>
                    @error("detail")
                    <div class="alert alert-danger mt-2">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="detail">Images</label>
                    <input type="file" class="form-control" name="photos[]" multiple/>
                    @if(isset($obj))
                        @foreach($obj->images as $img)
                            <p class="m-0">{{$img->image_path}} <a href="{{URL('/delete/image/'.$img->id.'/'.$obj->id)}}">Delete</a></p>
                        @endforeach
                    @endif
                    @error("photos")
                    <div class="alert alert-danger mt-2">{{$message}}</div>
                    @enderror
                </div>
                <div class="form-group">
                    <label for="detail">Description</label>
                    <textarea class="summernote" name="desc">@if(isset($obj)){!!$obj->description!!}@endif</textarea>
                    @error("detail")
                    <div class="alert alert-danger mt-2">{{$message}}</div>
                    @enderror
                </div>
                @if(isset($action))
                <form action="{{URL('/student/'.$obj->id)}}" method="POST">
                    @if($action == 'edit')
                    <button type="submit" class="btn btn-warning">Edit</button>
                    @elseif($action == 'delete')
                    <button type="submit" class="btn btn-danger">Delete</button>
                    @endif
                    @else
                    <button type="submit" class="btn btn-primary">Submit</button>
                    @endif
                    <a href="/admin/product" class="btn btn-primary">Cancel</a>
                </form>
    </div>


    <script>
        $(document).ready(function() {
            $('.summernote').summernote();
        });
    </script>
</body>

</html>