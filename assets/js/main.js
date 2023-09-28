const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0




function LoadPokemonItens(offset, limit) {

  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

    const newList = pokemons.map((pokemon) => `
   
        <a style = "text-decoration : none" href = "detalhes.html?nome=${pokemon.number}"><li onclick="detail(${pokemon.number})" class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span> 
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) =>`<li class="type ${type} ">${type}</li>`).join('')}
            </ol>
            <img class="image"
            src=${pokemon.photo}
            alt="${pokemon.name}">
          </div>
        </li>
        </a>
    `).join('')

    pokemonList.innerHTML += newList
  })
}
LoadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordWithNexPage = offset + limit

  if (qtdRecordWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset
    LoadPokemonItens(offset, newLimit)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    LoadPokemonItens(offset, limit)
  }


})