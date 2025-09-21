<?php

namespace App\model;
use JsonSerializable;

class Usuario implements \JsonSerializable{

    private $id;
    private $cpf;
    private $nome;
    protected $email;
    protected $senha;

    // Construtor
    public function __construct($cpf = null, $nome = null, $email = null, $senha = null) {
        $this->cpf = $cpf;
        $this->nome = $nome;
        $this->email = $email;
        $this->senha = $senha;
    }


    public function jsonSerialize(): array {
        return [
            'id' => $this->getId(),
            'nome' => $this->getNome(),
            'email' => $this->getEmail()
        ];
    }

    // Getters e Setters
    public function getId(): int{
        return $this->id;
    }
    public function setId($i){
        $this->id = $i;

    }

    public function getCpf(): string{
        return $this->cpf;
    }

    public function setCpf($cpf) {
        $this->cpf = $cpf;
    }

    public function getNome(): string {
        return $this->nome;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getEmail(): string{
        return $this->email;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

    public function getSenha(): string {
        return $this->senha;
    }

    public function setSenha($senha) {
        $this->senha = $senha;
    }


}
