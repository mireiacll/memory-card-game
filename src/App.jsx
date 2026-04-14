import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import { shuffleArray } from "./utils/shuffle";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]); // stores cards
  const [clickedCards, setClickedCards] = useState([]); // tracks cards clicked
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Fetch Pokémon data
  useEffect(() => { // runs when component loads
    fetchPokemon();
  }, []); // ensures it runs only once

  const fetchPokemon = async () => {
    try {
      const ids = Array.from({ length: 12 }, (_, i) => i + 1); // generate pokemons ids
      const promises = ids.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // fetch data from api
          .then((res) => res.json())
      );

      const data = await Promise.all(promises); // extracts data (name and images)

      const formattedData = data.map((pokemon) => ({ // store tyhem in sttae
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      }));

      setCards(shuffleArray(formattedData)); // shuffle cards
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) { // click repeated card
      setScore(0); // reset score score
      setClickedCards([]);
    } else { // click new card
      const newScore = score + 1; // increase score
      setScore(newScore);
      setClickedCards([...clickedCards, id]);

      if (newScore > bestScore) { // best score update
        setBestScore(newScore);
      }
    }

    setCards(shuffleArray(cards)); // every click cards shuffle
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <CardGrid cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;