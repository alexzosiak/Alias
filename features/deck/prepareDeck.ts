import type { WordCard } from '@/store/game/game.type';
import type { DeckSize } from '@/store/settings/settings.type';

export function prepareDeck(
    allCards: WordCard[],
    deckSize: DeckSize,
): WordCard[] {
    const shuffledCards = [...allCards].sort(() => Math.random() - 0.5);

    return shuffledCards.slice(0, deckSize);
}
