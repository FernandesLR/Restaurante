<?php

require '/src/controller/ProdutoController.php';

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
}



