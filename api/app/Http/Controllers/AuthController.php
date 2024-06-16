<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class AuthController extends Controller
{
	public function __construct(){
        $this->user = new User;
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

    	if($datadb){
    		$datadb = $datadb[0];

    		$data = array(
    			'status' => 200,
    			'id' => $datadb['id'],
    			'name' => $datadb['name_user'],
    			'username' => $datadb['username'],
    			'photo_user' => $datadb['photo_user'],
    		);
    	}

    	return response($data);
    }
}