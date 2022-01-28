<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RequestHelper extends Controller
{
    /**
     * Display the email verification prompt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    static public function doRequest(String $url, $body, $headers)
    {
        $requestURL = env('API_URL') .'/api'.  $url;
        $response = Http::get($requestURL);
        var_dump($response);
    }
}
