<?php
require __DIR__ . '/vendor/autoload.php';

use MercadoPago\MercadoPagoConfig;
use MercadoPago\Client\Preference\PreferenceClient;

MercadoPagoConfig::setAccessToken("SEU_ACCESS_TOKEN_AQUI"); // substitua pelo seu token

$client = new PreferenceClient();

// Recebe os dados JSON enviados pelo frontend
$resp = json_decode(file_get_contents('php://input'), true);

// Monta a lista de itens
$items = [];

foreach ($resp['items'] as $produto) {
    $items[] = [
        "title" => $produto['title'],
        "quantity" => (int)$produto['quantity'],
        "unit_price" => (float)$produto['price']
    ];
}

// Cria a preferência com múltiplos produtos
$preference = $client->create([
    "items" => $items,
    "back_urls" => [
        "success" => "http://localhost/sucesso.php",
        "failure" => "http://localhost/erro.php",
        "pending" => "http://localhost/pendente.php"
    ],
    "auto_return" => "approved",
]);

// Retorna o link do checkout (sem redirecionar direto)
echo json_encode([
    "url" => $preference->init_point
]);
