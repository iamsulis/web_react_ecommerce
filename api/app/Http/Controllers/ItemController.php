<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class ItemController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */

    public function __construct(){
        $this->item = new Item;
    }

    function item_list(Request $request){
    	$get = $request->input();

    	$where = [];

    	$datadb = $this->item->item_list(@$select, @$where, @$param);

    	$data['item_list'] = $datadb;

    	return response($data);
    }

}