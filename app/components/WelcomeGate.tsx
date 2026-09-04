"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tw-fruit-visitor-name";

export default function WelcomeGate() {
  const [name, setName] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setName(saved);
    } catch {}
    setReady(true);
  }, []);

  const submit = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    setName(trimmed);
    try {
      window.localStorage.setItem(STORAGE_KEY, trimmed);
    } catch {}
  };

  if (!ready) return null;

  return (
    <>
      {!name && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 px-6 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-cream/15 bg-panel p-8 text-center shadow-2xl shadow-black/40">
            <span className="font-mono text-xs uppercase tracking-widest text-mango">
              Welcome ・ 歡迎光臨
            </span>
            <h3 className="mt-3 font-display text-2xl text-cream">請問怎麼稱呼您？</h3>
            <p className="mt-2 text-sm leading-6 text-cream/60">
              讓我們知道怎麼稱呼你，為你獻上專屬的水果歡迎詞。
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="mt-6 flex flex-col gap-4"
            >
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="輸入你的稱呼"
                autoFocus
                maxLength={20}
                className="w-full rounded-lg border border-cream/20 bg-ink/60 px-4 py-3 text-center text-sm text-cream placeholder:text-cream/30 focus:border-mango focus:outline-none"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                className="inline-flex items-center justify-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-cream"
              >
                進入網站 <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {name && (
        <p className="font-mono text-xs uppercase tracking-widest text-jade">
          嗨，{name}！歡迎回到台灣好水果 🍉
        </p>
      )}
    </>
  );
}
