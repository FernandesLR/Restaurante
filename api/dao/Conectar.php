<?php

class Conectar{

    public static function cnx(){
        $user = "root";
        $pass = "root";
        $dbName = "loja";
        $local = "localhost";
        try{
            $cnx = new PDO("mysql:host=$local;dbname=$dbName", $user, $pass);
        }catch(PDOException $e){
            echo "Erro ao conectar: " + $e;
        }finally{
            return $cnx;
        }

    }
}

?>