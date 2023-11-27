import React, { useEffect, useState } from "react";
import createMap from "../utils/createMap.tsx";

export default function Game() {
  const [gameMap, setGameMap] = useState<(string | undefined)[][]>([]);
  useEffect(() => {
    setGameMap(createMap(10, 10));
  }, []);

  return (
    <>
      <h1>Game </h1>
      <div style={{ fontFamily: "Courier New, monospace" }}>
        {gameMap.map((row, i) => (
          <div key={i}>{row.join(" ")}</div>
        ))}
      </div>
    </>
  );
}
