import { prepareDeck } from '@/features/deck/prepareDeck';
import { loadCards } from '@/features/cards/loadCards';
import { useGameStore } from '@/store/game/game.store';
import { useScreenStore } from '@/store/screen/screen.store';
import { useSettingsStore } from '@/store/settings/settings.store';

export function startNewGame(): void {
    const deckSize = useSettingsStore.getState().deckSize;

    const allCards = loadCards();
    const preparedDeck = prepareDeck(allCards, deckSize);

    useGameStore.getState().startGame(preparedDeck);
    useScreenStore.getState().goToGame();
}
