<?php

class UsuarioController{
    public function cadastrarUsuario(){
            // Coleta os dados JSON enviados
            $data = json_decode(file_get_contents('php://input'), true);

            // Verifica se os dados necessários foram enviados
            if (
                isset($data['email']) && isset($data['password']) && isset($data['name']) && isset($data['CPF']) &&
                !empty($data['email']) && !empty($data['password']) && !empty($data['name']) && !empty($data['CPF'])
            ) {
                // Limpa e valida os dados
                $email = clean_input($data['email']);
                $password = clean_input($data['password']);
                $name = clean_input($data['name']);
                $CPF = clean_input($data['CPF']);

                // Validação simples de email e CPF (aqui pode-se melhorar com expressões regulares)
                if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    echo json_encode(['status' => 'error', 'message' => 'Email inválido']);
                    exit();
                }

                if (!preg_match("/^\d{11}$/", $CPF)) { // Validação simples para CPF
                    echo json_encode(['status' => 'error', 'message' => 'CPF inválido']);
                    exit();
                }

                // Aqui você faria o processo de cadastro no banco de dados (exemplo de conexão com MySQL)
                // Para este exemplo, vamos simular o sucesso do cadastro.

                // Simulação de cadastro no banco de dados
                $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Criptografar a senha

                // Suponha que você tenha uma conexão com banco de dados, exemplo:
                // $db = new mysqli('localhost', 'user', 'password', 'database');
                // Se houver erro na conexão com o banco, retornar erro:
                // if ($db->connect_error) {
                //     echo json_encode(['status' => 'error', 'message' => 'Erro de conexão com o banco de dados']);
                //     exit();
                // }

                // Inserir usuário no banco de dados (simulação)
                // $stmt = $db->prepare("INSERT INTO users (email, password, name, CPF) VALUES (?, ?, ?, ?)");
                // $stmt->bind_param("ssss", $email, $hashedPassword, $name, $CPF);
                // if ($stmt->execute()) {
                //     echo json_encode(['status' => 'success', 'message' => 'Cadastro realizado com sucesso']);
                // } else {
                //     echo json_encode(['status' => 'error', 'message' => 'Erro ao cadastrar usuário']);
                // }

                // Simulação de sucesso
                echo json_encode(['status' => 'success', 'message' => 'Cadastro realizado com sucesso']);
            } else {
                // Dados faltando ou inválidos
                echo json_encode(['status' => 'error', 'message' => 'Dados incompletos ou inválidos']);
            }
            exit();
    }
}