import { useAuth } from "../context/provider";
import pokeCard from "./pokeCard";

function PokeDex() {
  const { pokeList } = useAuth();

  return (
    <div className="pokeDex">
      {pokeList.map((p) =>
        pokeCard(
          p.name,
          p.sprites.other.dream_world.front_default,
          p.types,
          p.order
        )
      )}
    </div>
  );
}

export default PokeDex;
