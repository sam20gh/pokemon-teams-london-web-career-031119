
const renderTrainers = function (trainers) {
    trainers.forEach(renderTrainer)
}

const renderTrainer = function(trainer) {
    const trainerCard = document.createElement("div")
    trainerCard.className = "card"
    trainerCard.setAttribute(`data-id`, `${trainer.id}`)

    const trainerName = document.createElement("p")
    trainerName.innerText = trainer.name
    trainerCard.appendChild(trainerName)

    const addPokemonBtn = document.createElement("button")
    addPokemonBtn.setAttribute(`data-trainer-id`, `${trainer.id}` )
    addPokemonBtn.innerText = "Add New Pokemon"
    trainerCard.appendChild(addPokemonBtn)

    const pokemonList = document.createElement("ul")
    trainerCard.appendChild(pokemonList)

    const renderPokemon = function(pokemon) {
        if (pokemonList.childElementCount < 6) {
            const pokemonLi = document.createElement("li")
            pokemonLi.innerHTML = `${pokemon.species} (${pokemon.nikname}) <button class="release" data-pokemon-id="${pokemon.id}">Release`

            const realeseBtn = pokemonLi.querySelector(".release")
            releaseBtn.addEventListener('click', () => {
                fetch(POKEMONS_URL + `/${pokemon.id}`, {
                    method: 'DELETE'
                })
                pokemonLi.remove()
            })

            pokemonList.appendChild(pokemonLi)

            }
            else {
                alert(`${trainer.name}'s team is full.`)
            }
        }

        trainer.pokemon.array.forEach(renderPokemon);
}























// const appContain = document.querySelector("main")
// const getTrainer = trainer => {
//     const trainerDiv = document.createElement("div")
//     trainerDiv.className = "card"
//     trainerDiv.innerHTML = `<p>${trainer.name}</p> 
//           <button data-trainer-id = "${trainer.id}" class="add" > Add Pokemon </button>
//           <ul>
//               ${trainer.pokemons.map(pokemon => {
//                       return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
//                   }).join('')
//               } 
//           </ul>
//     `
//     const releaseBtn = trainerDiv.querySelector('.release')
//     const addBtn = trainerDiv.querySelector('.add')

//     releaseBtn.addEventListener("click", () => {
//         releasePokemon(pokemon.id)
//     })




//     appContain.append(trainerDiv)

// }




// // release pokemon

// const getTrainers = trainers => {
//     trainers.forEach(getTrainer)
// }

// const init = () => {
//     fetchTrainers()
//         .then(getTrainers)
// }

// init()



