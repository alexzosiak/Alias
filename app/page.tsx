'use client';

import { Background } from '@/components/game/Background/Background';
import { MainMenu } from '@/components/game/MainMenu/MainMenu';
import { useGameStore } from '@/store/game.store';

export default function HomePage() {
    const screen = useGameStore((state) => state.screen);

    return (
        <>
            
            
                {/* <Background /> */}
         
            {/* {screen === 'menu' && <MainMenu />}
            {screen === 'setup' && <div>Game setup screen</div>}
            {screen === 'game' && <div>Game screen</div>} */}
        </>
    );
}
