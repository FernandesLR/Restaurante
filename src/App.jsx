import { useState } from 'react'
import w from './assets/woman.png'
import b from './assets/back.png'
import p from './assets/play.png'
import bag from './assets/bag.png'
import search from './assets/search.png'
import logo from './assets/logo.png'
import pastel from './assets/pastel.png'
import coca from './assets/coca.png'
import pepsi from './assets/pepsi.png'
import Card from './components/card'


function App() {
  const [isVisible , setIsVisible] = useState(false)

  const toggleMenu = () => {
    setIsVisible(!isVisible); // Alterna entre mostrar e esconder
  }

  return (
    <>
     <header className="flex items-center justify-between px-6 md:px-48 pt-6">
      {/* Logo */}
      <img
        src={logo}
        alt="Sabor e Arte"
        className="md:w-40 w-24 hover:scale-110 md:pr-10"
      />

      {/* Navegação */}
      <nav className="relative">
        <ul className="flex items-center gap-8">
          {/* Menu principal */}
          <div
            id="menu"
            className={`${
              isVisible
                ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-lg p-4 md:static md:flex-row"
                : "hidden md:flex md:gap-12"
            }`}
          >
            <li className="hover:scale-110 hover:text-yellow-400">
              <a href="#home">HOME</a>
            </li>
            <li className="hover:scale-110 hover:text-yellow-400">
              <a href="#menu">MENU</a>
            </li>
            <li className="hover:scale-110 hover:text-yellow-400">
              <a href="#about">ABOUT</a>
            </li>
          </div>

          {/* Ícones */}
          <li className="hover:scale-110">
            <a href="#search">
              <img src={search} alt="Search" />
            </a>
          </li>
          <li className="hover:scale-110">
            <a href="#bag">
              <img src={bag} alt="Bag" />
            </a>
          </li>

          {/* Botão hamburguer */}
          <div
            className="w-14 cursor-pointer flex flex-col md:hidden"
            onClick={toggleMenu}
          >
            <div className="h-1 bg-black mb-1"></div>
            <div className="h-1 bg-black mb-1"></div>
            <div className="h-1 bg-black"></div>
          </div>
        </ul>
      </nav>
    </header>

    
    <section className="flex  items-center justify-evenly gap-10" style={{ height: '60vh' }}>
      <div className="">
        <h1 className="text-5xl text-b font-black pb-10">
          Aqui, o intervalo <br></br>tem mais 
          <span className="text-yellow-300"> sabor! </span>  <br></br>Sua pausa merece o melhor 
          
        </h1>
        <p className='pb-10'>Clique no botão abaixo e peça já seu lanche</p>

        <div className="gap-10 flex">
          <button className='bg-yellow-400 p-3 rounded-3xl text-white font-bold w-48 shadow-xl hover:bg-yellow-300 transition-colors'>
            Fazer pedido
          </button>
          <button className='font-bold hover:shadow-yellow-200'>Videos</button>
          <button className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-xl hover:shadow-yellow-100">
            <img 
              src={p} 
              alt="play" 
              className="w-10"
            />
          </button>

        </div>

      </div>


      <div className='flex relative h-3/4'>
        <img src={b} alt="" className=''/>
        <img src={w} alt="" className='absolute'/>
      </div>




    </section>



    <section className='text-center'>
      
      <h3 className=' font-bold text-red-400 mb-6'>Os mais pedidos</h3>
      <h1 className='font-bold text-5xl mb-16'>Popular</h1>
    


      <div className='flex  justify-center gap-10 mt-14'>
        <Card img={pastel}   alt="Product Image"
          title="Pastel"
          desc="Descrição do produto"/>

        <Card img={coca}  alt="Product Image"
          title="Coca cola"
          desc="Descrição do produto" h='h-26' w='w-24'/>
        <Card img={pepsi}   alt="Product Image"
          title="Pepsi"
          desc="Descrição do produto" h='h-26' w='w-16'/>

          
      </div>
    </section>

    <section className='pl-40 mt-24'>
      <p className='font-bold text-red-400'>MENU</p>
      <div className='flex mt-7'>
        <h1 className='font-bold text-5xl'>Especialidades <br></br> do nosso menu</h1>

        <div className='gap-10 justify-end flex ml-auto mr-80'>
          <button className='hover:bg-yellow-400 transition rounded-full w-16 h-16'>&lt;</button>
          <button className='hover:bg-yellow-400 rounded-full w-16 h-16'>&gt;</button>
        </div>
      </div>

      <div className='flex gap-10 mt-14 justify-center '>
        <Card img={pastel}   alt="Product Image"
            title="Pastel"
            desc="Descrição do produto"/>

          <Card img={coca}  alt="Product Image"
            title="Coca cola"
            desc="Descrição do produto" h='h-26' w='w-24'/>
          <Card img={pepsi}   alt="Product Image"
            title="Pepsi"
            desc="Descrição do produto" h='h-26' w='w-16'/>


      </div>


      <footer className='mt-96 p-12 flex '>
        <div className='mr-24'>
          <img src={logo} alt="Logo" className="h-24 w-auto mr-10 " />
          <p className=''>Savor the artistry where<br></br> every dish is a culinary<br></br> masterpice</p>

        </div>

        <div>
          <h3 className='font-bold text-xl'>Contact Us</h3>
          <nav>
            <ul>
              <li>leo1ramosf@gmail.com</li>
              <li>Linkedin</li>
              <li>portfolio</li>
            </ul>
          </nav>
        </div>
      </footer>
    </section>
    </>
  )
}

export default App
