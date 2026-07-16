'use client';

import { useGameStore } from '@/store/game/game.store';
import { useScreenStore } from '@/store/screen/screen.store';
import { CardView} from '@/components/ui/CardView/CardView';
export function ResultScreen() {
    const correctCount = useGameStore((state) => state.correctCount);

    const skippedCount = useGameStore((state) => state.skippedCount);

    const goToMenu = useScreenStore((state) => state.goToMenu);

    return (
        <CardView>
            <h1>Game result</h1>

            <p>Correct answers: {correctCount}</p>
            <p>Skipped cards: {skippedCount}</p>

            <button onClick={goToMenu}>Back to menu</button>
        </CardView>
    );
}
