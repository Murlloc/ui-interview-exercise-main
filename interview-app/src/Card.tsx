import type { Character, StatKey } from "./images";

const CARD_ITENS = [
  { key: "health", label: "Health" },
  { key: "attack", label: "Attack" },
  { key: "defense", label: "Defense" },
] as const satisfies readonly { key: StatKey; label: string }[];

export function Card({character, onIncrement, onDecrement, onRemove}: {
    character: Character;
    onIncrement: (stat: StatKey) => void;
    onDecrement: (stat: StatKey) => void;
    onRemove: () => void;
}, ){
    return(
        <article className="card">
        
        <button
        type="button"
        className="card__remove"
        onClick={() => onRemove()}
        aria-label="Remove character"
        >
            ×
        </button>

        <div className="card__image"
            style={{backgroundImage: `url(${character.image.url})`}}
        />

        <div className="card__body">
            {CARD_ITENS.map((item) => (
            <div className="card-item" key={item.key}>
                <span className="card-item__label">{item.label}</span>
                <span className="card-item__value">{character[item.key]}</span>
                <button
                    type="button"
                    className="btn btn--decrement"
                    onClick={() => onDecrement(item.key)}
                    aria-label={`Decrease ${item.label}`}
                    >
                    −
                    </button>
                    <button
                    type="button"
                    className="btn btn--increment"
                    onClick={() => onIncrement(item.key)}
                    aria-label={`Increase ${item.label}`}
                    >
                    +
                </button>
            </div>
            ))}
        </div>
        </article>
    );
}