import React from 'react';

interface ICardProps {
    image: string,
    title: string,
    price: number,
    category?: string,
}

const Card: React.FC<ICardProps> = ({ image, price, title}: ICardProps) => {
  return (
                <article className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-48 flex items-center justify-center mb-4 bg-gray-100 rounded">
                    <img
                      src={image}
                      alt={title}
                      className="max-h-full max-w-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className='p-2'>
                 <h3 className="text-sm font-semibold line-clamp-2 mb-2">{title}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</div>
                    </div>
                    <button className="cursor-pointer ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700">Comprar</button>
                  </div>
                  </div>

 
                </article>
  );
}

export default Card;