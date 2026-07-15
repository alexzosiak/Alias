import { Button } from '@/components/ui/Button/Button';
import { useScreenStore } from '@/store/screen/screen.store';
import styles from './Navigation.module.scss';  

export const Navigation = () => {
    const {goToGame, goToRules, goToSettings} = useScreenStore();

    return (
        <div className={styles.actions}>
            <Button onClick={() => goToGame()}>Start game</Button>
            <Button onClick={() => goToRules()}>Rules</Button>
            <Button onClick={() => goToSettings()}>Settings</Button>
        </div>
    );
}