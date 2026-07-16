import { testDeck } from '@/features/deck/testDeck';
import type { WordCard } from '@/store/game/game.type';

export function loadCards(): WordCard[] {
    return testDeck;
}
