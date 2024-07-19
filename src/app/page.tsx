'use client'
import { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto max-w-xl text-center">
        <img
          src='https://media.primicias.ec/2020/01/30112906/UDLA_Logo-transparente.png'
          className="mx-auto w-1/2 h-auto" // Ajusta el tamaño de la imagen
        />
        <h1 className="text-3xl font-extrabold sm:text-5xl mt-4">
          TALLER UDLA
          <strong className="font-extrabold text-[#98002E] sm:block"> NEXTJS REACT POKEDEX. </strong>
        </h1>
        <p className="mt-4 sm:text-xl/relaxed">
          App Web que consume el API de Pokemon para mostrar un listado de Pokemones y sus detalles.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-[#98002E] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="/pokemons"
          >
            INICIAR
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
