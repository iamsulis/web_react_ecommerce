<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Category;

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
        $this->category = new Category;
    }

    function dashboard_list(Request $request){

    	$get = $request->input();

        $search = @$get['search'];

        // =================== CATEGORY LIST ==================
        $where = [];

        $param = [];
        $param[] = " ORDER BY RAND() ";
        $param[] = " LIMIT 8 ";

        $datadb = $this->category->category_list(@$select, @$where, @$param);
        unset($where, $param);

        $data['category_list'] = $datadb;
        // ====================================================

        // ==================== ITEM LIST =====================
        $where = [];

        if($search){
            $where[] = " name LIKE '%".$search."%' ";
        }

        $param = [];
        $param[] = " ORDER BY RAND() ";
        $param[] = " LIMIT 15 ";

        $datadb = $this->item->item_list(@$select, @$where, @$param);
        unset($where, $param);

        $data['product_list'] = $datadb;
        // ====================================================

    	return response($data);
    }

}