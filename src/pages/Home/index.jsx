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
import { useState } from 'react'


function Home() {

  const [produtos, setProdutos] = useState([]);
  let cont = 0
  function addToCart(produto) {
      cont += 1
      setProdutos([...produtos, produto]);
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





    <section className='text-center mt-40'>
      
      <h3 className=' font-bold text-red-400 mb-6'>Os mais pedidos</h3>
      <h1 className='font-bold text-5xl mb-16'>Popular</h1>
    


      <div className='md:flex ml-10 justify-center gap-10 mt-14 block' id='menu'>
        <Card id={0} img={pastel} title="Pastel" desc="Descrição do produto" qtd="12" addToCart={addToCart} />
        <Card id={1} img={coca} title="Coca cola" desc="Descrição do produto" qtd="12" addToCart={addToCart} />
        <Card id={2} img={pepsi} title="Pastel" desc="Descrição do produto" qtd="12" addToCart={addToCart} />

          
      </div>
    </section>

    <section className='text-center mt-40'>
      
      <h3 className=' font-bold text-red-400 mb-6'>MENU</h3>
      <h1 className='font-bold text-5xl mb-16'>Especialidades</h1>
    


      <div className='md:flex ml-10 justify-center gap-10 mt-14 block'>
        <Card id={3} img={pastel} title="Pastel" desc="Descrição do produto" qtd="12" addToCart={addToCart} />
        <Card id={4} img={coca} title="Coca cola" desc="Descrição do produto" qtd="12" addToCart={addToCart} />
        <Card id={5} img={pepsi} title="Pastel" desc="Descrição do produto" qtd="12" addToCart={addToCart} />

          
      </div>
    </section>
    
    <Carrinho produtos={produtos} setProdutos={setProdutos} />

    <Footer />
    </>
  )
}

export default Home
