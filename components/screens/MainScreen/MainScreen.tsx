'use client';

import { CardView } from '@/components/ui/CardView/CardView';
import { Navigation } from '@/components/ui/Navigation/Navigation';
import styles from './MainScreen.module.scss';

export function MainScreen() {

    return (
        
        <CardView>
                <h1 className={styles.title}>Alias</h1>
                <Navigation />
        </CardView>
    );
}
