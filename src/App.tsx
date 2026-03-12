import { useState, useCallback, useMemo, useRef } from "react";
import phrases from "./data/phrases";
import PhraseCard from "./components/PhraseCard";
import { useExcluded } from "./hooks/useExcluded";
import "./App.css";

type Mode = "copy-spanish" | "translate-to-spanish";

function pickRandom(available: number[]): number {
  return available[Math.floor(Math.random() * available.length)];
}

function buildSentenceString(phrase: (typeof phrases)[0]): string {
  const PUNCT = new Set(["?", "!", ".", ","]);
  return phrase.spanish
    .map((w, i) => {
      if (i === 0) return w.word;
      if (PUNCT.has(w.word)) return w.word;
      return " " + w.word;
    })
    .join("");
}

export default function App() {
  const { excluded, excludePhrase, resetExcluded } = useExcluded();

  const available = useMemo(
    () => phrases.filter((p) => !excluded.has(p.id)).map((p) => p.id),
    [excluded]
  );

  const [currentId, setCurrentId] = useState<number>(() =>
    pickRandom(phrases.map((p) => p.id))
  );
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [mode, setMode] = useState<Mode>("copy-spanish");

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const currentPhrase = useMemo(
    () => phrases.find((p) => p.id === currentId) ?? phrases[0],
    [currentId]
  );

  const goNext = useCallback(() => {
    if (available.length === 0) return;
    let nextId = pickRandom(available);
    if (available.length > 1) {
      while (nextId === currentId) {
        nextId = pickRandom(available);
      }
    }
    setCurrentId(nextId);
    setInputValue("");
    setResult(null);
    setShowTranslation(false);
    inputRef.current?.focus();
  }, [available, currentId]);

  const handleExclude = useCallback(() => {
    // Build the new available list without the current phrase
    const remaining = available.filter((id) => id !== currentId);
    // Move to next before excluding so the card transitions immediately
    if (remaining.length > 0) {
      const nextId = remaining[Math.floor(Math.random() * remaining.length)];
      setCurrentId(nextId);
      setInputValue("");
      setResult(null);
      setShowTranslation(false);
    }
    excludePhrase(currentId);
  }, [available, currentId, excludePhrase]);

  const handleCheck = useCallback(() => {
    const answer = inputValue.trim();
    const correct = buildSentenceString(currentPhrase).trim();
    if (answer === correct) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
  }, [inputValue, currentPhrase]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (result === null) {
        handleCheck();
      } else {
        goNext();
      }
    }
  };

  const noPhrasesLeft = available.length === 0;

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">🇪🇸 Spanish Practice</h1>
        <div className="app__controls">
          <label className="app__toggle" title="Practice mode">
            <span>Mode:</span>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as Mode)}
              className="app__select"
            >
              <option value="copy-spanish">Copy Spanish</option>
              <option value="translate-to-spanish">Translate to Spanish</option>
            </select>
          </label>
          {excluded.size > 0 && (
            <button
              className="app__btn app__btn--ghost"
              onClick={resetExcluded}
              title={`Reset ${excluded.size} excluded card(s)`}
            >
              ↺ Reset ({excluded.size} excluded)
            </button>
          )}
        </div>
      </header>

      <main className="app__main">
        {noPhrasesLeft ? (
          <div className="app__empty">
            <p>🎉 You&apos;ve excluded all cards!</p>
            <button className="app__btn app__btn--primary" onClick={resetExcluded}>
              Reset and start over
            </button>
          </div>
        ) : (
          <div className="app__card">
            <p className="app__progress">
              {available.length} card{available.length !== 1 ? "s" : ""} remaining
            </p>

            <div className="app__phrase-area">
              <PhraseCard words={currentPhrase.spanish} />
            </div>

            <div className="app__translation-row">
              <button
                className="app__btn app__btn--ghost app__btn--small"
                onClick={() => setShowTranslation((v) => !v)}
              >
                {showTranslation ? "Hide" : "Show"} translation
              </button>
              {showTranslation && (
                <span className="app__translation">{currentPhrase.english}</span>
              )}
            </div>

            <div className="app__input-area">
              <label className="app__input-label" htmlFor="answer-input">
                {mode === "copy-spanish"
                  ? "Type the sentence exactly as written:"
                  : "Translate to Spanish:"}
              </label>
              {mode === "translate-to-spanish" && (
                <p className="app__english-prompt">{currentPhrase.english}</p>
              )}
              <textarea
                id="answer-input"
                ref={inputRef}
                className={`app__textarea${
                  result === "correct"
                    ? " app__textarea--correct"
                    : result === "incorrect"
                    ? " app__textarea--incorrect"
                    : ""
                }`}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setResult(null);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type here… (Enter to check)"
                rows={2}
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                aria-label="Your answer"
              />

              {result === "incorrect" && (
                <p className="app__correct-answer">
                  Correct: <strong>{buildSentenceString(currentPhrase)}</strong>
                </p>
              )}
            </div>

            <div className="app__actions">
              {result === null ? (
                <button
                  className="app__btn app__btn--primary"
                  onClick={handleCheck}
                  disabled={inputValue.trim() === ""}
                >
                  Check
                </button>
              ) : (
                <button className="app__btn app__btn--primary" onClick={goNext}>
                  Next →
                </button>
              )}
              <button
                className="app__btn app__btn--danger"
                onClick={handleExclude}
                title="Don't show this card again"
              >
                Exclude card
              </button>
            </div>

            {result === "correct" && (
              <p className="app__feedback app__feedback--correct">✓ Correct!</p>
            )}
            {result === "incorrect" && (
              <p className="app__feedback app__feedback--incorrect">
                ✗ Not quite — see correction above
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
