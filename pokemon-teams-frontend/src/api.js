const PokemonUrl = "http://localhost:3000/"
const fetchTrainers = () => 
    fetch(PokemonUrl + `/trainers`)
    .then(resp => resp.json())

const addPokemon = pokemon =>
    fetch(Pokemon_url + `/pokemons`, {
        method: "POST",
        headers: { "Content_Type": "application/json"},
        body: JSON.stringify({
            'trainer_id': trainerId
        })
    }).then(resp => resp.json())

const releasePokemon = (pokemonId) => {
    return fetch(`${PokemonUrl}` + `/pokemons/${pokemonId}`, {
        method: "DELETE"
    }).then(resp => resp.json())
}
    

