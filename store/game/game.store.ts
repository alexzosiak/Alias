import { create } from 'zustand';

import type { GameStore } from './game.type';

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

    correctAnswer: () => {
        set((state) => ({
            correctCount: state.correctCount + 1,
            currentCardIndex: state.currentCardIndex + 1,
        }));
    },

    skipAnswer: () => {
        set((state) => ({
            skippedCount: state.skippedCount + 1,
            currentCardIndex: state.currentCardIndex + 1,
        }));
    },
}));
