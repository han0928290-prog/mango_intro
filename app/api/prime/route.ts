import { NextRequest, NextResponse } from "next/server";

function isPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("number");
  const number = Number(raw);

  if (raw === null || raw.trim() === "" || Number.isNaN(number)) {
    return NextResponse.json(
      { error: "請提供有效的數字，例如 /api/prime?number=17" },
      { status: 400 }
    );
  }

  return NextResponse.json({ number, isPrime: isPrime(number) });
}
