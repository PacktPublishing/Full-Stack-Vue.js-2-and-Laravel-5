<?php

use Illuminate\Support\Facades\Config;

if (!function_exists('cdn'))
{
    function cdn($asset)
    {
        if (Config::get('app.cdn.bypass') || !Config::get('app.cdn.url')) {
            return asset($asset);
        } else {
            return  "//" . Config::get('app.cdn.url') . '/' . $asset;
        }
    }
}
