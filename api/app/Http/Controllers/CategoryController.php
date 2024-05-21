<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Category;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class CategoryController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */

    public function __construct(){
        $this->category = new Category;
    }

    function category_list(Request $request){
    	$get = $request->input();

    	$where = [];

    	$datadb = $this->category->category_list(@$select, @$where, @$param);

    	$data['category_list'] = $datadb;

    	return response($data);
    }

}