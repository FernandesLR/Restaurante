<?php

namespace App\repository;

use App\model\Produto;
use PDO;
use PDOException;

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
            $produto->setPreco($row['preco']);
            $produto->setImg($row['img']);

            $listaPd[] = $produto;
        }

        return $listaPd;
    }

    public function getProdutoById(int $id): ?Produto {
        try{
            $stmt = $this->conexao->prepare("SELECT * FROM produtos WHERE id = :id");
            $stmt->bindParam(":id", $id, PDO::PARAM_INT);
            $stmt->execute();
    
            $row = $stmt->fetch();
    
            if ($row) {
                $produto = new Produto();
                $produto->setId($row['id']);
                $produto->setTitle($row['title']);
                $produto->setPreco($row['preco']);
                $produto->setDescricao($row['descricao']);
                $produto->setImg($row['img']);
                return $produto;
            }
    
            return null;
        }catch(PDOException $e){
            throw new \RuntimeException("Erro ao buscar produto: " . $e->getMessage());
        }
    }

}
