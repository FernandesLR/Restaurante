import { useCallback } from 'react';
import React from 'react';

function Card({ id = 0, img, alt, title, desc, preco, h = 'h-24', w = '0', addToCart }) {
    
    // Memorizando a função para evitar recriação a cada renderização
    const selecionado = useCallback(() => {
        addToCart({ id, img, title, preco, desc });
    }, [id, img, title, preco, desc, addToCart]);


    return (
        <div className="flex justify-center items-center gap-10 mt-14 w-96 hover:scale-110 transition">
            <button onClick={selecionado}>
                <div className="shadow-2xl p-14 text-center rounded-lg">
                    <img src={img} alt={alt} className={`${h} ${w} m-auto`} />
                    <p className="mt-5 font-bold">{title}</p>
                    <p>{desc}</p>
                    <p>R$: {preco}</p>
                </div>
            </button>
        </div>
    );
}

// Usando React.memo para evitar re-renderizações desnecessárias
export default React.memo(Card);
