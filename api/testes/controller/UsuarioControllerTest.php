<?php

use PHPUnit\Framework\TestCase;
use App\controller\UsuarioController;
use App\service\UsuarioService;
use App\model\Usuario;

class UsuarioControllerTest extends TestCase
{
    public function testLoginSucesso()
    {
        // Arrange
        $mockService = $this->createMock(UsuarioService::class);
        $usuario = new Usuario();
        $usuario->setId(1);
        $usuario->setNome("Leonardo");
        $usuario->setEmail("leo@email.com");

        $mockService->method('login')->willReturn($usuario);

        $controller = new UsuarioController($mockService);

        // Act
        $response = $controller->rotaLogin("leo@email.com", "senha123");

        // Assert
        $this->assertEquals(200, $response['status']);
        $this->assertInstanceOf(Usuario::class, $response['data']);
        $this->assertEquals("Leonardo", $response['data']->getNome());
    }

    public function testLoginUsuarioNaoEncontrado()
    {
        $mockService = $this->createMock(UsuarioService::class);
        $mockService->method('login')->willReturn(null);

        $controller = new UsuarioController($mockService);

        $response = $controller->rotaLogin("naoexiste@email.com", "123");

        $this->assertEquals(404, $response['status']);
        $this->assertNull($response['data']);
        $this->assertStringContainsString("Não foi possível encontrar o usuário", $response['message']);
    }

    public function testLoginErroInterno()
    {
        $mockService = $this->createMock(UsuarioService::class);
        $mockService->method('login')->willThrowException(new Exception("Falha no banco"));

        $controller = new UsuarioController($mockService);

        $response = $controller->rotaLogin("teste@email.com", "123");

        $this->assertEquals(500, $response['status']);
        $this->assertNull($response['data']);
        $this->assertStringContainsString("Erro interno", $response['message']);
    }
}


?>