<?php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
 
class Category extends Model {
    //

    protected $hidden = ['created_at', 'updated_at'];
    protected $connection   = 'mysql';
    protected $table        = 'table_category';
    public $timestamps      = false;

    function category_list($select = NULL, $where = NULL, $param = NULL){

        $datadb = new Category;

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
}