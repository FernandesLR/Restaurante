<?php

use PHPUnit\Framework\TestCase;

use App\repository\ProdutoRepository;
use App\config\Conexao;
use App\model\Produto;

class ProdutoRepositoryTest extends TestCase{
    protected ProdutoRepository $p;

    protected function setUp():void
    {
        $this->p = new ProdutoRepository((new Conexao)->conectar());
    }

    // Testa se o repository está retornando os dados do banco em forma de objeto da classe Produtos
    public function testGetProdutosRetornaVerdadeiro(){
        $resultado = $this->p->getProdutos();

        $this->assertIsArray($resultado);

        if(count($resultado) > 0){
            $this->assertInstanceOf(Produto::class, $resultado[0]);
        }



    }
}

?>