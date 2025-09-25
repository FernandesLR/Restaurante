<?php

namespace App\repository;

use App\model\Usuario;
use PDO;
use PDOException;

class UsuarioRepository{
    private PDO $conexao;

    public function __construct(PDO $cnx)
    {  
        $this->conexao = $cnx;
        
    }


    public function buscaEmail($email): ?Usuario{
        try{
            $stmt = $this->conexao->prepare("SELECT * FROM usuario WHERE email = :email");
            $stmt->bindParam(":email", $email, PDO::PARAM_STR);
            
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if($row){
                $usuario = new Usuario();

                $usuario->setId($row['id']);
                $usuario->setNome($row['nome']);
                $usuario->setEmail($row['email']);
                $usuario->setSenha($row['senha']);
                return $usuario;
            }
            return null;
        }catch(PDOException $e){
            echo $e->getMessage();
            return null;
        }

    }

    public function salvar(Usuario $usuario): bool {
        try {
            $stmt = $this->conexao->prepare(
                "INSERT INTO usuarios (cpf, nome, email, senha) VALUES (:cpf, :nome, :email, :senha)"
            );

            return $stmt->execute([
                ':cpf' => $usuario->getCpf(),
                ':nome' => $usuario->getNome(),
                ':email' => $usuario->getEmail(),
                ':senha' => $usuario->getSenha()
            ]);
        } catch (PDOException $e) {
            throw new \RuntimeException("Erro ao salvar usuário: " . $e->getMessage());
        }
    }



}


?>