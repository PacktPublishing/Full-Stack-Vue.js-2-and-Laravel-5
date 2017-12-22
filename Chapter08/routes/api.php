<?php

Route::get('/listing/{listing}', 'ListingController@get_listing_api');

Route::get('/', 'ListingController@get_home_api');

Route::get('/saved', 'ListingController@get_home_api');
