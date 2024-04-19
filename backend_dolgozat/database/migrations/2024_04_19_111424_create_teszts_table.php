<?php

use App\Models\Teszt;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teszts', function (Blueprint $table) {
            $table->id();
            $table->string('kerdes');
            $table->string('v1');
            $table->string('v2');
            $table->string('v3');
            $table->string('v4');
            $table->string('helyes')->default('v1');
            $table->foreignId('kategoriaId')->references('id')->on('kategorias');
            $table->timestamps();
        });

        Teszt::create(['kerdes' => 'Ki a világ leggyorsabb futója?', 'v1' => 'Usain Bolt', 'v2' => 'Én', 'v3' => 'Dániel', 'v4' => 'Sándor', 'kategoriaId' => 1]);
        Teszt::create(['kerdes' => 'Melyik van legelöl a ABc-ben?', 'v1' => 'A', 'v2' => 'B', 'v3' => 'C', 'v4' => 'D', 'kategoriaId' => 2]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszts');
    }
};
