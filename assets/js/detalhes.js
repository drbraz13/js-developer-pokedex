const pokemonName = document.getElementById('nameDetail')
const pesoDetail = document.getElementById('pesoDetail')
const alturaDetail = document.getElementById('alturaDetail')
const habilidadeDetail0 = document.getElementById('habilidadeDetail0')
const habilidadeDetail1 = document.getElementById('habilidadeDetail1')
const typeDetail = document.getElementById('typeDetail')
const typeColor = document.getElementById('typeColor')
const pokemonPhoto = document.getElementById('pokemonPhoto')
const vidaDetail = document.getElementById('vidaDetail')
const ataqueDetail = document.getElementById('ataqueDetail')
const defesaDetail = document.getElementById('defesaDetail')



const url = window.location.href
let numero;
const index = url.indexOf('=')
if (index !== -1) {
  numero = url.slice(index + 1)
}

function detail(numero) {
  const urlDetail = 'https://pokeapi.co/api/v2/pokemon/' + numero;
  // Use a função fetch para buscar os detalhes do Pokémon
  fetch(urlDetail)
    .then((response) => response.json())
    .then((pokemonData) => {

      weight = pokemonData.height

      const abilities = pokemonData.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
      const [ability] =
      pokemonData.abilities = abilities
      pokemonData.ability = ability

      //innerHTML
      pokemonName.innerHTML = pokemonData.name
      pesoDetail.innerHTML = "Peso: " + pokemonData.height
      alturaDetail.innerHTML = "Altura: " + pokemonData.weight + " cm"
      habilidadeDetail0.innerHTML = "Habilidades: " + ability + ", "
      habilidadeDetail1.innerHTML = abilities[1]
      console.log(pokemonData);
      typeDetail.innerHTML = pokemonData.types[0].type.name
      typeColor.className += `\n ${pokemonData.types[0].type.name}`
      pokemonPhoto.src = pokemonData.sprites.other.dream_world.front_default;
      pokemonPhoto.alt = pokemonData.name;
      vidaDetail.innerHTML = "Vida: " + pokemonData.stats[0].base_stat
      ataqueDetail.innerHTML = "Ataque: " + pokemonData.stats[1].base_stat
      defesaDetail.innerHTML = "Defesa: " + pokemonData.stats[2].base_stat

    })
    .catch((error) => {
      console.error('Erro ao buscar detalhes do Pokémon:', error);
    });
}
detail(numero)