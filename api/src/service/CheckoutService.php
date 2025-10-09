<?php
namespace App\service;

use MercadoPago\MercadoPagoConfig;
use MercadoPago\Client\Preference\PreferenceClient;

class CheckoutService
{
    public function criarPagamento(array $produtos)
    {
        try {
            MercadoPagoConfig::setAccessToken("SUA API AQUI");

            $client = new PreferenceClient();

            $items = [];
            foreach ($produtos as $p) {
                $items[] = [
                    "title" => $p['title'],
                    "quantity" => (int)$p['quantidade'],
                    "unit_price" => (float)$p['preco']
                ];
            }

            $preference = $client->create([
                "items" => $items,
            ]);

            return [
                "status" => 200,
                "data" => [
                    "url" => $preference->init_point
                ]
            ];
        } catch (\Exception $e) {
            return [
                "status" => 500,
                "data" => ["error" => $e->getMessage()]
            ];
        }
    }
}
