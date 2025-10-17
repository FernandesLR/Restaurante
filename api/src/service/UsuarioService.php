<?php

namespace App\service;

use App\model\Usuario;
use App\repository\UsuarioRepository;

class UsuarioService {

    private UsuarioRepository $usuRep;

    public function __construct(UsuarioRepository $repo) {
        $this->usuRep = $repo;
    }

    public function login(string $email, string $senha): ?Usuario {
        if (!$this->verificaEmail($email)) {
            return null;
        }

        $usuario = $this->usuRep->buscaEmail($email);
        if (!$usuario) return null;

        if (!$this->compararSenha($senha, $usuario->getSenha())) {
            return null;
        }

        $usuario->setSenha(null);
        return $usuario;
    }

    
    private function verificaEmail(string $email): bool {
        return str_ends_with(strtolower($email), '@gmail.com') ||
               str_ends_with(strtolower($email), '@hotmail.com');
    }

    
    public function verificaSenhaForte(string $senha): bool {
        if (strlen($senha) < 8) return false;
        return true;
    }

    private function compararSenha(string $senhaDigitada, string $hashDoBanco): bool {
        return password_verify($senhaDigitada, $hashDoBanco);
    }

    public function cadastrar(string $email, string $senha, string $nome, string $cpf): ?bool {
        
        
        if (!$this->verificaEmail($email) || !$this->verificaSenhaForte($senha)) {
            return null;
        }

        $hash = password_hash($senha, PASSWORD_BCRYPT);

        $usuario = new Usuario();
        $usuario->setEmail($email);
        $usuario->setNome($nome);
        $usuario->setCpf($cpf);
        $usuario->setSenha($hash);

        $salvo = $this->usuRep->salvar($usuario);
        return $salvo;
    }
}
?>
