import { create } from 'zustand';
import type { GameSettingsState } from './settings.type';

export const useSettingsStore = create<GameSettingsState>((set) => ({
    deckSize: 15,
    roundTime: 30,

    setDeckSize: (deckSize) => {
        set({ deckSize });
    },

    setRoundTime: (roundTime) => {
        set({ roundTime });
    },
}));
