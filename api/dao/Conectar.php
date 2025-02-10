<?php

class Conectar{

    public function cnx($u, $p, $d, $l){
        $user = $u;
        $pass = $p;
        $dbName = $d;
        $local = $l;
        try{
            $cnx = new PDO("mysql:host=$local;dbname=$dbName", $user, $pass);
        }catch(Exception $e){
            echo "Erro ao conectar: " + $e;
        }

    }
}

?>