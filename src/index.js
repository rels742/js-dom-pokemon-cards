const cards = document.querySelector(".cards");
for (let i = 0; i < data.length; i++) {
  const pokemon = data[i];

  const card = document.createElement("li");
  card.style.listStyle = "none";
  card.setAttribute("class", "card");
  cards.append(card);

  const cardTitle = document.createElement("h2");
  cardTitle.setAttribute("class", "card--title");
  cardTitle.innerText = pokemon.name;
  cardTitle.style.textTransform = "capitalize";
  card.append(cardTitle);

  const pokemonImg = document.createElement("img");
  pokemonImg.setAttribute("class", "card--img");
  pokemonImg.width = "256";
  card.append(pokemonImg);
  pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;

  const pokemonStats = document.createElement("ul");
  pokemonStats.setAttribute("class", "card--text");
  card.append(pokemonStats);

  const hpLi = document.createElement("li");
  pokemonStats.append(hpLi);
  hpLi.innerText =
    pokemon.stats[0].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[0].base_stat;

  const attackLi = document.createElement("li");
  attackLi.innerText =
    pokemon.stats[1].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[1].base_stat;
  pokemonStats.append(attackLi);

  const defenseLi = document.createElement("li");
  defenseLi.innerText =
    pokemon.stats[2].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[2].base_stat;
  pokemonStats.append(defenseLi);

  const specialAttackLi = document.createElement("li");
  specialAttackLi.innerText =
    pokemon.stats[3].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[3].base_stat;
  pokemonStats.append(specialAttackLi);

  const specialDefenseLi = document.createElement("li");
  specialDefenseLi.innerText =
    pokemon.stats[4].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[4].base_stat;
  pokemonStats.append(specialDefenseLi);

  const speedLi = document.createElement("li");
  speedLi.innerText =
    pokemon.stats[5].stat.name.toUpperCase() +
    ": " +
    pokemon.stats[5].base_stat;
  pokemonStats.append(speedLi);

  const pokemeonAppearances = document.createElement("ul");
  pokemeonAppearances.setAttribute("class", "card--text");
  pokemeonAppearances.innerText = "appears in: ".toUpperCase();
  card.append(pokemeonAppearances);

  for (let i = 0; i < pokemon.game_indices.length; i++) {
    const gameHistory = document.createElement("li");
    gameHistory.style.display = "inline";

    gameHistory.innerText =
      // "appears in".toUpperCase() +
      // ": " +
      pokemon.game_indices[i].version.name.toUpperCase() + ", ";

    pokemeonAppearances.append(gameHistory);
  }
}
