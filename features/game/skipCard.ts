import { answerCard } from './answerCard';
import { useGameStore } from '@/store/game/game.store';
import { useScreenStore } from "@/store/screen/screen.store";

export function skipCard(): void {
    const store = useGameStore.getState();

    const nextState = answerCard(store, 'skipped');

    store.setGameState(nextState);

    if (nextState.status === "finished") {
        useScreenStore.getState().goToResult();
    }
}
