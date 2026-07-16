import { create } from 'zustand';

import type { GameStore, GameState } from './game.type';

export const useGameStore = create<GameStore>((set) => ({
    status: 'idle',
    deck: [],
    currentCardIndex: 0,
    correctCount: 0,
    skippedCount: 0,

    startGame: (deck) => {
        set({
            status: 'playing',
            deck,
            currentCardIndex: 0,
            skippedCount: 0,
            correctCount: 0,
        });
    },

    setGameState: (gameState: GameState) => {
        set(gameState);
    },
}));
