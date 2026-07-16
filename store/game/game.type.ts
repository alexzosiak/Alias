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
};

export type GameStore = GameState & {
    startGame: (deck: WordCard[]) => void;
    setGameState: (gameState: GameState) => void;
};
