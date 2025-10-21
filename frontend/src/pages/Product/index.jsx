import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/card';

function Product() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const [produto, setProduto] = useState(null);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantidade, setQuantidade] = useState(1);
  const [imagemSelecionada, setImagemSelecionada] = useState(0);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
        const res = await fetch(`${API_URL}/produto?id=${id}`);

        if (!res.ok) throw new Error("Produto não encontrado");

        const data = await res.json();
        setProduto(data);
        
        // Buscar produtos relacionados
        const resRelacionados = await fetch(API_URL);
        if (resRelacionados.ok) {
          const todosProdutos = await resRelacionados.json();
          const relacionados = todosProdutos
            .filter(p => p.id !== data.id)
            .slice(0, 4);
          setProdutosRelacionados(relacionados);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchProduto();
  }, [id]);

  const handleQuantidade = (action) => {
    if (action === 'increment') setQuantidade(prev => prev + 1);
    if (action === 'decrement' && quantidade > 1) setQuantidade(prev => prev - 1);
  };

  const adicionarAoCarrinho = () => {
    if (produto) {
      alert(`Adicionado ${quantidade} unidade(s) de ${produto.title} ao carrinho!`);
    }
  };

const finalizarCompra = async () => {
  try {
    // Envia como array de produtos (mesmo sendo apenas um)
    const dadosPagamento = [{
      id: produto.id,
      title: produto.title,
      preco: Number(produto.preco),
      quantidade: Number(quantidade),
      img: produto.img,
      descricao: produto.descricao
    }];

    console.log("Enviando array de produtos:", dadosPagamento);

    const response = await fetch("http://localhost:8000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosPagamento),
    });

    const data = await response.json();
    console.log("Resposta:", data);

    if (data?.data?.url) {
      window.location.href = data.data.url;
    } else {
      alert("Erro: " + (data.message || "URL não recebida"));
    }

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro de conexão: " + error.message);
  }
};

  if (loading) return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando produto...</p>
      </div>
      <Footer />
    </>
  );
  
  if (error || !produto) return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error || "Produto não encontrado"}</p>
      </div>
      <Footer />
    </>
  );

  // Dados para exibição
  const imagensProduto = produto.imagens || [produto.img];
  const avaliacoes = produto.avaliacoes || [
    { nome: "Maria Silva", nota: 5, comentario: "Produto excelente!", data: "2023-10-15" },
    { nome: "Joana Santos", nota: 4, comentario: "Ótima qualidade", data: "2023-10-10" }
  ];
  const mediaAvaliacoes = avaliacoes.reduce((acc, curr) => acc + curr.nota, 0) / avaliacoes.length;

  return (
    <>
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Galeria de Imagens */}
          <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-100 via-white to-yellow-100 p-4">
  <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden w-full max-w-[900px] h-auto md:h-[600px]">

              {imagensProduto.map((img, index) => (
                <div 
                  key={index}
                  className={`w-16 h-16 border-2 rounded cursor-pointer ${
                    imagemSelecionada === index ? 'border-blue-500' : 'border-gray-300'
                  }`}
                  onClick={() => setImagemSelecionada(index)}
                >
                  <img 
                    src={img} 
                    alt={`${produto.title} ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex-1 order-1 md:order-2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={imagensProduto[imagemSelecionada]}
                  alt={produto.title}
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{produto.title}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-5 h-5 ${star <= Math.round(mediaAvaliacoes) ? 'fill-current' : 'text-gray-300'}`} 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">({avaliacoes.length} avaliações)</span>
            </div>

            <div className="mb-6">
              <p className="text-3xl font-bold text-green-600">R$ {produto.preco}</p>
              <p className="text-gray-500 text-sm">em até 10x de R$ {(produto.preco / 10).toFixed(2)} sem juros</p>
            </div>

            <div className="mb-6">
              <p className="font-medium mb-2">Quantidade:</p>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 w-8 h-8 rounded-l hover:bg-gray-300 transition-colors"
                  onClick={() => handleQuantidade('decrement')}
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantidade}
                  onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-8 border-y text-center"
                  min="1"
                />
                <button 
                  className="bg-gray-200 w-8 h-8 rounded-r hover:bg-gray-300 transition-colors"
                  onClick={() => handleQuantidade('increment')}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex-1 flex items-center justify-center"
                onClick={adicionarAoCarrinho}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Adicionar ao Carrinho
              </button>
              <button 
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition flex-1"
                onClick={finalizarCompra}
              >
                Comprar Agora
              </button>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-800">✓ Compra garantida</p>
              <p className="text-sm text-blue-700">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Descrição</h2>
          <p className="text-gray-700 leading-relaxed">{produto.descricao}</p>
        </div>

        {/* Produtos Relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Produtos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {produtosRelacionados.map((produtoRel) => (
              <Card
                key={produtoRel.id}
                id={produtoRel.id}
                img={produtoRel.img}
                title={produtoRel.title}
                desc={produtoRel.descricao}
                preco={produtoRel.preco}
                addToCart={adicionarAoCarrinho}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;