export type GameStatus = 'idle' | 'playing' | 'finished';

export type WordCard = {
    id: string;
    word: string;
    image: string;
};

export type GameState = {
    status: GameStatus;
    deck: WordCard[];
    currentCardIndex: number;
    correctCount: number;
    skippedCount: number;
    endsAt: number | null;
};

export type GameStore = GameState & {
    hasHydrated: boolean;
    setHasHydrated: (value: boolean) => void;
    startGame: (deck: WordCard[], roundTime: number) => void;
    setGameState: (gameState: GameState) => void;
};
