import React from 'react';
import { NavLink } from 'react-router';

const Home: React.FC = () => {
  return (
    <NavLink to={'/ofertas'} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700'>Ir para Página de ofertas</NavLink>
  );
}

export default Home;