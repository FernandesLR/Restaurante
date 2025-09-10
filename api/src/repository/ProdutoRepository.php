<?php

namespace App\repository;

use App\model\Produto;
use PDO;

class ProdutoRepository {
    private PDO $conexao;

    public function __construct(PDO $conexao)
    {
        $this->conexao = $conexao;
    }

    public function getProdutos(): array {
        $listaPd = [];

        $stmt = $this->conexao->query("SELECT * FROM produtos");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($rows as $row) {
            $produto = new Produto();
            $produto->setId($row['id']);
            $produto->setDescricao($row['descricao']);
            $produto->setTitle($row['title']);
            $produto->setImg($row['img']);
            $produto->setPreco($row['preco']);

            $listaPd[] = $produto;
        }

        return $listaPd;
    }
}
