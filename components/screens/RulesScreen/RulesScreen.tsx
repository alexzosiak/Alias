'use client';

import { CardView } from '@/components/ui/CardView/CardView';
import { useScreenStore } from "@/store/screen/screen.store";

import styles from './RulesScreen.module.scss';

export function RulesScreen() {
    const goToMenu = useScreenStore((state) => state.goToMenu);

    return (
        <CardView>
            <h1 className={styles.title}>RULES</h1>

            <p className={styles.text}>
                The game is played in teams. Each team takes turns to have one player describe a word or phrase to their teammates without using the word itself or any part of it. The goal is for the team to guess as many words as possible within a time limit. The team with the most correct guesses wins the game.
            </p>

            <button className={styles.button} onClick={() => goToMenu()}>Back</button>
        </CardView>
    );
}
