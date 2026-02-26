"use client";

import { useState } from "react";

export default function BezwaarStartPage() {
  const [naam, setNaam] = useState("");

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Bezwaar intake stap 1</h1>

      <label>
        Jouw naam:
        <br />
        <input
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          style={{ marginTop: 8, padding: 8 }}
        />
      </label>

      <p style={{ marginTop: 20 }}>
        Hallo {naam || "..." }
      </p>
    </main>
  );
}