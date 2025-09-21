<?php

use PHPUnit\Framework\TestCase;
use App\service\UsuarioService;
use App\repository\UsuarioRepository;
use App\model\Usuario;

class UsuarioServiceTest extends TestCase
{
    private $usuarioRepoMock;
    private $usuarioService;

    protected function setUp(): void
    {
        $this->usuarioRepoMock = $this->createMock(UsuarioRepository::class);
        $this->usuarioService = new UsuarioService($this->usuarioRepoMock);
    }

    public function testLoginRetornaNullSeEmailInvalido()
    {
        $result = $this->usuarioService->login('email-invalido', 'senha123');
        $this->assertNull($result);
    }

    public function testLoginRetornaNullSeUsuarioNaoExiste()
    {
        $this->usuarioRepoMock->method('buscaEmail')->willReturn(null);

        $result = $this->usuarioService->login('teste@teste.com', 'senha123');
        $this->assertNull($result);
    }

    public function testLoginRetornaNullSeSenhaIncorreta()
    {
        $usuario = new Usuario();
        $usuario->setId(1);
        $usuario->setNome('Leonardo');
        $usuario->setEmail('teste@teste.com');
        $usuario->setSenha(password_hash('senhaCorreta', PASSWORD_DEFAULT));

        $this->usuarioRepoMock->method('buscaEmail')->willReturn($usuario);

        $result = $this->usuarioService->login('teste@teste.com', 'senhaErrada');

        $this->assertNull($result);
    }

    public function testLoginRetornaUsuarioSeCredenciaisCorretas()
    {
        $usuario = new Usuario();
        $usuario->setId(1);
        $usuario->setNome('Leonardo');
        $usuario->setEmail('teste@teste.com');
        $usuario->setSenha(password_hash('senhaCorreta', PASSWORD_DEFAULT));

        $this->usuarioRepoMock->method('buscaEmail')->willReturn($usuario);

        $result = $this->usuarioService->login('teste@teste.com', 'senhaCorreta');

        $this->assertInstanceOf(Usuario::class, $result);
        $this->assertEquals('Leonardo', $result->getNome());
        $this->assertEquals('teste@teste.com', $result->getEmail());
        $this->assertNull($result->getSenha(), "Senha deve ser removida antes de retornar");
    }
}
