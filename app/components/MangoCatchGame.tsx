"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GAME_DURATION = 15;
const SPAWN_INTERVAL_MS = 650;
const TICK_MS = 30;
const FALL_SPEED = 2.2;
const BASKET_WIDTH_PERCENT = 16;
const CATCH_LINE_PERCENT = 90;

type Mango = {
  id: number;
  x: number;
  y: number;
};

type GameState = "idle" | "playing" | "ended";

export default function MangoCatchGame() {
  const [state, setState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [basketX, setBasketX] = useState(50);
  const [mangoes, setMangoes] = useState<Mango[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);
  const basketXRef = useRef(50);

  useEffect(() => {
    basketXRef.current = basketX;
  }, [basketX]);

  const moveBasketToClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setBasketX(Math.min(100, Math.max(0, percent)));
  }, []);

  useEffect(() => {
    if (state !== "playing") return;

    let spawnAcc = 0;
    const tick = setInterval(() => {
      spawnAcc += TICK_MS;

      setMangoes((prev) => {
        const moved = prev.map((m) => ({ ...m, y: m.y + FALL_SPEED }));
        const kept: Mango[] = [];
        let caught = 0;

        for (const m of moved) {
          if (m.y >= CATCH_LINE_PERCENT) {
            const withinX = Math.abs(m.x - basketXRef.current) <= BASKET_WIDTH_PERCENT / 2 + 4;
            if (withinX && m.y <= 100) {
              caught += 1;
              continue;
            }
            if (m.y > 102) {
              continue;
            }
          }
          kept.push(m);
        }

        if (caught > 0) setScore((s) => s + caught);
        return kept;
      });

      if (spawnAcc >= SPAWN_INTERVAL_MS) {
        spawnAcc = 0;
        setMangoes((prev) => [...prev, { id: nextId.current++, x: 8 + Math.random() * 84, y: 0 }]);
      }
    }, TICK_MS);

    return () => clearInterval(tick);
  }, [state]);

  useEffect(() => {
    if (state !== "playing") return;
    if (timeLeft <= 0) {
      setState("ended");
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [state, timeLeft]);

  const start = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setMangoes([]);
    setBasketX(50);
    setState("playing");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full max-w-xl items-center justify-between font-mono text-xs uppercase tracking-widest text-cream/60">
        <span>
          分數：<span className="text-mango">{score}</span>
        </span>
        <span>
          剩餘時間：<span className="text-jade">{timeLeft}s</span>
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseMove={(e) => state === "playing" && moveBasketToClientX(e.clientX)}
        onTouchMove={(e) => {
          if (state === "playing" && e.touches[0]) {
            moveBasketToClientX(e.touches[0].clientX);
          }
        }}
        className="relative aspect-[3/4] w-full max-w-xl touch-none select-none overflow-hidden rounded-2xl border border-cream/15 bg-panel/60"
      >
        {mangoes.map((m) => (
          <span
            key={m.id}
            aria-hidden
            className="absolute text-3xl"
            style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
          >
            🥭
          </span>
        ))}

        {state === "playing" && (
          <div
            aria-hidden
            className="absolute bottom-3 flex h-10 items-center justify-center rounded-full border border-cream/40 bg-cream/10 text-2xl backdrop-blur-sm"
            style={{
              left: `${basketX}%`,
              width: `${BASKET_WIDTH_PERCENT}%`,
              transform: "translateX(-50%)",
            }}
          >
            🧺
          </div>
        )}

        {state !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/70 px-6 text-center backdrop-blur-sm">
            {state === "idle" && (
              <>
                <span className="font-mono text-xs uppercase tracking-widest text-mango">
                  Mango Catch ・ 接芒果
                </span>
                <h3 className="font-display text-2xl text-cream">15 秒接芒果挑戰</h3>
                <p className="max-w-xs text-sm leading-6 text-cream/60">
                  移動滑鼠（或手指滑動）控制籃子，15 秒內接住越多芒果分數越高！
                </p>
                <button
                  type="button"
                  onClick={start}
                  className="mt-2 inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  開始遊戲 <span aria-hidden>🎮</span>
                </button>
              </>
            )}

            {state === "ended" && (
              <>
                <span className="text-4xl" aria-hidden>
                  🥭
                </span>
                <h3 className="font-display text-2xl text-cream">時間到！</h3>
                <p className="text-sm text-cream/70">
                  你這次接到了 <span className="text-mango">{score}</span> 顆芒果
                </p>
                <button
                  type="button"
                  onClick={start}
                  className="mt-2 inline-flex items-center gap-3 border border-cream/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  再玩一次 <span aria-hidden>↻</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
