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


    public function testGetProdutosRetornaArrayDeProdutos() {
        $resultado = $this->p->getProdutos();

        $this->assertIsArray($resultado);
        $this->assertNotEmpty($resultado); 
        $this->assertInstanceOf(Produto::class, $resultado[0]);
    }

    public function testGetProdutoByIdRetornaProdutoValido() {
        $resultado = $this->p->getProdutoById(2);
        
        $this->assertInstanceOf(Produto::class, $resultado);
        $this->assertEquals(2, $resultado->getId());
        $this->assertNotEmpty($resultado->getTitle());
        $this->assertNotEmpty($resultado->getPreco());
    }
}