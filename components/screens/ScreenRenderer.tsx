'use client';

import { useScreenStore } from '@/store/screen/screen.store';
import { MainScreen } from '@/components/screens/MainScreen/MainScreen';
import { RulesScreen } from '@/components/screens/RulesScreen/RulesScreen';
import { ResultScreen } from '@/components/screens/ResultScreen/ResultScreen';
import { GameScreen } from '@/components/screens/GameScreen/GameScreen';
import { SettingScreen } from '@/components/screens/SettingScreen/SettingScreen';

export function ScreenRenderer() {
    const currentScreen = useScreenStore((state) => state.currentScreen);

    switch (currentScreen) {
        case 'menu':
            return <MainScreen />;

        case 'rules':
            return <RulesScreen />;

        case 'settings':
            return <SettingScreen />;

        case 'game':
            return <GameScreen />;

        case 'result':
            return <ResultScreen />;

        default:
            return <MainScreen />;
    }
}
