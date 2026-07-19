'use client';

import { CardView } from '@/components/ui/CardView/CardView';
import { startNewGame } from '@/features/game/startNewGame';
import { useSettingsStore } from '@/store/settings/settings.store';
import { useScreenStore } from '@/store/screen/screen.store';
import type { DeckSize, RoundTime } from '@/store/settings/settings.type';
import { Button } from '@/components/ui/Button/Button';
import styles from './SettingScreen.module.scss'

export function SettingScreen() {
    const { goToMenu } = useScreenStore();
    const { deckSize, roundTime, setDeckSize, setRoundTime } =
        useSettingsStore();

    return (
        <CardView>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Game setup</h1>
                    <p className={styles.subtitle}>Pick your round vibe</p>
                </header>

                <section className={styles.optionGroup}>
                    <h2 className={styles.groupTitle}>Number of cards</h2>

                    <div className={styles.options}>
                        {[15, 25, 50].map((size) => (
                            <button
                                key={size}
                                type="button"
                                className={styles.option}
                                onClick={() => setDeckSize(size as DeckSize)}
                                disabled={deckSize === size}
                                aria-pressed={deckSize === size}
                            >
                                <span className={styles.optionValue}>{size}</span>
                                <span className={styles.optionLabel}>cards</span>
                            </button>
                        ))}
                    </div>
                </section>

                <section className={styles.optionGroup}>
                    <h2 className={styles.groupTitle}>Round time</h2>

                    <div className={styles.options}>
                        {[30, 60, 90].map((time) => (
                            <button
                                key={time}
                                type="button"
                                className={styles.option}
                                onClick={() => setRoundTime(time as RoundTime)}
                                disabled={roundTime === time}
                                aria-pressed={roundTime === time}
                            >
                                <span className={styles.optionValue}>{time}</span>
                                <span className={styles.optionLabel}>sec</span>
                            </button>
                        ))}
                    </div>
                </section>

                <div className={styles.actions}>
                    <Button
                        type="button"
                        className={styles.startButton}
                        onClick={startNewGame}
                    >
                        Start game
                    </Button>
                    <Button
                        type="button"
                        className={styles.backButton}
                        onClick={() => goToMenu()}
                    >
                        Back
                    </Button>
                </div>
            </div>
        </CardView>
    );
}
