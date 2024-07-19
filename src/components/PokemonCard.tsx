import Link from 'next/link';

interface PokemonCardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
  return (
    <Link href={`/pokemons/${pokemonId}`}>
      <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          alt={pokemon.name}
          className="w-20 h-20 mx-auto"
        />
        <p className="text-center mt-2 capitalize">{pokemon.name}</p>
      </div>
    </Link>
  );
};

export default PokemonCard;
