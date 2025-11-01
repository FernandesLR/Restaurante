import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header({ user }) {
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setIsVisible(!isVisible)
  const toggleUserMenu = () => setMenuOpen(!menuOpen)
  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <header className="flex items-center justify-between px-6 md:px-48 pt-6">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Sabor e Arte" className="md:w-40 w-24 hover:scale-110 transition" />
      </Link>

      {/* Navegação */}
      <nav className="relative flex items-center gap-8">
        {/* Menu principal */}
        <div
          className={`${
            isVisible ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-lg p-4 md:static md:flex-row" : "hidden md:flex md:gap-12"
          }`}
        >
          <Link className="hover:scale-110 hover:text-yellow-400" to="/">HOME</Link>
          <a className="hover:scale-110 hover:text-yellow-400" href="#menu">MENU</a>
          <Link className="hover:scale-110 hover:text-yellow-400" to="/Sobre">ABOUT</Link>
        </div>

        {/* Hamburger */}
        <div className="w-14 cursor-pointer flex flex-col md:hidden" onClick={toggleMenu}>
          <div className="h-1 bg-black mb-1"></div>
          <div className="h-1 bg-black mb-1"></div>
          <div className="h-1 bg-black"></div>
        </div>

        {/* Botão de usuário */}
        <div className="relative">
          {user ? (
            <>
              <button
                onClick={toggleUserMenu}
                className="border border-black p-2 shadow-md hover:scale-105 transition hover:bg-yellow-100"
              >
                Seja bem-vindo, {user}!
              </button>
              {menuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white border shadow-md rounded-lg w-48 z-50">
                  <p className="p-3 text-gray-700">Deseja sair da conta?</p>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-2 rounded-b-lg hover:bg-red-600 transition z-50"
                  >
                    Sair
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/Login">
              <button className="border border-black p-2 shadow-md hover:scale-105 transition hover:bg-yellow-100">
                Login/Cadastrar
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
