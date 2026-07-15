import type {
  AnswerStatus,
  GameState,
  WordCard,
} from "@/types/game.types";

export function createInitialGameState(deck: WordCard[]): GameState {
  return {
    deck,
    currentCardIndex: 0,
    score: 0,
    answeredCards: [],
    status: "playing",
  };
}

export function answerCurrentCard(
  state: GameState,
  answerStatus: AnswerStatus,
): GameState {
  const currentCard = state.deck[state.currentCardIndex];

  if (!currentCard || state.status !== "playing") {
    return state;
  }

  const nextCardIndex = state.currentCardIndex + 1;
  const isDeckFinished = nextCardIndex >= state.deck.length;

  return {
    ...state,

    score:
      answerStatus === "correct"
        ? state.score + 1
        : state.score,

    answeredCards: [
      ...state.answeredCards,
      {
        card: currentCard,
        status: answerStatus,
      },
    ],

    currentCardIndex: nextCardIndex,
    status: isDeckFinished ? "finished" : "playing",
  };
}

export function finishGame(state: GameState): GameState {
  return {
    ...state,
    status: "finished",
  };
}

export function resetGame(): GameState {
  return {
    deck: [],
    currentCardIndex: 0,
    score: 0,
    answeredCards: [],
    status: "idle",
  };
}