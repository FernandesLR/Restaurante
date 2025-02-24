<?php

class Pedido {

    private $id_cliente;
    private $data_pedido;
    private $forma_de_pagamento;

    // Construtor
    public function __construct($id_cliente, $data_pedido, $forma_de_pagamento) {
        $this->id_cliente = $id_cliente;
        $this->data_pedido = $data_pedido;
        $this->forma_de_pagamento = $forma_de_pagamento;
    }

    // Getters e Setters
    public function getIdCliente() {
        return $this->id_cliente;
    }

    public function setIdCliente($id_cliente) {
        $this->id_cliente = $id_cliente;
    }

    public function getDataPedido() {
        return $this->data_pedido;
    }

    public function setDataPedido($data_pedido) {
        $this->data_pedido = $data_pedido;
    }

    public function getFormaDePagamento() {
        return $this->forma_de_pagamento;
    }

    public function setFormaDePagamento($forma_de_pagamento) {
        $this->forma_de_pagamento = $forma_de_pagamento;
    }

}
