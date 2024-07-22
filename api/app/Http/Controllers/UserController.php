<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;
use App\Models\Transaction;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */

    public function __construct(){
        $this->user = new User;
    }

    function check_username(Request $request){
        $get = $request->input();

        $username = $get['username'];

        $where = [];
        $where[] = " username = '".$username."' ";

        $param = [];
        $param[] = " ORDER BY id DESC ";

        $datadb = $this->user->user_list(@$select, @$where, @$param);
        unset($where, $param);

        $data['status'] = 200;
        $data['text'] = '';

        if($datadb){
            $data['status'] = 400;
            $data['text'] = 'Username is already exists!';
        }

        return response($data);
    }

    function give_feedback(Request $request){
        $post = $request->input();

        $id = $post['id'];
        $ulasan = $post['ulasan'];

        $where = array(
            'id' => $id
        );

        $data = array(
            'feedback' => $ulasan
        );

        $this->transaction->transaction_update($data, $where);

        return true;
    }

}