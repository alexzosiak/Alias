export type GameStatus = 'idle' | 'playing' | 'finished';

export type WordCard = {
    id: string;
    word: string;
    image: string;
};

export type GameStore = {
    status: GameStatus;
    deck: WordCard[];
    currentCardIndex: number;
    correctCount: number;
    skippedCount: number;

    startGame: (deck: WordCard[]) => void;
    correctAnswer: () => void;
    skipAnswer: () => void;
};
