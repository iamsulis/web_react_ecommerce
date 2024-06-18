<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;
use App\Models\Transaction;
use App\Models\Wishlist;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
 
class WishlistController extends Controller
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
        $this->wishlist = new Wishlist;
    }

    function wishlist(Request $request){
    	$get = $request->input();

        $id_user = @$get['id_user'];

    	$where = [];
        $where[] = " id IS NOT NULL ";

        if($id_user){
            $where[] = " id_user = '".$id_user."' ";
        }

    	$datadb = $this->wishlist->wishlist(@$select, @$where, @$param);
        unset($where, $param);
    	$data['wishlist'] = $datadb;

        foreach ($datadb as $key => $value) {
            $arr_id_item[] = $value['id_item'];
        }

        if(isset($arr_id_item)){
            $where = [];
            $where[] = " id IN ('".implode("', '", $arr_id_item)."') ";

            $datadb = $this->item->item_list(@$select, @$where, @$param);
            foreach ($datadb as $key => $value) {
                $item_list[$value['id']] = $value;
            }
        }

        foreach ($data['wishlist'] as $key => $value) {
            $data['wishlist'][$key]['name_item'] = $item_list[$value['id_item']]['name'];
            $data['wishlist'][$key]['harga'] = str_replace(".", "", $item_list[$value['id_item']]['price']);
            $data['wishlist'][$key]['total_harga'] = $data['wishlist'][$key]['harga'] * $value['total'];
            $data['wishlist'][$key]['photo_item'] = $item_list[$value['id_item']]['photo'];
            $data['wishlist'][$key]['stock_item'] = $item_list[$value['id_item']]['stock'];
        }

    	return response($data);
    }

    function wishlist_delete(Request $request){
        $post = $request->input();

        $id = $post['id'];
        $id_user = $post['id_user'];

        $where = array(
            'id' => $id,
        );

        $this->wishlist->wishlist_delete($id);
        unset($where);

        $select = [];
        $select[] = " COUNT(*) AS total_wishlist ";

        $where = [];
        $where[] = " id_user = '".$id_user."' ";
        $datadb = $this->wishlist->wishlist(@$select, @$where, @$param);
        unset($select, $where);

        $data['total_wishlist'] = $datadb[0]['total_wishlist'];

        return response($data);
    }

    function item_detail(Request $request){
        $get = $request->input();

        $id = $get['id'];

        $data['status'] = 400;
        $data['item_list'] = [];

        if($id){
            $data['status'] = 200;

            // =================== DATA PRODUCT =======================
            $where = [];
            $where[] = " id = ".$id;

            $datadb = $this->item->item_list(@$select, @$where, @$param);
            unset($where);

            $data['item_list'] = $datadb[0];
            // ========================================================

            // ===================== DATA TOKO ========================
            $id_toko = $datadb[0]['id_toko'];

            $where = [];
            $where[] = " id = ".$id_toko;

            $datadb = $this->toko->toko_list(@$select, @$where, @$param);
            unset($where);

            $datadb = $datadb[0];

            $data['item_list']['nama_toko'] = $datadb['nama_toko'];
            $data['item_list']['alamat_toko'] = $datadb['alamat_toko'];
            $data['item_list']['photo_toko'] = $datadb['photo_toko'];
            // $data['toko_list'] = $datadb[0];
            // ========================================================

            // ===================== DATA ULASAN ======================
            $where = [];
            $where[] = " id_item = ".$id;
            $where[] = " feedback IS NOT NULL ";

            $param = [];
            $param[] = " ORDER BY id DESC ";
            $param[] = " LIMIT 10 ";

            $datadb = $this->transaction->transaction_list(@$select, @$where, @$param);
            unset($where);

            foreach ($datadb as $key => $value) {
                $arr_id_user[] = $value['id_user'];
            }

            $data['ulasan_list'] = $datadb;
            // ========================================================

            // ====================== DATA USER =======================
            $data['data_user'] = [];

            if(isset($arr_id_user)){
                $where = [];
                $where[] = " id IN ('".implode("', '", $arr_id_user)."') ";

                $datadb = $this->user->user_list(@$select, @$where, @$param);
                unset($where);

                foreach ($datadb as $key => $value) {
                    $data_user[$value['id']] = $value;
                }

            }
            // ========================================================

            foreach ($data['ulasan_list'] as $key => $value) {
                // print_r($data['data_user'][$value['id_user']]);exit;

                $data['ulasan_list'][$key]['nama_user'] = $data_user[$value['id_user']]['name_user'];
            }
        }

        return response($data);

    }

    function transaction(Request $request){
        $post = $request->input();

        $id = $post['id'];
        $id_user = $post['id_user'];
        $pesan = $post['pesan'];

        // =================== TRANSACTION ================
        $where = [];
        $where[] = " id = '".$id."' ";

        $datadb = $this->item->item_list(@$select, @$where, @$param);
        unset($where, $param);
        $datadb = $datadb[0];

        $total_stock = $datadb['stock'];

        $price = str_replace('.', '', $datadb['price']);

        $total_harga = $price * $pesan;

        $data = array(
            'id_user'   => $id_user,
            'id_item'   => $id,
            'price'     => $total_harga,
            'total'     => $pesan,
            'datetime_transaction'     => date('Y-m-d H:i:s'),
        );

        $this->transaction->transaction_add($data);
        unset($data);
        // ================================================

        // =================== ITEM =======================
        $where = array(
            'id' => $id
        );

        $data = array(
            'stock' => $total_stock - $pesan
        );

        $this->item->item_update($data, $where);
        unset($where, $data);
        // ================================================

        return true;
    }

}