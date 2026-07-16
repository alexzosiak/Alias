export type Screen =
    | 'menu'
    | 'rules'
    | 'settings'
    | 'game'
    | 'result';

export type ScreenStore = {
    currentScreen: Screen;
    hasHydrated: boolean;

    setScreen: (screen: Screen) => void;
    setHasHydrated: (value: boolean) => void;

    goToMenu: () => void;
    goToRules: () => void;
    goToSettings: () => void;
    goToGame: () => void;
    goToResult: () => void;
};
