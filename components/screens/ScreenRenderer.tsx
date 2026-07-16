'use client';

import { useScreenStore } from "@/store/screen/screen.store";

import { MainScreen } from '@/components/screens/MainScreen/MainScreen';
import { RulesScreen } from '@/components/screens/RulesScreen/RulesScreen';
import { SettingScreen } from '@/components/screens/SettingScreen/SettingScreen';
import { GameScreen } from '@/components/screens/GameScreen/GameScreen';
import { ResultScreen } from '@/components/screens/ResultScreen/ResultScreen';

export function ScreenRenderer() {
    const currentScreen = useScreenStore((state) => state.currentScreen);

    const hasHydrated = useScreenStore((state) => state.hasHydrated);

    if (!hasHydrated) {
        return null;
    }

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
