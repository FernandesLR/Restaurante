<?php
require __DIR__ . '/vendor/autoload.php';

use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;



MercadoPagoConfig::setAccessToken("Insira seu próprio token de acesso aqui");


$listadeProdutos = json_decode(file_get_contents('php://input'), true);

$client = new PreferenceClient();

$itens = [];
foreach ($listadeProdutos as $produto){
    $itens[] = [
        "title" => $produto['title'],
        "quantity" => $produto['quantity'],
        "unit_price" => $produto['unit_price']

    ];

    
}

$preference = $client->create([
    "items" => $itens,

    "back_urls" => [
        "success" => 'https://restaurante-ddpt.vercel.app/compraFinalizada',
        "failure" => 'https://restaurante-ddpt.vercel.app/compraInvalida',
        "pending" => 'https://restaurante-ddpt.vercel.app/compraPendente'
        
    ],
    "auto_return" => "approved"
]);

echo json_encode(["checkout_url" => $preference->init_point]);

?>