import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { GameSettingsState } from './settings.type';

export const useSettingsStore = create<GameSettingsState>()(
    persist(
        (set) => ({
            deckSize: 15,
            roundTime: 30,

            hasHydrated: false,

            setHasHydrated: (hasHydrated) => {
                set({ hasHydrated });
            },

            setDeckSize: (deckSize) => {
                set({ deckSize });
            },

            setRoundTime: (roundTime) => {
                set({ roundTime });
            },
        }),
        {
            name: 'alias-settings',

            partialize: (state) => ({
                deckSize: state.deckSize,
                roundTime: state.roundTime,
            }),

            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        },
    ),
);
