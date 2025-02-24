<?php

class PedidoProduto {

    private $id_pedido;
    private $id_produto;
    private $quantidade;
    private $preco_unitario;

    // Construtor
    public function __construct($id_pedido, $id_produto, $quantidade, $preco_unitario) {
        $this->id_pedido = $id_pedido;
        $this->id_produto = $id_produto;
        $this->quantidade = $quantidade;
        $this->preco_unitario = $preco_unitario;
    }

    // Getters e Setters
    public function getIdPedido() {
        return $this->id_pedido;
    }

    public function setIdPedido($id_pedido) {
        $this->id_pedido = $id_pedido;
    }

    public function getIdProduto() {
        return $this->id_produto;
    }

    public function setIdProduto($id_produto) {
        $this->id_produto = $id_produto;
    }

    public function getQuantidade() {
        return $this->quantidade;
    }

    public function setQuantidade($quantidade) {
        $this->quantidade = $quantidade;
    }

    public function getPrecoUnitario() {
        return $this->preco_unitario;
    }

    public function setPrecoUnitario($preco_unitario) {
        $this->preco_unitario = $preco_unitario;
    }
}
