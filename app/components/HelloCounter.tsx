"use client";

import { useState } from "react";

export default function HelloCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      setCount(data.count);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="inline-flex items-center gap-3 border border-jade/60 px-6 py-3 font-mono text-xs uppercase tracking-widest text-jade transition-colors hover:border-jade hover:bg-jade hover:text-ink disabled:opacity-50"
    >
      歡迎按鈕 {count !== null && `・ 已點擊 ${count} 次`}
    </button>
  );
}
