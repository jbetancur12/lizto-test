<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AdminLTE 3 | Starter</title>

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="hold-transition sidebar-mini" id="app">
    <div class="wrapper">
        <x-mainNavbar />
        <x-sidebar />
        <x-container />
        <x-secondarySidebar />
        <x-footer />
    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
