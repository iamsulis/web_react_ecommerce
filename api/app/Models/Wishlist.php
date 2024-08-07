<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
 
class Wishlist extends Model {
    //

    protected $hidden = ['created_at', 'updated_at'];
    protected $connection   = 'mysql';
    protected $table        = 'table_wishlist';
    public $timestamps      = false;

    function wishlist($select = NULL, $where = NULL, $param = NULL){

        $datadb = new Wishlist;

        if($where){
            $where = implode(" AND ", $where);
            $datadb = $datadb->whereRaw($where);
        }

        $datadb = $datadb->toSql($datadb);

        if($select){
            $select = implode(", ", $select);
            $datadb = str_replace("*", $select, $datadb);
        }

        if($param){
            $param = implode(" ", $param);
            $datadb = $datadb. " ".$param;
        }

        $datadb = DB::select($datadb);

        $datadb = json_decode(json_encode($datadb), true);

        return $datadb;
    }

    function wishlist_add($data){
        DB::table($this->table)->insert($data);
    }

    function wishlist_update($data, $where){
        DB::table($this->table)->where($where)->update($data);
    }

    function wishlist_delete($data){
        DB::table($this->table)->delete($data);
    }
}