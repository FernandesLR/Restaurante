import { useState } from 'react'
import bag from '../assets/bag.png'
import search from '../assets/search.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header (){
    const [isVisible , setIsVisible] = useState(false)

    const toggleMenu = () => {
      setIsVisible(!isVisible); // Alterna entre mostrar e esconder
    }
    return(
        <header className="flex items-center justify-between px-6 md:px-48 pt-6">
              {/* Logo */}
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="Sabor e Arte"
                  className="md:w-40 w-24 hover:scale-110 transition md:pr-10"
                />
              </Link>
        
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
                      <Link to="/">HOME</Link>
                    </li>
                    <li className="hover:scale-110 hover:text-yellow-400">
                      <a href='#menu'>MENU</a>
                    </li>
                    <li className="hover:scale-110 hover:text-yellow-400">
                      <Link to="/Sobre">ABOUT</Link>
                    </li>
                  </div>
        

        
                  {/* Botão hamburguer */}
                  <div
                    className="w-14 cursor-pointer flex flex-col md:hidden"
                    onClick={toggleMenu}
                  >
                    <div className="h-1 bg-black mb-1"></div>
                    <div className="h-1 bg-black mb-1"></div>
                    <div className="h-1 bg-black"></div>
                  </div>

                  <li>
                    <Link to="/Login">
                      <button className='border border-black p-2 shadow-md hover:scale-105 transition hover:bg-yellow-100'>Login/Cadastrar</button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
    )
}

export default Header