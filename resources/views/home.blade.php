@extends('admin')

@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div id="app">
                <div class="card">
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
