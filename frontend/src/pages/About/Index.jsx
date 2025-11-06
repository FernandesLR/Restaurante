import React from "react";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white py-20 px-6">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Imagem lateral */}
        <div className="hidden md:block relative">
          <img
            src="https://i.ibb.co/0pjpk6Vs/64bb494c-faa3-4ce8-92fc-aba1e6278682.png"
            alt="Cantina Escolar"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-semibold">Sabor & Arte</h2>
            <p className="text-sm opacity-90">Aqui o intervalo tem mais sabor!</p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-yellow-600 mb-2">
            Sistema de Pedidos Online para Cantina Escolar
          </h1>
          <p className="text-zinc-600 text-sm mb-6">
            Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) no curso técnico de Desenvolvimento de Software da ETEC.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-zinc-800">Problema identificado</h2>
              <ul className="list-disc list-inside text-sm text-zinc-700 mt-2 space-y-1">
                <li>Longas filas e tempo de espera elevado</li>
                <li>Atendentes sobrecarregados</li>
                <li>Pedidos desorganizados</li>
                <li>Itens esgotados sem aviso prévio</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-zinc-800">Solução proposta</h2>
              <p className="text-sm text-zinc-700 mt-2">
                Criamos um site que permite aos alunos realizarem pedidos e pagamentos online, trazendo agilidade e praticidade para todos.
              </p>
              <ul className="list-disc list-inside text-sm text-zinc-700 mt-2 space-y-1">
                <li>Pedidos antecipados e pagamentos online</li>
                <li>Retirada rápida sem enfrentar filas</li>
                <li>Melhor organização e preparo otimizado</li>
                <li>Redução do tempo de espera e mais satisfação</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-zinc-800">Tecnologias utilizadas</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {["React", "Tailwind", "JavaScript", "PHP", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
            >
              Ver demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}