<?php

namespace App\config;

use PDO;
use PDOException;


class Conexao{

    public function conectar(){
        $user = "root";
        $pass = "root";
        $dbName = "lanchonete";
        $local = "localhost";
        
        try{
            return new PDO("mysql:host=$local;dbname=$dbName", $user, $pass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Se der erro lança um erro ao invés de um warning
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // Retorna arrays associativos ao invés de duplicar indices
                PDO::ATTR_EMULATE_PREPARES => false // Usa prepared statements reais que protegem contra injeções sql
            ]);
        }catch(PDOException $e){
            echo "Erro ao conectar: " . $e->getMessage();
        }

    }
}

?>