const cards = document.querySelector(".cards");
for (let i = 0; i < data.length; i++) {
  const pokemon = data[i];

  const card = document.createElement("li");
  card.setAttribute("class", "card");
  cards.append(card);

  const bulbasaurTitle = document.createElement("h2");
  bulbasaurTitle.setAttribute("class", "card--title");
  bulbasaurTitle.innerText = pokemon.name;
  card.append(bulbasaurTitle);

  const bulbasaurImg = document.createElement("img");
  bulbasaurImg.setAttribute("class", "card--img");
  bulbasaurImg.width = "256";
  card.append(bulbasaurImg);
  bulbasaurImg.src = pokemon.sprites.other["official-artwork"].front_default;
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";

  const bulbasaurStats = document.createElement("ul");
  bulbasaurStats.setAttribute("class", "card--text");

  const hpLi = document.createElement("li");
  hpLi.innerText =
    pokemon.stats[0].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[0].base_stat;
  bulbasaurStats.append(hpLi);

  const attackLi = document.createElement("li");
  attackLi.innerText =
    pokemon.stats[1].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[1].base_stat;
  bulbasaurStats.append(attackLi);

  const defenseLi = document.createElement("li");
  defenseLi.innerText =
    pokemon.stats[2].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[2].base_stat;
  bulbasaurStats.append(defenseLi);

  const specialAttackLi = document.createElement("li");
  specialAttackLi.innerText =
    pokemon.stats[3].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[3].base_stat;
  bulbasaurStats.append(specialAttackLi);

  const specialDefenseLi = document.createElement("li");
  specialDefenseLi.innerText =
    pokemon.stats[4].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[4].base_stat;
  bulbasaurStats.append(specialDefenseLi);

  const speedLi = document.createElement("li");
  speedLi.innerText =
    pokemon.stats[5].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[5].base_stat;
  bulbasaurStats.append(speedLi);

  card.append(bulbasaurStats);
}

//You can start simple and just render a single
//pokemon card from the first element
console.log(pokemon);
// console.log(data);
