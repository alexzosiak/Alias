'use client';

import Image from 'next/image';
import { CardView } from '@/components/ui/CardView/CardView';
import { useGameStore } from '@/store/game/game.store';

export function GameScreen() {
    const deck = useGameStore((state) => state.deck);
    const currentCardIndex = useGameStore((state) => state.currentCardIndex);

    const currentCard = deck[currentCardIndex];

    const correctAnswer = useGameStore((state) => state.correctAnswer);
    const skipAnswer = useGameStore((state) => state.skipAnswer);

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

            <Image
                src={currentCard.image}
                alt={currentCard.word}
                width={300}
                height={300}
            />

            <h2>{currentCard.word}</h2>

            <button onClick={correctAnswer}>Correct</button>
            <button onClick={skipAnswer}>Skip</button>
        </CardView>
    );
}
