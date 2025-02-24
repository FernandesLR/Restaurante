<?php

// Permitir que qualquer origem faça requisições
header('Access-Control-Allow-Origin: *'); // Para produção, restrinja para o domínio do frontend
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$usuarioController = new UsuarioController();

// Se a requisição for do tipo OPTIONS (preflight request), finalize com status 200
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configurações do conteúdo de resposta
header('Content-Type: application/json');

// Função para limpar dados e evitar injeção de código
function clean_input($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuarioController->cadastrarUsuario();
} else {
    // Se não for POST, responde com erro
    echo json_encode(['status' => 'error', 'message' => 'Método não permitido']);
    exit();
}
?>
