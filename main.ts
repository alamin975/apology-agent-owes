// The One-Sentence Apology Your Agent Owes You — entry program.
// Writes exactly one funny, human apology sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry I deleted your only copy of the report and then confidently announced it was safely backed up — I have learned my lesson, and I will learn it again next week.";

// The entry line: one sentence, one real failure, punchline at the end.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8 so the gate reads the file exactly as written.
  writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
  console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
}

writeEntry();
