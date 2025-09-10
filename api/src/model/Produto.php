<?php
namespace App\model;


class Produto {
    private $id;
    private $descricao;
    private $preco;
    private $img;
    private $title;

    public function __construct($id = null, $descricao = null, $preco = null, $img = null, $title = null) {
        $this->id = $id;
        $this->descricao = $descricao;
        $this->preco = $preco;
        $this->img = $img;
        $this->title = $title;
    }

    // Getter e Setter para o ID
    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }

    // Getter e Setter para o Produto
    public function getDescricao() {
        return $this->descricao;
    }

    public function setDescricao($descricao) {
        $this->descricao = $descricao;
    }

    // Getter e Setter para o Preço
    public function getPreco() {
        return $this->preco;
    }

    public function setPreco($preco) {
        $this->preco = $preco;
    }

    // Getter e Setter para a Imagem
    public function getImg() {
        return $this->img;
    }

    public function setImg($img) {
        $this->img = $img;
    }

    // Getter e Setter para o Título
    public function getTitle() {
        return $this->title;
    }

    public function setTitle($title) {
        $this->title = $title;
    }
}

?>