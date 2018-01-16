<?php

// use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// use App\Listing;

// Route::get('listing/{listing}', function(Listing $listing) {
//   return $listing->toJson();
// });

Route::get('/listing/{listing}', 'ListingController@get_listing_api');
