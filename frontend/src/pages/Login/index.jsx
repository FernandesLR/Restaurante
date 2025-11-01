import React, { useState } from "react";
import usuarioValida from "./validaUsuario";

export default function LoginCadastro() {
  const [form, setForm] = useState({ email: "", senha: "", nome: "", cpf: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const cadastrar = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!usuarioValida(form.email, form.senha, form.cpf, setErrors)) return;

    try {
      const resp = await fetch("http://localhost:8000/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(JSON.stringify(form))
      const data = await resp.json();
      console.log(data);
      alert(data.status == 201 ? "Cadastro realizado!" : "Erro no cadastro.");
    } catch {
      alert("Erro ao enviar os dados.");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, senha: form.senha }),
      });
      const data = await resp.json();
      alert(data.status === 200 ? "Login realizado!" : "Credenciais inválidas.");

      if(data.status === 200 && data.data){
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('id', data.data.id);
          localStorage.setItem('userName', data.data.nome);
          localStorage.setItem('email', data.data.email);
      }

      setForm({ email: '', senha: '', nome: '', cpf: '' });
      window.location.href = '/home';
    } catch {
      alert("Erro ao tentar login.");
    }
  };
return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-100 via-white to-yellow-100 p-4">
    <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden w-full max-w-[900px] h-auto md:h-[650px]">

      {/* Lado esquerdo - Formulário */}
      <form
        onSubmit={cadastrar}
        className="flex flex-col justify-center gap-6 p-8 md:p-10 w-full md:w-1/2 bg-white h-[650px]"
      >
        <div className="pt-8 md:pt-14 gap-6 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-600 text-center">
            Bem-vindo!
          </h1>
          <p className="text-gray-500 text-center -mt-2 md:-mt-4 font-semibold">
            Crie sua conta ou entre
          </p>
        </div>

        {["email", "senha", "nome", "cpf"].map((field) => (
          <div key={field} className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 capitalize">{field}</label>
            <input
              type={field === "senha" ? "password" : "text"}
              id={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Digite seu ${field}`}
              className={`border-2 ${
                submitted
                  ? errors[field]
                    ? "border-red-400"
                    : "border-green-400"
                  : "border-gray-200"
              } rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition`}
            />
            {submitted && errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Cadastrar
          </button>
          <button
            type="button"
            onClick={login}
            className="flex-1 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
          >
            Login
          </button>
        </div>



      </form>

      {/* Lado direito - Imagem e texto */}
      <div
        className="relative bg-cover bg-center w-full md:w-1/2 h-60 md:h-[650px]"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/mFt0pS7q/um-zoom-no-delicioso-hamburguer.png')",
        }}
      >
        <div className="absolute inset-0 bg-yellow-600 bg-opacity-30"></div>
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white drop-shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Quick Service Restaurant</h2>
          <p className="mt-1 md:mt-2 text-sm md:text-lg">
            Seu lugar perfeito para saborear o melhor.
          </p>
        </div>
      </div>
    </div>
  </div>
);



}
