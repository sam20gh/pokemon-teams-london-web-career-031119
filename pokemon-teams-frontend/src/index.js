
const appContain = document.querySelector("main")
const getTrainer = trainer => {
    const trainerDiv = document.createElement("div")
    trainerDiv.className = "card"
    trainerDiv.innerHTML = `<p>${trainer.name}</p> 
          <button data-trainer-id = "${trainer.id}" class="add" > Add Pokemon </button>
          <ul>
              ${trainer.pokemons.map(pokemon => {
                      return `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button></li>`
                  }).join('')
              } 
          </ul>
    `
    const releaseBtn = trainerDiv.querySelector('.realese')
    const addBtn = trainerDiv.querySelector('.add')

    // releaseBtn.addEventListener("click", () => {
    //     releasePokemon(pokemon.id)
    // })




    appContain.append(trainerDiv)

}

// release pokemon

const getTrainers = trainers => {
    trainers.forEach(getTrainer)
}

const init = () => {
    fetchTrainers()
        .then(getTrainers)
}

init()



