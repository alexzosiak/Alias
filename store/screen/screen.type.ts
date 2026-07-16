export type Screen = 'menu' | 'rules' | 'settings' | 'game' | 'result';

export type ScreenStore = {
    currentScreen: Screen;

    setScreen: (screen: Screen) => void;

    goToMenu: () => void;
    goToRules: () => void;
    goToSettings: () => void;
    goToGame: () => void;
    goToResult: () => void;
};
