<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if($SERVER["REQUEST_METHOD"] == "GET"){
    echo "Ok!";
}else{
    echo "error";
}




?>