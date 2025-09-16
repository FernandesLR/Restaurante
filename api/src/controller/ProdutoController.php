<?php

namespace App\controller;


use App\service\ProdutoService;

class ProdutoController{
    protected $service;

    public function __construct()
    {
        $this->service = new ProdutoService();
    }

    public function getProdutos(): array{
        $produtos = $this->service->getProdutos();

        return [
            'status' => 200,
            'data' => $produtos
        ];
    }


}

?>
