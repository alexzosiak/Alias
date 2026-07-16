'use client';

import { CardView } from '@/components/ui/CardView/CardView';
import { startNewGame } from '@/features/game/startNewGame';
import { useSettingsStore } from '@/store/settings/settings.store';
import { useScreenStore } from '@/store/screen/screen.store';
import type { DeckSize, RoundTime } from '@/store/settings/settings.type';

export function SettingScreen() {
    const { goToMenu } = useScreenStore();
    const { deckSize, roundTime, setDeckSize, setRoundTime } = useSettingsStore();

    return (
        <CardView>
            <h1>Game setup</h1>

            <section>
                <h2>Number of cards</h2>

                {[15, 25, 50].map((size) => (
                    <button
                        key={size}
                        type="button"
                        onClick={() => setDeckSize(size as DeckSize)}
                        disabled={deckSize === size}
                    >
                        {size}
                    </button>
                ))}
            </section>

            <section>
                <h2>Round time</h2>

                {[30, 60, 90].map((time) => (
                    <button
                        key={time}
                        type="button"
                        onClick={() => setRoundTime(time as RoundTime)}
                        disabled={roundTime === time}
                    >
                        {time} sec
                    </button>
                ))}
            </section>

            <button type="button" onClick={startNewGame}>
                Start game
            </button>
            <button type="button" onClick={() => goToMenu()}>
                back
            </button>
        </CardView>
    );
}
