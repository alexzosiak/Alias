'use client';

import { useEffect, useState } from 'react';
import { useSettingsStore } from '@/store/settings/settings.store';
import { finishGame } from '@/features/game/finishGame';

export const Timer = () => {
    const { roundTime } = useSettingsStore();
    const [secondsLeft, setSecondsLeft] = useState<number>(roundTime);

    useEffect(() => {
        const timerId = window.setInterval(() => {
            setSecondsLeft((currentSeconds) => {
                if (currentSeconds <= 1) {
                    window.clearInterval(timerId);
                    return 0;
                }

                return currentSeconds - 1;
            });
        }, 1000);

        return () => {
            window.clearInterval(timerId);
        };
    }, []);

    useEffect(() => {
        if (secondsLeft === 0) {
            finishGame();
        }
    }, [secondsLeft]);

    return <div>Time: {secondsLeft}</div>;
}
