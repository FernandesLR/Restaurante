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
        // valida formato do email
        if (!$this->verificaEmail($email)) {
            return null;
        }

        // busca usuário no banco
        $usuario = $this->usuRep->buscaEmail($email);

        if (!$usuario) {
            return null;
        }

        // compara senha digitada com hash do banco
        if (!$this->compararSenha($senha, $usuario->getSenha())) {
            return null;
        }

        // remove o hash da senha antes de retornar
        $usuario->setSenha(null);

        return $usuario;
    }

    private function verificaEmail(string $email): bool {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    // usado só no cadastro
    public function verificaSenhaForte(string $senha): bool {
        if(!$senha) return false;
        return preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/', $senha) === 1;
    }

    private function compararSenha(string $senhaDigitada, string $hashDoBanco): bool {
        return password_verify($senhaDigitada, $hashDoBanco);
    }
}

?>