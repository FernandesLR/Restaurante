<?php

namespace App\controller;

use App\service\UsuarioService;
Use \Exception;


class UsuarioController{
    protected UsuarioService $usuario;

    public function __construct(UsuarioService $service){
        $this->usuario = $service;
    }
    

    public function rotaLogin($email, $senha){
        try{
            $res = $this->usuario->login($email, $senha);
            if(!$res){
                return [
                    'status' => 404,
                    'data' => null,
                    'message' => "Não foi possível encontrar o usuário em nosso sistema"
                ];
            }

            return [
                'status' => 200,
                'data' => $res
            ];
        }catch(\Exception $e){
            return[
                'status' => 500,
                'data' => null,
                'message' => "Erro interno: ".$e->getMessage()
            ];
        }
           
    }


    public function cadastrarUsuarioRota($email, $senha, $nome, $cpf){
        try{
            $res = $this->usuario->cadastrar($email, $senha, $nome, $cpf);

            if(!$res){
                return [
                    'status' => 404,
                    'data' => null,
                    'message' => "Não foi possivel cadastrar o usuário"
                ];
            }

            return [
                'status' => 200,
                'data' => $res
            ];
        }catch(\Exception $e){
            return [
                'status' => 500,
                'data' => null,
                'message' => "Erro interno: ".$e->getMessage()
            ];
        }
    }


}
