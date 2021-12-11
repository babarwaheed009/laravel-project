<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>@yield("title","Yugo")</title>
	@include('layout.css')
	@include('layout.script')
</head>

<body>
	@section('header')
	@include('layout.header')
	@show

	@section('main')

	@show

	@section('footer')
	@include('layout.footer')
	@show


	@yield('script')
</body>

</html>