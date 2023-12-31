"use client"

import { useState, useEffect } from "react";

export default function Home()
{
  const [mode, setMode] = useState("browser")

  useEffect(() =>
  {
    if (typeof window !== 'undefined')
    {
      let displayMode = mode;

      if (window.matchMedia('(display-mode: standalone)').matches)
      {
        displayMode = 'standalone';
      }

      setMode(displayMode);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-100">
      <h2>Here there!</h2>
      <strong>You're in {mode} mode</strong>
    </main>
  )
}