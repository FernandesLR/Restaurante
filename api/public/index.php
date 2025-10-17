<?php
require __DIR__ . '/../vendor/autoload.php';

use App\config\Conexao;
use App\controller\ProdutoController;
use App\controller\UsuarioController;
use App\repository\UsuarioRepository;
use App\service\CheckoutService;
use App\service\UsuarioService;

// Permitir que qualquer origem faça requisições
header('Access-Control-Allow-Origin: *'); // Para produção, restrinja para o domínio do frontend
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');




$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];


// Injeção de dependencias
$controller = new ProdutoController();
// O controller pede um objeto de usuário service e o service pede um objeto repository, o repository pede um objeto de PDO
$usuarioController = new UsuarioController(
    new UsuarioService(
        new UsuarioRepository(
            (new Conexao)->conectar()
        )
    )
);



if($uri === '/' && $method === 'GET'){
    $response = $controller->getProdutos();
    http_response_code($response['status']);

    echo json_encode($response['data']);
    exit;
}else if (strpos($uri, '/produto') === 0 && $method === 'GET') {
    $id = $_GET['id'] ?? null;

    if ($id) {
        $response = $controller->getProdutoPorId($id);
        http_response_code($response['status']);
        echo json_encode($response['data']);
    } else {
        http_response_code(400);
        echo json_encode(["erro" => "ID não informado"]);
    }
}

if($uri === '/login' && $method === "POST"){
    $input = json_decode(file_get_contents('php://input'), true);

    $email = $input['email'] ?? null;
    $senha = $input['senha'] ?? null;

    $response = $usuarioController->rotaLogin($email, $senha);

    http_response_code($response['status']);
    echo json_encode($response);
}
if($uri === '/cadastro' && $method === "POST"){
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'];
    $senha = $input['senha'];
    $cpf = $input['cpf'];
    $nome = $input['nome'];
    

    $response = $usuarioController->cadastrarUsuarioRota($email, $senha, $nome, $cpf);


    http_response_code($response['status']);

    echo json_encode($response);
}
if ($uri === "/checkout" && $method === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    

    $checkService = new CheckoutService();
    $response = $checkService->criarPagamento($data);

    http_response_code($response['status']);
    echo json_encode($response);
    exit;
}


?>




