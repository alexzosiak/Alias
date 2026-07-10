export type Screen =
    | 'menu'
    | 'setup'
    | 'rules'
    | 'settings'
    | 'game'
    | 'roundResult'
    | 'gameResult';

export type ScreenStore = {
    currentScreen: Screen;

    setScreen: (screen: Screen) => void;

    goToMenu: () => void;
    goToSetup: () => void;
    goToRules: () => void;
    goToSettings: () => void;
    goToGame: () => void;
};
