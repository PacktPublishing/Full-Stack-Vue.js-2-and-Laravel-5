<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('listings', function (Blueprint $table) {
            $table->primary('id');
            $table->unsignedInteger('id');
            $table->string('title');
            $table->string('address');
            $table->longText('about');

            // Amenities
            $table->boolean('amenity_wifi')->default(false);
            $table->boolean('amenity_pets_allowed')->default(false);
            $table->boolean('amenity_tv')->default(false);
            $table->boolean('amenity_kitchen')->default(false);
            $table->boolean('amenity_breakfast')->default(false);
            $table->boolean('amenity_laptop')->default(false);

            // Prices
            $table->string('price_per_night')->nullable();
            $table->string('price_extra_people')->nullable();
            $table->string('price_weekly_discount')->nullable();
            $table->string('price_monthly_discount')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('listings');
    }
}
