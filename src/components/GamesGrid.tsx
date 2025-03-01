import { useEffect, useState } from "react";
import Games from "../backend/games/games1.json";

interface gameData {
  id: number;
  name: string;
}

const GamesGrid = () => {
  const [game, setGame] = useState<gameData[]>([]);

  useEffect(() => {
    const newGames: gameData[] = [];

    Games.results.map((it) => {
      newGames.push({ id: it.id, name: it.name });
    });

    setGame(newGames);
  }, []);

  return (
    <ul>
      {game.map((it) => (
        <li>
          {it.id} {it.name}
        </li>
      ))}
    </ul>
  );
};

export default GamesGrid;
