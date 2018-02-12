<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $casts = [
        'amenity_wifi' => 'boolean',
        'amenity_pets_allowed' => 'boolean',
        'amenity_tv' => 'boolean',
        'amenity_kitchen' => 'boolean',
        'amenity_breakfast' => 'boolean',
        'amenity_laptop' => 'boolean'
    ];
}
