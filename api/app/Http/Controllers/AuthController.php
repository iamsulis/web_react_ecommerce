<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;
use App\Models\Wishlist;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class AuthController extends Controller
{
	public function __construct(){
        $this->user = new User;
        $this->wishlist = new Wishlist;
    }

    function login_auth(Request $request){

    	$data['status'] = 400;
    	$data['text'] = 'No Data Found';

    	$post = $request->input();

    	$username = $post['username'];
    	$password = $post['password'];

    	$where = [];
    	$where[] = " username = '".$username."' ";
    	$where[] = " password = '".$password."' ";

    	$param = [];
    	$param[] = " LIMIT 1";

    	$datadb = $this->user->user_list(@$select, @$where, @$param);
        unset($where, $param);

    	if($datadb){
    		$data_user = $datadb[0];

            $select = [];
            $select[] = " COUNT(*) AS total_wishlist ";

            $datadb = $this->wishlist->wishlist(@$select, @$where, @$param);
            unset($where, $param);

            $total_wishlist = @$datadb[0]['total_wishlist']+0;

    		$data = array(
    			'status' => 200,
    			'id' => $data_user['id'],
    			'name' => $data_user['name_user'],
    			'username' => $data_user['username'],
                'photo_user' => $data_user['photo_user'],
    			'total_wishlist' => $total_wishlist,
    		);
    	}

    	return response($data);
    }
}