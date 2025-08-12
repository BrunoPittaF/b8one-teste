import React from 'react';
import { NavLink } from 'react-router';

const Home: React.FC = () => {
  return (
    <NavLink to={'/ofertas'}>Home</NavLink>
  );
}

export default Home;