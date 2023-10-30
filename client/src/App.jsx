import { useState } from "react"
import NewGameForm from "./NewGameForm"
import Game from "./Game";


function App() {
  const [playing, setPlaying] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);

  async function handleSubmit(gameData) {
    setCurrentGame(await (await fetch('/api/game', { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(gameData)
    })).json());
    setPlaying(true);
  }

  return (
    <>
      {playing ? 
        <Game game={currentGame}/> 
        : 
        <NewGameForm onSubmit={handleSubmit} />
      }
    </>
  )
}

export default App
