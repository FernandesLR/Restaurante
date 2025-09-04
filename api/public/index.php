<?php

// Permitir que qualquer origem faça requisições
header('Access-Control-Allow-Origin: *'); // Para produção, restrinja para o domínio do frontend
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

echo "Ok";
