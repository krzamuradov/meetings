<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\MeetingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource("/meetings", MeetingController::class);
Route::apiResource("/documents", DocumentController::class);
