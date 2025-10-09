import { useCallback } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ id = 0, img, alt, title, desc, preco, h = 'h-24', w = '0', addToCart }) {
    
    // Memorizando a função para evitar recriação a cada renderização
    const selecionado = useCallback(() => {
        addToCart({ id, img, title, preco, desc });
    }, [id, img, title, preco, desc, addToCart]);


    return (
        <div className="justify-center items-center gap-10 mt-14 w-96 hover:scale-110 transition">
            <div className="shadow-2xl p-14 text-center rounded-lg">
                <Link key={id} to={`/produto?id=${id}`}>
                    <img src={img} alt={alt} className={`${h} ${w} m-auto`} />
                    <p className="mt-5 font-bold">{title}</p>
                    <p>{desc}</p>
                    <p>R$: {preco}</p>
                </Link>
                <button onClick={selecionado} className='bg-yellow-400 md:rounded font-bold p-2 hover:bg-yellow-300 transition-colors'>Adicionar Ao Carrinho</button>
            </div>
        </div>
    );
}

// Usando React.memo para evitar re-renderizações desnecessárias
export default React.memo(Card);
