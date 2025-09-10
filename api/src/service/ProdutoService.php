<?php

namespace App\service;

use App\config\Conexao;
use App\repository\ProdutoRepository;


class ProdutoService{
    protected ProdutoRepository $produtoRepo;

    public function __construct()
    {
        $cnx = (new Conexao())->conectar();
        $this->produtoRepo = new ProdutoRepository($cnx);
    }
    public function getProdutos(){
        return $this->produtoRepo->getProdutos();
    }
    
}


?>