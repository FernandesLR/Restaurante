<?php
require __DIR__ . '/../vendor/autoload.php';

use App\controller\ProdutoController;

$controller = new ProdutoController();

// Permitir que qualquer origem faça requisições
header('Access-Control-Allow-Origin: *'); // Para produção, restrinja para o domínio do frontend
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');




$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

echo "ok";

if($uri === '/' && $method === 'GET'){
    $response = $controller->getProdutos();
    http_response_code($response['status']);

    return json_encode($response['data']);
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





