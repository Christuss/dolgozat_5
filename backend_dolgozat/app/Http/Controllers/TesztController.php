<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztController extends Controller
{
    function tesztek(){
        return DB::table('teszts')
        ->select('*')
        ->get();
    }

    function tesztek_kategoria($id) {
        return DB::table('teszts as t')
        ->where('kategoriaId', '=', $id)
        ->get();
    }

    function kategoria() {
        return DB::table('kategorias')
        ->get();
    }
}
