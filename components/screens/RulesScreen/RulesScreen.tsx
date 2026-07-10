'use client';

import { Button } from '@/components/ui/Button/Button';
import { useScreenStore } from '@/store/screen/screen.store';
import styles from './RulesScreen.module.scss';

export function RulesScreen() {
    const goToSetup = useScreenStore((state) => state.goToSetup);
    const goToRules = useScreenStore((state) => state.goToRules);
    const goToSettings = useScreenStore((state) => state.goToSettings);

    return (
        <main className={styles.container}>
            <section className={styles.menu}>
                <h1 className={styles.title}>RULES</h1>

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

                </div>
            </section>
        </main>
    );
}