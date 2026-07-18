'use client';

import Image from 'next/image';
import { CardView } from '@/components/ui/CardView/CardView';
import { useGameStore } from '@/store/game/game.store';
import { answerCorrect } from '@/features/game/answerCorrect';
import { skipCard } from '@/features/game/skipCard';
import { Timer } from '@/components/game/Timer/Timer';

export function GameScreen() {
    const deck = useGameStore((state) => state.deck);
    const currentCardIndex = useGameStore((state) => state.currentCardIndex);

    const currentCard = deck[currentCardIndex];

    if (!currentCard) {
        return (
            <CardView>
                <p>Card not found</p>
            </CardView>
        );
    }

    return (
        <CardView>
            <h1>Game</h1>
            <Timer/>

            <Image
                src={currentCard.image}
                alt={currentCard.word}
                width={300}
                height={300}
                loading="eager"
            />

            <h2>{currentCard.word}</h2>

            <button onClick={answerCorrect}>Correct</button>
            <button onClick={skipCard}>Skip</button>
        </CardView>
    );
}
