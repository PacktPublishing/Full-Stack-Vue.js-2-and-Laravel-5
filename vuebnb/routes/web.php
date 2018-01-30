<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Listing;

// Route::get('/', function () {
//     return view('app');
// });

Route::get('/listing/{listing}', function (Listing $listing) {
  $model = $listing->toArray();
  return view('app', [ 'model' => $model ]);
});