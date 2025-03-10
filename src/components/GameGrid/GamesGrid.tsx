import { useEffect, useState } from "react";
import Games from "../../backend/games/games1.json";
import GameImage from "./GameImage";
import "../../styles/GameGrid.css";

export interface GameData {
  id: number;
  name: string;
  image: string;
  rating: number;
}

interface Props {
  isDark: boolean;
}

const GamesGrid = ({ isDark }: Props) => {
  const [game, setGame] = useState<GameData[]>([]);

  useEffect(() => {
    const newGames: GameData[] = [];

    Games.results.map((it) => {
      newGames.push({
        id: it.id,
        name: it.name,
        image: it.background_image,
        rating: it.rating,
      });
    });

    setGame(newGames);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-4 mt-2 full-height-scroll">
      {game.map((item) => (
        <div className="col mb-3">
          <div
            className={`card game-card shadow mb-5 rounded ${
              !isDark ? "bg-dark text-white" : "bg-light text-dark"
            }`}
            style={{ border: "none" }}
          >
            <GameImage image={item.image} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesGrid;
