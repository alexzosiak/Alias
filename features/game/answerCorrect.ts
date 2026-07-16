import { answerCard } from './answerCard';
import { useGameStore } from '@/store/game/game.store';
import { useScreenStore } from "@/store/screen/screen.store";

export function answerCorrect(): void {
    const store = useGameStore.getState();

    const nextState = answerCard(store, 'correct');

    store.setGameState(nextState);

    if (nextState.status === "finished") {
        useScreenStore.getState().goToResult();
    }
}
