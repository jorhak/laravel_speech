<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/* Route::get('/', function () {
    return view('welcome');
}); */

Route::get('/index', function () {
    return view('main.index');
})->name('index');

Route::get('/create', function () {
    return view('main.create');
})->name('create');

Route::get('/edit/{id}', function ($id) {
    // Lógica para obtener los datos del elemento con el ID proporcionado
    return view('main.edit', ['id' => $id]);
})->name('edit');