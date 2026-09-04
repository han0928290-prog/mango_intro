"use client";

import { useState } from "react";

const WIN_CHANCE = 0.1;

export default function LuckyDraw() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<"idle" | "win" | "lose">("idle");

  const openModal = () => {
    setResult("idle");
    setOpen(true);
  };

  const draw = () => {
    setResult(Math.random() < WIN_CHANCE ? "win" : "lose");
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center gap-3 border border-mango/60 px-6 py-3 font-mono text-xs uppercase tracking-widest text-mango transition-colors hover:border-mango hover:bg-mango hover:text-ink"
      >
        抽芒果優惠券 <span aria-hidden>🎁</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 px-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl border border-cream/15 bg-panel p-8 text-center shadow-2xl shadow-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="關閉"
              className="absolute right-4 top-4 text-cream/40 transition-colors hover:text-cream"
            >
              ✕
            </button>

            <span className="font-mono text-xs uppercase tracking-widest text-mango">
              Lucky Draw ・ 幸運抽獎
            </span>
            <h3 className="mt-3 font-display text-2xl text-cream">芒果優惠券抽獎</h3>
            <p className="mt-2 text-sm leading-6 text-cream/60">
              10% 機率抽中芒果優惠券 9 折，祝你好運！
            </p>

            {result === "idle" && (
              <button
                type="button"
                onClick={draw}
                className="mt-6 inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                開始抽獎 <span aria-hidden>🎲</span>
              </button>
            )}

            {result === "win" && (
              <div className="mt-6 flex flex-col items-center gap-3">
                <span className="text-4xl" aria-hidden>
                  🥭
                </span>
                <p className="font-display text-xl text-mango">恭喜中獎！</p>
                <p className="text-sm text-cream/70">獲得芒果優惠券 9 折</p>
                <button
                  type="button"
                  onClick={draw}
                  className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/50 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream"
                >
                  再抽一次
                </button>
              </div>
            )}

            {result === "lose" && (
              <div className="mt-6 flex flex-col items-center gap-3">
                <span className="text-4xl" aria-hidden>
                  😢
                </span>
                <p className="font-display text-xl text-cream">銘謝惠顧</p>
                <p className="text-sm text-cream/70">再接再厲，下次還有機會！</p>
                <button
                  type="button"
                  onClick={draw}
                  className="mt-2 inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  再抽一次
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
