// Sorry, I Heard That Wrong — make.fun entry.
// A smart speaker apologises for mishearing "set an alarm for six"
// as "set a llama for six". One line, no trailing newline.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Sorry — I heard 'set an alarm for six' and set a llama for six. It's at the door, and it's right on time.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
