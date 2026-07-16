'use client';

import { ScreenRenderer } from '@/components/screens/ScreenRenderer';
import { prepareDeck } from '@/features/deck/prepareDeck';
import { testDeck } from '@/features/deck/testDeck';

export default function HomePage() {

    const preparedDeck = prepareDeck(testDeck, 5);

    console.log(preparedDeck);

    return (
        <>
            <ScreenRenderer />
        </>
    );
}
