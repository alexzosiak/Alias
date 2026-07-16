import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ScreenStore } from './screen.type';

export const useScreenStore = create<ScreenStore>()(
    persist(
        (set) => ({
            currentScreen: 'menu',
            hasHydrated: false,

            setScreen: (currentScreen) => {
                set({ currentScreen });
            },

            setHasHydrated: (hasHydrated) => {
                set({ hasHydrated });
            },

            goToMenu: () => set({ currentScreen: 'menu' }),
            goToRules: () => set({ currentScreen: 'rules' }),
            goToSettings: () => set({ currentScreen: 'settings' }),
            goToGame: () => set({ currentScreen: 'game' }),
            goToResult: () => set({ currentScreen: 'result' }),
        }),
        {
            name: 'alias-screen',

            partialize: (state) => ({
                currentScreen: state.currentScreen,
            }),

            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        },
    ),
);
