<?php
require_once '../model/Produto.php';

class ProdutoController{
    protected $prod;

    public function getProdutos(){
        $this->prod = new Produto();

    }

}

?>