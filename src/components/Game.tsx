import React, { useEffect, useState } from "react";
import createMap from "../utils/createMap.tsx";

export default function Game() {
  const [gameMap, setGameMap] = useState<(string | undefined)[][]>([]);
  useEffect(() => {
    setGameMap(createMap(10, 10));
    console.log(gameMap);
  }, []);

  return (
    <>
      <h1>Game </h1>
      {gameMap.map((row) => (
        <div>{row.join(" ")}</div>
      ))}
    </>
  );
}
