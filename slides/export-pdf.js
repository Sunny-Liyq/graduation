const path = require("path");

async function main() {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch (error) {
    console.error("Playwright is not installed. Run `npm install` first, then `npm run export:pdf`.");
    process.exit(1);
  }

  const input = `file://${path.resolve(__dirname, "index.html")}`;
  const output = path.resolve(__dirname, "..", "dist", "defense.pdf");

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto(input, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: output,
    width: "16in",
    height: "9in",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" }
  });
  await browser.close();

  console.log(`Exported ${output}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
