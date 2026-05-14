const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const matches = html.match(/<section class="slide/g) || [];

if (matches.length !== 44) {
  console.error(`Expected 44 slides, found ${matches.length}.`);
  process.exit(1);
}

const required = [
  "SpecWav-Attack",
  "SFE-Net",
  "AV-LMMDetect",
  "ASV+ADD",
  "0.795",
  "99.2%",
  "98.02%",
  "85.09%",
  "../example/21.png",
  "../example/28.png",
  "table_6_2_decision.png"
];

const missing = required.filter((item) => !html.includes(item));
if (missing.length) {
  console.error(`Missing required content: ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`Slide check passed: ${matches.length} slides.`);
