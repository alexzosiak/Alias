export type DeckSize = 15 | 25 | 50;
export type RoundTime = 30 | 60 | 90;

export type GameSettingsState = {
    deckSize: DeckSize;
    roundTime: RoundTime;

    hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
    
    setDeckSize: (size: DeckSize) => void;
    setRoundTime: (time: RoundTime) => void;
};
