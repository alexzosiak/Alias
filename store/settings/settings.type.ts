export type DeckSize = 5 | 25 | 50;

export type GameSettingsState = {
    deckSize: DeckSize;
    setDeckSize: (size: DeckSize) => void;
};
