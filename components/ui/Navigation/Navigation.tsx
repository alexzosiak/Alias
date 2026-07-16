import { Button } from '@/components/ui/Button/Button';
import { useScreenStore } from '@/store/screen/screen.store';
import styles from './Navigation.module.scss';  
import { startNewGame } from '@/features/game/startNewGame';

export const Navigation = () => {
    const {goToRules, goToSettings} = useScreenStore();

    return (
        <div className={styles.actions}>
            <Button onClick={() => startNewGame()}>Start game</Button>
            <Button onClick={() => goToRules()}>Rules</Button>
            <Button onClick={() => goToSettings()}>Settings</Button>
        </div>
    );
}