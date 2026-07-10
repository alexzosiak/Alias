'use client';

import { Button } from '@/components/ui/Button/Button';
import { useScreenStore } from '@/store/screen/screen.store';
import styles from './MainScreen.module.scss';

export function MainScreen() {
    const goToSetup = useScreenStore((state) => state.goToSetup);
    const goToRules = useScreenStore((state) => state.goToRules);
    const goToSettings = useScreenStore((state) => state.goToSettings);

    return (
        <main className={styles.container}>
            <section className={styles.menu}>
                <h1 className={styles.title}>Alias</h1>

                <div className={styles.actions}>
                    <Button onClick={() => goToSetup()}>
                        Start game
                    </Button>

                    <Button onClick={() => goToRules()}>
                        Rules
                    </Button>

                    <Button onClick={() => goToSettings()}>
                        Settings
                    </Button>

                    <Button onClick={() => goToStatistics()}>
                        Statistics
                    </Button>
                </div>
            </section>
        </main>
    );
}
