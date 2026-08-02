const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/patel/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe'
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
  await page.goto('http://localhost:3000/work/suchamai-ai', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'scratch-hero.png', clip: { x: 0, y: 0, width: 1440, height: 1400 } });
  await browser.close();
})();
