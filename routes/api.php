<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
    
Route::namespace('Notes')->group(function (){

    Route::prefix('notes')->group(function(){
        Route::post('create-new-note', 'NoteController@store');
    });

    Route::prefix('subjects')->group(function(){
        Route::get('', 'SubjectController@index');
    });
});
