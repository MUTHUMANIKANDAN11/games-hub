import { useEffect, useState } from "react";
import Games from "../../backend/games/games1.json";
import GameImage from "./GameImage";
import "../../styles/GameGrid.css";
import Icons from "./Icons";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface GameData {
  id: number;
  name: string;
  image: string;
  rating: number;
  platforms: platform[];
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
        platforms: it.platforms.map((plat) => ({
          id: plat.platform.id,
          name: plat.platform.name,
          slug: plat.platform.slug,
        })),
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
            <div className="card-body text-start">
              <h3 className="card-title">{item.name}</h3>
              <Icons platforms={item.platforms}></Icons>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesGrid;
