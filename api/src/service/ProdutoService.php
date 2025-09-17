<?php

namespace App\service;

use App\config\Conexao;
use App\model\Produto;
use App\repository\ProdutoRepository;


class ProdutoService{
    protected ProdutoRepository $produtoRepo;

    public function __construct()
    {
        $cnx = (new Conexao())->conectar();
        $this->produtoRepo = new ProdutoRepository($cnx);
    }
    public function getProdutos():array{
        return $this->produtoRepo->getProdutos();
    }

    public function getProduto($id):Produto{
        return $this->produtoRepo->getProdutoById($id);
    }
    
}


?>