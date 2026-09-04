import type { Metadata } from "next";
import MangoCatchGame from "../components/MangoCatchGame";

export const metadata: Metadata = {
  title: "接芒果小遊戲｜台灣好水果",
  description: "15 秒接芒果小遊戲，純粹娛樂，看看你能接到幾顆芒果！",
};

export default function GamePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 pb-32 pt-14 sm:pt-24">
      <div className="border-b border-cream/10 pb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-mango">Play ・ 小遊戲</span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">接芒果小遊戲</h1>
        <p className="mt-4 max-w-lg text-sm leading-6 text-cream/70 sm:text-base">
          15 秒限時挑戰，移動籃子接住掉落的芒果，單純娛樂放鬆一下！
        </p>
      </div>

      <MangoCatchGame />
    </main>
  );
}
