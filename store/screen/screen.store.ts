import { create } from 'zustand';
import type { ScreenStore, Screen } from './screen.types';

export const useScreenStore = create<ScreenStore>((set) => ({
    currentScreen: 'menu',

    setScreen: (screen: Screen) => {
        set({
            currentScreen: screen,
        });
    },

    goToMenu: () => {
        set({
            currentScreen: 'menu',
        });
    },

    goToRules: () => {
        set({
            currentScreen: 'rules',
        });
    },

    goToSettings: () => {
        set({
            currentScreen: 'settings',
        });
    },

    goToGame: () => {
        set({
            currentScreen: 'game',
        });
    },

    goToResult: () => {
        set({
            currentScreen: 'result',
        });
    },
}));
