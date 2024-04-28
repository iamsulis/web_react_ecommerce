<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class DashboardController extends Controller
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

    function dashboard_list(Request $request){
    	$get = $request->input();

    	$where = [];

        $no = 0;
        $item_list = [];

        $param = [];
        $param[] = " LIMIT 7";
    	$datadb = $this->item->item_list(@$select, @$where, @$param);
        unset($where, $param);

        foreach ($datadb as $key => $value) {
            $item_list[$no][] = $value;

            if(sizeof($item_list[$no]) >= 4){
                $no++;
            }
        }

    	$data['item_list'] = $item_list;

    	return response($data);
    }

}