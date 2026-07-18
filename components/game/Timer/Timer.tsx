'use client';

import { useEffect, useState } from 'react';

import { finishGame } from '@/features/game/finishGame';
import { useGameStore } from '@/store/game/game.store';

function calculateTimeLeft(endsAt: number | null): number {
    if (endsAt === null) {
        return 0;
    }

    const millisecondsLeft = endsAt - Date.now();
    const secondsLeft = Math.ceil(millisecondsLeft / 1000);

    return Math.max(secondsLeft, 0);
}

export function Timer() {
    const endsAt = useGameStore((state) => state.endsAt);
    const status = useGameStore((state) => state.status);
    const hasHydrated = useGameStore((state) => state.hasHydrated);

    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endsAt));

    useEffect(() => {
        if (!hasHydrated || status !== 'playing' || endsAt === null) {
            return;
        }

        const updateTimer = () => {
            const nextTimeLeft = calculateTimeLeft(endsAt);

            setTimeLeft(nextTimeLeft);

            if (nextTimeLeft <= 0) {
                finishGame();
            }
        };

        updateTimer();

        const intervalId = window.setInterval(updateTimer, 1000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [endsAt, status, hasHydrated]);

    if (!hasHydrated) {
        return null;
    }

    return <div>{timeLeft}</div>;
}
