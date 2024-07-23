<?php
 
namespace App\Http\Controllers;
 
use App\Models\User;
use App\Models\Item;
use App\Models\Toko;
use App\Models\Ulasan;
use App\Models\Transaction;
use App\Models\Wishlist;
use App\Models\Category;

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
        $this->category = new Category;
        $this->ulasan = new Ulasan;
        $this->user = new User;
        $this->transaction = new Transaction;
        $this->wishlist = new Wishlist;
    }

    function item_list(Request $request){
    	$get = $request->input();

        $search = @$get['search'];
        $category = @$get['category'];

    	$where = [];
        $where[] = " id IS NOT NULL ";

        if($search){
            $where[] = " name LIKE '%".$search."%' ";
        }

        if($category){
            $where[] = " category = '".$category."' ";
        }

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

    function transaction_from_cart(Request $request){
        $post = $request->input();

        $data = $post['data'];

        foreach ($data as $key => $value) {

            if($value['checked'] == true){
                $data_delete = array(
                    'id' => $value['id']
                );

                $data_submit[] = array(
                    'id_user'               => $value['id_user'],
                    'id_item'               => $value['id_item'],
                    'price'                 => $value['total_harga'],
                    'total'                 => $value['total'],
                    'datetime_transaction'  => date('Y-m-d H:i:s'),
                );

                $this->wishlist->wishlist_delete($data_delete);

                // ============= ITEM ==============
                $where = array(
                    'id' => $value['id_item']
                );

                $dt = array(
                    'stock' => $value['stock_item'] - $value['total']
                );

                $this->item->item_update($dt, $where);
                unset($where, $dt);
                // =================================
            }

        }

        $this->transaction->transaction_add($data_submit);

        unset($data);

        $data['status'] = 200;
        $data['total_wishlist'] = sizeof($data_submit);

        return response($data);
    }

    function product_add(Request $request){
        $get = $request->input();

        // ================= Category =====================
        $datadb = $this->category->category_list(@$select, @$where, @$param);
        unset($where, $param);

        $data['category_list'] = $datadb;
        // ================================================

        return response($data);
    }

    function product_add_process(Request $request){
        $post = $request->input();
        $file = $request->file();

        if($file){
            $tmp_file = $_FILES['images']['tmp_name'];
            // print_r($file['images']);exit;
        }

        print_r();exit;

        $product_name = $post['product_name'];
        // $product_photo = $_FILES['file_path']['tmp_name'];
        $product_photo = $_FILES[$post['file_path']];

        print_r($product_photo);exit;
        $category = $post['category'];
        $price = $post['price'];
        $stock = $post['stock'];
        $description = $post['description'];
    }

}