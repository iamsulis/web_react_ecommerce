<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;

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
        $this->toko = new Toko;
        $this->ulasan = new Ulasan;
        $this->user = new User;
    }

    function item_list(Request $request){
    	$get = $request->input();

    	$where = [];

    	$datadb = $this->item->item_list(@$select, @$where, @$param);

    	$data['item_list'] = $datadb;

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
            $where[] = " id_barang = ".$id;

            $param = [];
            $param[] = " LIMIT 10 ";

            $datadb = $this->ulasan->ulasan_list(@$select, @$where, @$param);
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

}