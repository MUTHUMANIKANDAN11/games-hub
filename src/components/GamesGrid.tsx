import { useEffect, useState } from "react";
import Games from "../backend/games/games1.json";
import GameImage from "./GameImage";

export interface GameData {
  id: number;
  name: string;
  image: string;
  rating: number;
}

const GamesGrid = () => {
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
    <div className="row row-cols-4 p-0">
      {game.map((item) => (
        <div className="col">
          <div className="card p-0" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesGrid;
