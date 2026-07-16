import { create } from 'zustand';
import type { GameSettingsState } from './settings.type';

export const useSettingsStore = create<GameSettingsState>((set) => ({
    deckSize: 5,

    setDeckSize: (deckSize) => {
        set({ deckSize });
    },
}));
