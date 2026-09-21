"use client";

import { useState } from "react";

type Result =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; number: number; isPrime: boolean }
  | { status: "error"; message: string };

export default function PrimeChecker() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result>({ status: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult({ status: "loading" });

    try {
      const res = await fetch(`/api/prime?number=${encodeURIComponent(value)}`);
      const data = await res.json();

      if (!res.ok) {
        setResult({ status: "error", message: data.error ?? "發生錯誤" });
        return;
      }

      setResult({ status: "success", number: data.number, isPrime: data.isPrime });
    } catch {
      setResult({ status: "error", message: "無法連接伺服器" });
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-cream/15 bg-panel/40 p-6 backdrop-blur-md">
      <span className="font-mono text-xs uppercase tracking-widest text-mango">
        Prime Checker ・ 質數檢查
      </span>

      <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="輸入一個數字"
          className="w-40 border border-cream/30 bg-transparent px-4 py-2 font-mono text-sm text-cream outline-none placeholder:text-cream/30 focus:border-cream"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 border border-cream/30 px-5 py-2 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
        >
          檢查
        </button>
      </form>

      {result.status === "loading" && (
        <p className="text-sm text-cream/60">檢查中...</p>
      )}
      {result.status === "error" && (
        <p className="text-sm text-guava">{result.message}</p>
      )}
      {result.status === "success" && (
        <p className="text-sm text-cream/80">
          {result.number} 是{result.isPrime ? "" : "不是"}
          <span className={result.isPrime ? "text-jade" : "text-guava"}>質數</span>
        </p>
      )}
    </div>
  );
}
