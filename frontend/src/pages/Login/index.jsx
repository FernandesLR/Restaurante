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
    } catch {
      alert("Erro ao tentar login.");
    }
  };

  return (
    <form
      onSubmit={cadastrar}
      className="flex flex-col items-center gap-6 p-6 mt-60 w-80 border border-yellow-500 rounded-lg shadow-lg bg-white"
    >
      <h1 className="text-lg font-semibold text-gray-900">Cadastro / Login</h1>

      {["email", "senha", "nome", "cpf"].map((field) => (
        <div key={field} className="flex flex-col w-full">
          <label className="text-sm font-medium text-gray-700 capitalize">{field}</label>
          <input
            type={field === "senha" ? "password" : "text"}
            id={field}
            value={form[field]}
            onChange={handleChange}
            className={`border ${
              submitted
                ? errors[field]
                  ? "border-red-500"
                  : "border-green-500"
                : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          />
          {submitted && errors[field] && (
            <p className="text-red-500 text-sm">{errors[field]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-yellow-500 text-white font-medium p-2 rounded-md hover:bg-yellow-600 transition w-full"
      >
        Cadastrar
      </button>

      <button
        type="button"
        onClick={login}
        className="bg-gray-500 text-white font-medium p-2 rounded-md hover:bg-gray-600 transition w-full"
      >
        Login
      </button>
    </form>
  );
}
