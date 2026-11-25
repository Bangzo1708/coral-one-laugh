// One Line, One Laugh — entry program.
// Writes exactly one original one-liner to <output dir>/entry.txt.
// Output dir honours MAKEFUN_OUTPUT_DIR, defaulting to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line. Setup promises coffee; the punchline hands over a
// resignation letter instead — "something strong" flips meaning mid-sentence.
const JOKE =
  "I asked the barista for something strong; she handed me her resignation letter.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = JOKE.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(
    `entry.txt must hold 1-200 characters, got ${line.length}`,
  );
}
if (!/\S/.test(line)) {
  throw new Error("entry.txt must not be only whitespace");
}
if (/[\r\n]/.test(line)) {
  throw new Error("entry.txt must be a single line, no line breaks allowed");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
