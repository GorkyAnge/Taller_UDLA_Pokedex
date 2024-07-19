interface SearchBarProps {
    setSearchTerm: (term: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  