import { Link } from "react-router-dom"


export default function Card({img, alt, title, desc, qtd, h='h-24', w='w-44'}){
    
    return(
        <>
        <Link to={"/product"} >
        <div className='flex  justify-center items-center gap-10 mt-14 w-96 hover:scale-110 hover:transition-transform'>
            <div className='shadow-2xl p-12 text-center rounded-lg'>
                <img src={img} alt={alt} className={`${h} ${w}`}/>
                <p className='mt-5'>{title}</p>
                <p>{qtd} restantes</p>
            </div>
        </div>
        </Link>
        </>
    )
}
