<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;
use App\Models\Transaction;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class TransactionController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */

    public function __construct(){
        $this->item = new Item;
        $this->toko = new Toko;
        $this->ulasan = new Ulasan;
        $this->user = new User;
        $this->transaction = new Transaction;
    }

    function transaction_list(Request $request){
        $get = $request->input();

        $id_user = $get['id_user'];

        $where = [];
        $where[] = " id_user = '".$id_user."' ";

        $param = [];
        $param[] = " ORDER BY id DESC ";

        $datadb = $this->transaction->transaction_list(@$select, @$where, @$param);
        unset($where, $param);

        $data['transaction_list'] = $datadb;

        foreach ($datadb as $key => $value) {
            $arr_id_user[] = $value['id_user'];
            $arr_id_item[] = $value['id_item'];
        }

        if(isset($arr_id_user)){
            $where = [];
            $where[] = " id IN ('".implode("', '", $arr_id_user)."') ";

            $datadb = $this->user->user_list(@$select, @$where, @$param);
            foreach ($datadb as $key => $value) {
                $user_list[$value['id']] = $value;
            }
        }

        if(isset($arr_id_item)){
            $where = [];
            $where[] = " id IN ('".implode("', '", $arr_id_item)."') ";

            $datadb = $this->item->item_list(@$select, @$where, @$param);
            foreach ($datadb as $key => $value) {
                $item_list[$value['id']] = $value;
            }
        }

        foreach ($data['transaction_list'] as $key => $value) {
            $data['transaction_list'][$key]['name_user'] = $user_list[$value['id_user']]['name_user'];
            $data['transaction_list'][$key]['name_item'] = $item_list[$value['id_item']]['name'];
            $data['transaction_list'][$key]['photo_item'] = $item_list[$value['id_item']]['photo'];
            $data['transaction_list'][$key]['date_transaction'] = date('d M Y', strtotime($value['datetime_transaction']));
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