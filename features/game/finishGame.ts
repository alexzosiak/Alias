import { useGameStore } from '@/store/game/game.store';
import { useScreenStore } from '@/store/screen/screen.store';

export function finishGame(): void {
    const store = useGameStore.getState();

    store.setGameState({
        status: 'finished',
        deck: store.deck,
        currentCardIndex: store.currentCardIndex,
        correctCount: store.correctCount,
        skippedCount: store.skippedCount,
        endsAt: null,
    });

    useScreenStore.getState().goToResult();
}
