<?php

use App\config\Conexao;
use PHPUnit\Framework\TestCase;

Class ConexaoTeste extends TestCase{

    public function testConectar(){
        $cnx = new Conexao();

        $conexao = $cnx->conectar();

        $this->assertInstanceOf(PDO::class, $conexao, "Teste de conexão falhou, pois não retornou um objeto PDO");
    }
}

?>