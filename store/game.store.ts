import { create } from 'zustand';
import type { DeckCategory, GameScreen, GameSettings, GameStatus, Team, WordCard,} from '@/types/game.types';

type GameStore = {
    screen: GameScreen;
    status: GameStatus;

    settings: GameSettings;

    teams: Team[];
    currentTeamIndex: number;

    deck: WordCard[];
    currentWordIndex: number;

    setScreen: (screen: GameScreen) => void;
    setCategory: (category: DeckCategory) => void;
    setDeckSize: (deckSize: GameSettings['deckSize']) => void;
    setRoundTime: (roundTime: GameSettings['roundTime']) => void;
    setTeamsCount: (teamsCount: GameSettings['teamsCount']) => void;
};

export const useGameStore = create<GameStore>((set) => ({
    screen: 'menu',
    status: 'idle',

    settings: {
        category: 'animals',
        deckSize: 25,
        roundTime: 60,
        teamsCount: 2,
    },

    teams: [],
    currentTeamIndex: 0,

    deck: [],
    currentWordIndex: 0,

    setScreen: (screen) => set({ screen }),

    setCategory: (category) =>
        set((state) => ({
            settings: {
                ...state.settings,
                category,
            },
        })),

    setDeckSize: (deckSize) =>
        set((state) => ({
            settings: {
                ...state.settings,
                deckSize,
            },
        })),

    setRoundTime: (roundTime) =>
        set((state) => ({
            settings: {
                ...state.settings,
                roundTime,
            },
        })),

    setTeamsCount: (teamsCount) =>
        set((state) => ({
            settings: {
                ...state.settings,
                teamsCount,
            },
        })),
}));
