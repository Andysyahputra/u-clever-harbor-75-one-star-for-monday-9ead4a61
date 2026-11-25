import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Waiter seated me, confiscated my weekend, and served Monday cold, then charged me for the whole week.";

// Guard the gate before writing: plain single line, 1-180 chars, at most 25 words.
const words = ENTRY.trim().split(/\s+/);
if (
  ENTRY.length < 1 ||
  ENTRY.length > 180 ||
  words.length > 25 ||
  ENTRY.trim() === "" ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `Entry fails gate: ${ENTRY.length} chars, ${words.length} words`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
