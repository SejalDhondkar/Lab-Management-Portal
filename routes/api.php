<?php

use Illuminate\Http\Request;

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
Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});

Route::group(['middleware' => 'auth:api'], function(){
    // Users
    Route::get('users', 'UserController@index');
    Route::get('users/{id}', 'UserController@show');
    Route::get('roles',['uses'=>'RoleController@index','as'=>'roles.index']);
    Route::post('roles/store',['uses'=>'RoleController@store','as'=>'roles.store']);
    Route::get('roles/{id}/edit',['uses'=>'RoleController@edit','as'=>'roles.edit']);
    Route::put('roles/{id}/update',['uses'=>'RoleController@update','as'=>'roles.update']);

    // Labs
    Route::get('/admin/labs', 'LabController@index');
    Route::post('/admin/lab/store', 'LabController@store');
    Route::get('/admin/lab/{id}/edit','LabController@edit');
    Route::put('/admin/lab/{id}/update','LabController@update');

    // Equipments
    Route::get('/admin/lab/{id}/equipments', 'EquipmentController@index');
    Route::post('/admin/lab/{id}/equipment/store', 'EquipmentController@store');
    Route::get('/admin/equipment/{id}/edit','EquipmentController@edit');
    Route::put('/admin/equipment/{id}/update','EquipmentController@update');

});
