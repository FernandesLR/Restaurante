<?php
require_once "Conectar.php";

class UsuarioDao{
    public function cadastrar($email, $senha){
        $cnx = Conectar::cnx();
        $sql = $cnx->prepare("INSERT INTO usuario(email, senha) VALUES(:email, :senha)");
        $sql->bindParam(":email", $email);
        $sql->bindParam(":senha", $senha);
        $sql->execute();
    }


    public function login($email, $senha){
        $cnx = Conectar::cnx();
        $sql = $cnx->prepare("SELECT * FROM usuario WHERE email = :email AND senha = :senha");
        $sql->bindParam(":email", $email);
        $sql->bindParam(":senha", $senha);
        $sql->execute();
    }
}

?>