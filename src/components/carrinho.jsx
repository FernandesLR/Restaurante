import c from "../assets/carrinho.png";
import { useState } from "react";

function Carrinho({ produtos, setProdutos }) {
    const [isVisible, setValue] = useState(false);

    function toggle() {
        setValue(!isVisible);
    }

    function removerItem(id) {
        setProdutos((prev) => {
            const index = prev.findIndex((produto) => produto.id === id); // Encontra a primeira ocorrência
    
            if (index === -1) return prev; // Se não encontrar, retorna o estado atual
    
            const newProdutos = [...prev]; // Copia o array original
            newProdutos.splice(index, 1); // Remove apenas um item do array
    
            return newProdutos;
        });
    }
    

    // Agrupar produtos de forma mais eficiente com um Map
    const produtosAgrupados = Array.from(
        produtos.reduce((map, produto) => {
            if (!map.has(produto.id)) {
                map.set(produto.id, { ...produto, quantidade: 0 });
            }
            map.get(produto.id).quantidade += 1;
            return map;
        }, new Map()).values()
    );

    return (
        <div>
            <button
                onClick={toggle}
                className="bg-black bottom-0 right-0 fixed p-3 rounded-full m-10 hover:scale-110 transition"
            >
                <img src={c} alt="" className="w-10 z-50" />
            </button>

            {isVisible && (
                <div className="bg-yellow-200 p-12 bottom-0 right-0 fixed z-50">
    {produtos.length === 0 ? (
        <p>Carrinho vazio</p>
    ) : (
        <div className="max-h-96 overflow-y-auto"> 
            {produtosAgrupados.map((produto) => (
                <div
                    key={produto.id} // Garantindo que cada elemento tem uma key única
                    className="flex gap-6 mb-6 bg-white p-4 justify-between rounded-md"
                >
                    <img src={produto.img} alt="" className="h-14" />
                    <div>
                        <p>{produto.t}</p>
                        <div className="flex gap-2">
                            <span>Quantidade:</span>
                            <input
                                type="number"
                                min="1"
                                value={produto.quantidade}
                                readOnly
                                className="w-10 bg-yellow-100 text-center"
                            />
                        </div>
                    </div>
                    <span>R$ {produto.p * produto.quantidade}</span>
                    <button
                        className="text-white bg-red-500 p-2"
                        onClick={() => removerItem(produto.id)}
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    )}

    <div className="flex justify-between gap-10">
        <button
            className="bg-red-400 p-3 text-yellow-100 rounded-2xl font-bold right-0 hover:scale-110 transition px-8"
            onClick={toggle}
        >
            Fechar
        </button>
        <button className="bg-red-400 p-3 text-yellow-100 rounded-2xl font-bold right-0 hover:scale-110 transition">
            Finalizar compra
        </button>
    </div>
</div>

            )}
        </div>
    );
}

export default Carrinho;
