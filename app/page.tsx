'use client';

import { MainScreen } from '@/components/screens/MainScreen/MainScreen';
import { RulesScreen } from '@/components/screens/RulesScreen/RulesScreen';
import { useScreenStore } from '@/store/screen/screen.store';

export default function HomePage() {
    const screen = useScreenStore((state) => state.currentScreen);

    return (
        <>
            {screen === 'menu' && <MainScreen />}
            {screen === 'setup' && <div>Game setup</div>}
            {screen === 'rules' && <RulesScreen/>}
            {screen === 'settings' && <div>Settings</div>}
            {screen === 'game' && <div>Game</div>}
        </>
    );
}
