import { useState } from "react";
import { POKEMON_API } from "./PokemonAPI";

export default function Display(){
    const [allPokemons, setAllPokemons] = useState([]);
    const [apiLink, setApiLink] = useState(POKEMON_API);
    const getAllPokemons = async () => {
        const isApiLinkNull = !Boolean(apiLink);
        const response = await fetch(apiLink);

    }
}