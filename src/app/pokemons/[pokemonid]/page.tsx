"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const PokemonDetailsPage = () => {
  const { pokemonid } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    if (pokemonid) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
        .then((response) => response.json())
        .then((data) => setPokemonDetails(data));
    }
  }, [pokemonid]);

  if (!pokemonDetails) return <div>Loading...</div>;

  return (
    <>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-[#98002E] shadow-[#98002E]/40">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={pokemonDetails.sprites.front_default}
              alt={pokemonDetails.name}
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {pokemonDetails.name.toUpperCase()}
          </h5>
          <p className="mt-2">Altura: {pokemonDetails.height}</p>
          <p className="mt-2">Peso: {pokemonDetails.weight}</p>
          <h6 className="text-xl mb-2">Tipos:</h6>
          {pokemonDetails.types.map((typeInfo, index) => (
              <p key={index}>{typeInfo.type.name}</p>
            ))}
        </div>
        <div className="p-6 pt-0">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#98002E] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={() => router.push("/pokemons")}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonDetailsPage;
