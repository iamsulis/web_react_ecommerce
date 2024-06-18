<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\WishlistController;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'dashboard'], function () use ($router) {
	Route::get('/list', 'DashboardController@dashboard_list');
});

Route::post('/login_auth', 'AuthController@login_auth');

Route::get('/dashboard', 'DashboardController@dashboard_list');
Route::get('/category_list', 'CategoryController@category_list');
Route::get('/item_list', 'ItemController@item_list');

Route::get('/detail_product', 'ItemController@item_detail');

Route::post('/transaction', 'ItemController@transaction');

$router->group(['prefix' => 'transaction'], function () use ($router) {
	Route::get('/list', 'TransactionController@transaction_list');
});

$router->group(['prefix' => 'category'], function () use ($router) {
	Route::get('/list', 'CategoryController@category_list');
});

$router->group(['prefix' => 'wishlist'], function () use ($router) {
	Route::get('/list', 'WishlistController@wishlist');
	Route::delete('/delete', 'WishlistController@wishlist_delete');
});

Route::post('/give_feedback', 'TransactionController@give_feedback');