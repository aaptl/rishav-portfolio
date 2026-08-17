import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://127.0.0.1:3000/work/pawle", { waitUntil: "networkidle", timeout: 60000 });

const dir = "C:/Users/patel/AppData/Local/Temp/claude/c--work-Rishav-portfolio/b8d87c06-2107-4c24-901f-dbaf0d9067f7/scratchpad";

const targets = [
  { text: "One ecosystem for every pet service", file: "check-strategy.png" },
  { text: "Two very different mental models", file: "check-people.png" },
  { text: "Architecture became", file: "check-ia.png" },
];

for (const t of targets) {
  const loc = page.getByText(t.text).first();
  const section = loc.locator("xpath=ancestor::section[1]");
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await section.screenshot({ path: `${dir}/${t.file}` });
}

await browser.close();
