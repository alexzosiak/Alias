export type GameScreen =
    | 'menu'
    | 'setup'
    | 'game'
    | 'roundResult'
    | 'gameResult';

export type DeckCategory = 'animals' | 'food' | 'movies' | 'sport';

export type GameStatus = 'idle' | 'playing' | 'paused' | 'finished';

export type Team = {
    id: string;
    name: string;
    score: number;
};

export type WordCard = {
    id: string;
    word: string;
    category: DeckCategory;
};

export type GameSettings = {
    category: DeckCategory;
    deckSize: 15 | 25 | 50;
    roundTime: 30 | 60 | 90;
    teamsCount: 2 | 3 | 4;
};
