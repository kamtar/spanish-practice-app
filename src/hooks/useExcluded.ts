import { useState, useCallback } from "react";

const EXCLUDED_KEY = "spa_excluded";

function loadExcluded(): Set<number> {
  try {
    const raw = localStorage.getItem(EXCLUDED_KEY);
    if (raw) {
      const arr: number[] = JSON.parse(raw);
      return new Set(arr);
    }
  } catch {
    // ignore
  }
  return new Set();
}

function saveExcluded(excluded: Set<number>): void {
  localStorage.setItem(EXCLUDED_KEY, JSON.stringify([...excluded]));
}

export function useExcluded() {
  const [excluded, setExcluded] = useState<Set<number>>(loadExcluded);

  const excludePhrase = useCallback((id: number) => {
    setExcluded((prev) => {
      const next = new Set(prev);
      next.add(id);
      saveExcluded(next);
      return next;
    });
  }, []);

  const resetExcluded = useCallback(() => {
    setExcluded(new Set());
    localStorage.removeItem(EXCLUDED_KEY);
  }, []);

  return { excluded, excludePhrase, resetExcluded };
}
