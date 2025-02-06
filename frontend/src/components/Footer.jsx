import logo from '../assets/logo.png'

function Footer (){
    return(
        <footer className='mt-96 p-12 flex bg-yellow-400'>
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
                    <a href="https://fernandeslr.github.io/site/" target='_blank'><li>portfolio</li></a>
                </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer