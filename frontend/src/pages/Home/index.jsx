import w from '../../assets/woman.png'
import b from '../../assets/back.png'
import p from '../../assets/play.png'
import pastel from '../../assets/pastel.png'
import coca from '../../assets/coca.png'
import pepsi from '../../assets/pepsi.png'
import Card from '../../components/card'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carrinho from '../../components/carrinho'
import { useState, useEffect } from 'react'


function Home() {
  const [produtos, setProdutos] = useState([]);      // Carrinho
  const [dados, setDados] = useState([]);            // Produtos da API
  const [loading, setLoading] = useState(true);      // Estado de carregamento

  // Buscar produtos só uma vez
  useEffect(() => {
    const pegarProdutos = async () => {
      try {
        const resp = await fetch("http://localhost:8000/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await resp.json();
        setDados(data); // seta os produtos vindos da API
      } catch (error) {
        console.log('Erro ao pegar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    pegarProdutos();
  }, []);

  // Adicionar ao carrinho
  function addToCart(produto) {
    setProdutos((prev) => [...prev, produto]);
  }

  return (
    <>

      <Header />

      <section 
        className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-10 mt-24 mb-80" 
        style={{ height: '60vh' }}
      >
        {/* Texto e Botões */}
        <div>
          <h1 className="text-4xl md:text-5xl text-center md:text-justify text-b font-black pb-10 mt-4">
            Aqui, o intervalo <br /> tem mais 
            <span className="text-yellow-300"> sabor! </span> <br /> Sua pausa merece o melhor
          </h1>
          <p className="pb-10 text-center">Clique no botão abaixo e peça já seu lanche</p>

          <div className="justify-center md:justify-start gap-10 flex">
            <button className="bg-yellow-400 p-3 rounded-3xl text-white font-bold w-48 shadow-xl hover:bg-yellow-300 transition-colors">
              Fazer pedido
            </button>
            <button className="font-bold hover:shadow-yellow-200">Videos</button>
            <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-xl hover:shadow-yellow-100">
              <img 
                src={p} 
                alt="play" 
                className="w-10"
              />
            </button>
          </div>
        </div>

        {/* Imagens */}
        <div className="relative h-3/4 flex items-center justify-center">
          <img src={b} alt="Background" className="z-0 w-80 md:w-auto" />
          <img src={w} alt="Overlay" className="absolute z-10 w-auto" />
        </div>
      </section>



      {/* MENU */}
      <section className='text-center mt-40'>
        <h3 className=' font-bold text-red-400 mb-6'>MENU</h3>
        <h1 className='font-bold text-5xl mb-16'>Especialidades</h1>

        <div id="menu-especialidades" className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 mx-auto place-items-center max-w-6xl'>
          {dados
            .filter((item) => ["Pastel", "Coca Cola", "Pepsi"].includes(item.title))
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                desc={item.descricao}
                preco={item.preco}
                addToCart={addToCart}
              />
          ))}
        </div>

      </section>

            {/* POPULARES */}
    <section className="text-center mt-40">
      <h3 className="font-bold text-red-400 mb-6">Os mais pedidos</h3>
      <h1 className="font-bold text-5xl mb-16">Popular</h1>

      <div
        id="menu-populares"
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 mx-auto place-items-center max-w-6xl"
      >
        {/* Produtos do backend */}
        {loading ? (
          <p>Carregando produtos...</p>
        ) :(
          dados.length > 0 &&
          dados.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                desc={item.descricao}
                preco={item.preco}
                addToCart={addToCart}
              />
          ))
        )}
      </div>
    </section>

      
      
      <Carrinho produtos={produtos} setProdutos={setProdutos} />
      <Footer />
    </>
  )
}

export default Home
