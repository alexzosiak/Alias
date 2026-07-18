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
            endsAt: null,
            hasHydrated: false,

            setHasHydrated: (hasHydrated) => {
                set({ hasHydrated });
            },

            startGame: (deck, roundTime) => {
                const endsAt = Date.now() + roundTime * 1000;
                set({
                    status: 'playing',
                    deck,
                    currentCardIndex: 0,
                    correctCount: 0,
                    skippedCount: 0,
                    endsAt,
                });
            },

            setGameState: (gameState: GameState) => {
                set(gameState);
            },
        }),
        {
            name: 'alias-game',

            partialize: (state) => ({
                status: state.status,
                deck: state.deck,
                currentCardIndex: state.currentCardIndex,
                correctCount: state.correctCount,
                skippedCount: state.skippedCount,
                endsAt: state.endsAt,
            }),

            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        },
    ),
);
