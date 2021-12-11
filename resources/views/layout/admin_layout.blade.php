<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>@yield("title","Admin Panel")</title>
	@include('layout.css')
	@include('layout.script')
</head>

<body>
	<div class="text-right mt-3 mr-5">
		<a href="/logout" class="btn btn-danger">Log Out</a>
	</div>
	@section('main')

	@show
	@yield('script')
</body>

</html>