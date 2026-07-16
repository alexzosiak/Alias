import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { GameState, GameStore } from './game.type';

export const useGameStore = create<GameStore>()(
    persist(
        (set) => ({
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
                    correctCount: 0,
                    skippedCount: 0,
                });
            },

            setGameState: (gameState: GameState) => {
                set(gameState);
            },
        }),
        {
            name: 'alias-game',
        },
    ),
);
