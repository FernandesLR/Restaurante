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
    public function getProdutos(): ?array{
        $resultado = $this->produtoRepo->getProdutos();

        return $resultado?:null;

    }

    public function getProduto($id): ?Produto{
        $resultado = $this->produtoRepo->getProdutoById($id);
    
        return $resultado?:null;
    }
    
}


?>