<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEcommerce extends Migration
{

    protected $connection = 'mysql';
    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        $item = [
            array(
                'name' => 'Pena',
                'description' => 'Ini Pena',
                'price' => '5000',
                'category' => '1',
            ),
            array(
                'name' => 'Pensil',
                'description' => 'Ini Pensil',
                'price' => '2000',
                'category' => '1',
            ),
            array(
                'name' => 'Pena',
                'description' => 'Ini Pena',
                'price' => '5000',
                'category' => '1',
            ),
            array(
                'name' => 'Pensil',
                'description' => 'Ini Pensil',
                'price' => '2000',
                'category' => '1',
            ),
            array(
                'name' => 'Pena',
                'description' => 'Ini Pena',
                'price' => '5000',
                'category' => '1',
            ),
            array(
                'name' => 'Pensil',
                'description' => 'Ini Pensil',
                'price' => '2000',
                'category' => '1',
            ),
            array(
                'name' => 'Pena',
                'description' => 'Ini Pena',
                'price' => '5000',
                'category' => '1',
            ),
            array(
                'name' => 'Pensil',
                'description' => 'Ini Pensil',
                'price' => '2000',
                'category' => '1',
            ),
        ];

        Schema::dropIfExists('table_item');
        Schema::dropIfExists('table_category');

        Schema::create('table_item', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->text('price');
            $table->string('category');
            $table->timestamps();
        });

        Schema::create('table_category', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        // Insert some stuff
        DB::table('table_item')->insert($item);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('table_item');
        Schema::dropIfExists('table_category');
    }
}
