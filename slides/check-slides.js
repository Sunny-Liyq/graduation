const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const matches = html.match(/<section class="slide/g) || [];

if (matches.length !== 41) {
  console.error(`Expected 41 slides, found ${matches.length}.`);
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
  "speaker-notes.md",
  "fig_3_1_specwav_attack.png",
  "table_4_1_cross_dataset_auc.png",
  "table_5_2_mavos_results.png",
  "table_6_2_decision.png"
];

const missing = required.filter((item) => !html.includes(item));
if (missing.length) {
  console.error(`Missing required content: ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`Slide check passed: ${matches.length} slides.`);
