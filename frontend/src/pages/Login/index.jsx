import React, { useState } from 'react';
import usuarioValida from './validaUsuario';

export default function Cadastrar() {
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false); // Indica se o usuário já clicou em "Cadastrar"

    const cadastrar = async (event) => {
        event.preventDefault();
        setSubmitted(true); // Marca que o usuário tentou enviar

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const CPF = document.getElementById("CPF").value;

        if (!usuarioValida(email, password, CPF, setErrors)) return;

        const userData = { email, password, name, CPF };

        try {
            // Envia os dados para a API
            const resp = await fetch('http://localhost/api/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // Passa os dados do usuário como JSON
                body: JSON.stringify(userData),
            });
            // Aguarda a resposta da API
            const data = await resp.json();

            if (data.status === "success") {
                console.log("Cadastro realizado com sucesso");
            } else {
                console.log("Erro no cadastro");
                alert("Erro no cadastro");
            }
        } catch (error) {
            console.log('Erro ao enviar os dados:', error);
        }
    };

    return (
        <form onSubmit={cadastrar} className="flex flex-col items-center gap-6 p-6 mt-60 w-80 border border-yellow-500 rounded-lg shadow-lg bg-white">
            <h1 className="text-lg font-semibold text-gray-900">Cadastro</h1>

            {/* Input do Email*/}
            <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input 
                    type="text" 
                    id="email"
                    placeholder='Exemplo: pedro@gmail.com'
                    className={`border ${submitted ? (errors.email ? "border-red-500" : "border-green-500") : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
                {submitted && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>


            {/* Input da Senha*/}
            <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">Senha</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder='Exemplo: G5!xYp9@zL'
                    className={`border ${submitted ? (errors.password ? "border-red-500" : "border-green-500") : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
                {submitted && errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Input do Nome*/}
            <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">Nome</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Digite seu nome"
                    className={`border ${submitted ? "border-green-500" : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
            </div>

            {/* Input do CPF*/}
            {/*ex: de cpf válido para teste 514.888.860-16*/}
            <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">CPF</label>
                <input 
                    type="text" 
                    id="CPF"
                    placeholder="Ex: 123.456.789-00"
                    maxLength="14"
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "") // Remove não números
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d)/, "$1.$2")
                        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                    }}
                    className={`border ${submitted ? (errors.CPF ? "border-red-500" : "border-green-500") : "border-gray-300"} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
                {submitted && errors.CPF && <p className="text-red-500 text-sm">{errors.CPF}</p>}
            </div>

            <button type="submit" className="bg-yellow-500 text-white font-medium p-2 rounded-md hover:bg-yellow-600 transition">
                Cadastrar
            </button>
        </form>
    );
}
