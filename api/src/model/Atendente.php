<?php
require_once "Usuario.php";

class Atendente extends Usuario{
    public function getEmail(){
        return $this->email;
    }

    public function getSenha(){
        return $this->senha;
    }

}

?>