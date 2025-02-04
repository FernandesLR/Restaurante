import Header from "../../components/Header.jsx"
import Footer from "../../components/Footer"
import Card from "../../components/card"


// Página de carrinho, ela é chamada através da página HOME

function Product(){
    return(
        <>
            <Header></Header>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-32 md:pl-40 md:pr-40">
                <Card></Card>
                <div className="flex flex-col gap-12">
                <div className="flex gap-12 justify-center md:justify-normal">
                    <h1>Nome do produto</h1>
                    <p>R$:12</p>

                </div>
                <p className="text2xs pl-8 pr-8 md:p-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Recusandae quisquam odit, blanditiis ducimus non rerum facere cum 
                    expedita a nobis in ut totam possimus corporis iste eos ipsum sit at.</p>

                </div>


            </div>
            <Footer></Footer>
        </>
    )
}

export default Product