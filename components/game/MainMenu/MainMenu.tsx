"use client";

import { useGameStore } from "@/store/game.store";

export function MainMenu() {
  const setScreen = useGameStore((state) => state.setScreen);

  return (
    <main>
      <h1>Alias</h1>

      <button onClick={() => setScreen("setup")}>
        Start Game
      </button>

      <button>
        Rules
      </button>
    </main>
  );
}