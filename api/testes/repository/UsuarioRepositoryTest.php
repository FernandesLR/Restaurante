<?php

use PHPUnit\Framework\TestCase;
use App\repository\UsuarioRepository;
use App\model\Usuario;

class UsuarioRepositoryTest extends TestCase
{
    private $pdoMock;
    private $stmtMock;
    private UsuarioRepository $repository;

    protected function setUp(): void
    {
        $this->pdoMock = $this->createMock(PDO::class);
        $this->stmtMock = $this->createMock(PDOStatement::class);

        $this->repository = new UsuarioRepository($this->pdoMock);
    }

    public function testBuscaEmailRetornaUsuarioQuandoEncontrado()
    {
        $email = "teste@email.com";
        $row = [
            'id' => 1,
            'nome' => 'Leonardo',
            'email' => $email,
            'senha' => '123456'
        ];

        $this->pdoMock
            ->method('prepare')
            ->willReturn($this->stmtMock);

        $this->stmtMock
            ->expects($this->once())
            ->method('execute');

        $this->stmtMock
            ->method('fetch')
            ->willReturn($row);

        $usuario = $this->repository->buscaEmail($email);

        $this->assertInstanceOf(Usuario::class, $usuario);
        $this->assertEquals(1, $usuario->getId());
        $this->assertEquals('Leonardo', $usuario->getNome());
        $this->assertEquals($email, $usuario->getEmail());
        $this->assertEquals('123456', $usuario->getSenha());
    }

    public function testBuscaEmailRetornaNullQuandoNaoEncontrado()
    {
        $this->pdoMock
            ->method('prepare')
            ->willReturn($this->stmtMock);

        $this->stmtMock
            ->method('fetch')
            ->willReturn(false);

        $usuario = $this->repository->buscaEmail("naoexiste@email.com");

        $this->assertNull($usuario);
    }

    public function testSalvarRetornaTrueQuandoInsercaoSucesso()
    {
        $usuario = new Usuario();
        $usuario->setCpf("12345678900");
        $usuario->setNome("Leonardo");
        $usuario->setEmail("teste@email.com");
        $usuario->setSenha("123456");

        $this->pdoMock
            ->method('prepare')
            ->willReturn($this->stmtMock);

        $this->stmtMock
            ->method('execute')
            ->willReturn(true);

        $result = $this->repository->salvar($usuario);

        $this->assertTrue($result);
    }

    public function testSalvarLancaExcecaoQuandoErro()
    {
        $usuario = new Usuario();
        $usuario->setCpf("12345678900");
        $usuario->setNome("Leonardo");
        $usuario->setEmail("teste@email.com");
        $usuario->setSenha("123456");

        $this->pdoMock
            ->method('prepare')
            ->willThrowException(new PDOException("Erro no banco"));

        $this->expectException(RuntimeException::class);

        $this->repository->salvar($usuario);
    }
}
