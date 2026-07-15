import { create } from 'zustand';

import {
    answerCurrentCard,
    createInitialGameState,
    finishGame,
    resetGame,
} from '@/features/game/game.logic';

import type { GameState, WordCard } from '@/types/game.types';

type GameStore = {
    game: GameState;

    startGame: (deck: WordCard[]) => void;
    correctAnswer: () => void;
    skipAnswer: () => void;
    finish: () => void;
    reset: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
    game: resetGame(),

    startGame: (deck) => {
        set({
            game: createInitialGameState(deck),
        });
    },

    correctAnswer: () => {
        set((state) => ({
            game: answerCurrentCard(state.game, 'correct'),
        }));
    },

    skipAnswer: () => {
        set((state) => ({
            game: answerCurrentCard(state.game, 'skipped'),
        }));
    },

    finish: () => {
        set((state) => ({
            game: finishGame(state.game),
        }));
    },

    reset: () => {
        set({
            game: resetGame(),
        });
    },
}));
