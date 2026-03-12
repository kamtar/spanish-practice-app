import type { WordEntry } from "../data/phrases";
import "./PhraseCard.css";

interface Props {
  words: WordEntry[];
}

const PUNCTUATION = new Set(["?", "!", ".", ",", ";"]);

export default function PhraseCard({ words }: Props) {
  return (
    <p className="phrase-card__sentence" aria-label="Spanish sentence">
      {words.map((entry, i) => {
        const isPunct = PUNCTUATION.has(entry.word);
        return (
          <span
            key={i}
            className={`phrase-card__token${isPunct ? " phrase-card__token--punct" : ""}`}
          >
            {entry.base ? (
              <span className="phrase-card__word-group">
                <span className="phrase-card__inflected">{entry.word}</span>
                <span className="phrase-card__base" aria-label={`base form: ${entry.base}`}>
                  {entry.base}
                </span>
              </span>
            ) : (
              <span className="phrase-card__plain">{entry.word}</span>
            )}
          </span>
        );
      })}
    </p>
  );
}
