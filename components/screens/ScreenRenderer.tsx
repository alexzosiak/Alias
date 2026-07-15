'use client';

import { useScreenStore } from '@/store/screen/screen.store';
import { MainScreen } from '@/components/screens/MainScreen/MainScreen';
import { RulesScreen } from '@/components/screens/RulesScreen/RulesScreen';

export function ScreenRenderer() {
    const currentScreen = useScreenStore((state) => state.currentScreen);

    switch (currentScreen) {
        case 'menu':
            return <MainScreen />;

        case 'rules':
            return <RulesScreen />;

        case 'settings':
            return <div>Settings screen</div>;

        case 'game':
            return <div>Game screen</div>;

        case 'result':
            return <div>Result screen</div>;

        default:
            return <MainScreen />;
    }
}
