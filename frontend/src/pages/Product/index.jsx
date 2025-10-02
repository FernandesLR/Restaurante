import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const res = await fetch(`${API_URL}/produto?id=${id}`, {
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Erro ao buscar produto");
        }

        const data = await res.json();
        setProduto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProduto();
    }
  }, [id]);

  if (loading) return <p className="text-center mt-20">Carregando produto...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">Erro: {error}</p>;
  if (!produto) return <p className="text-center mt-20">Produto não encontrado</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Imagem do produto */}
        <div className="flex justify-center">
          <img
            src={produto.img}
            alt={produto.title}
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        {/* Informações principais */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{produto.title}</h1>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            R$ {produto.preco}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition w-fit">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {/* Características abaixo da imagem */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Características do produto</h2>
        <p className="text-gray-700 leading-relaxed">{produto.descricao}</p>
      </div>
    </div>
  );
}

export default Product;
