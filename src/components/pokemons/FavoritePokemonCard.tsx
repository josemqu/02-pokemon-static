import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { type Component, createSignal, Show } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deletePokemon = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]");

    const newFavorites = favorites.filter(
      (favorite: FavoritePokemon) => favorite.id !== pokemon.id
    );

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center relative h-[130px] w-[130px]">
        {/* x icon color red*/}
        <button
          onClick={() => setVisible(false)}
          class="absolute top-1 right-1 z-50 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <a href={`/pokemons/${pokemon.name}`}>
          <div
            style={`view-transition-name: ${pokemon.name}-card`}
            class="flex flex-col items-center justify-between p-4 bg-slate-900 rounded-lg h-[130px] w-[130px]"
          >
            <img
              style={`view-transition-name: ${pokemon.name}-img`}
              src={imageSrc}
              alt={pokemon.name}
              width="80"
              height="80"
            />
            <span
              style={`view-transition-name: ${pokemon.name}-span`}
              class="capitalize text-center text-white mt-2 text-sm"
            >
              {pokemon.name}
            </span>
          </div>
        </a>
      </div>
    </Show>
  );
};
