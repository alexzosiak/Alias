import type { GameState, GameStatus } from '@/store/game/game.type';

export type AnswerType = 'correct' | 'skipped';

export function answerCard(
    state: GameState,
    answerType: AnswerType,
): GameState {
    if (state.status !== 'playing') {
        return state;
    }

    const nextCardIndex = state.currentCardIndex + 1;
    const isLastCard = nextCardIndex >= state.deck.length;

    const nextStatus: GameStatus = isLastCard ? 'finished' : 'playing';

    return {
        ...state,
        currentCardIndex: nextCardIndex,
        correctCount:
            answerType === 'correct'
                ? state.correctCount + 1
                : state.correctCount,
        skippedCount:
            answerType === 'skipped'
                ? state.skippedCount + 1
                : state.skippedCount,
        status: nextStatus,
    };
}
