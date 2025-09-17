<?php

namespace App\controller;


use App\service\ProdutoService;
use Exception;

class ProdutoController{
    protected $service;

    public function __construct()
    {
        $this->service = new ProdutoService();
    }

    public function getProdutos(): array{
        try{
            $produtos = $this->service->getProdutos();

            if(!$produtos){
                return [
                    'status' => 404,
                    'data' => null,
                    'message' => "Não foi possível encontrar os produtos"
                ];
            }

            return [
                'status' => 200,
                'data' => $produtos
            ];

        }catch(\Exception $e){
            return[
                'status' => 500,
                'data' => null,
                'message' => "Erro interno: ".$e->getMessage()
            ];
        }
    }

    public function getProdutoPorId($id): array{
        try{
            $produto = $this->service->getProduto($id);

            if($produto){
                return [
                    'status' => 200,
                    'data' => $produto
                ];
            }

            return[
                'status' => 404,
                'data' => null,
                'message' => "Produto não foi encontrado"
            ];
        }catch (\Exception $e) {
        return [
            'status' => 500,
            'data' => null,
            'message' => 'Erro interno: ' . $e->getMessage()
        ];
    }
    }

}

?>
