const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err));
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  
  const button = await page.locator('button').first();
  if (button) {
    const text = await button.innerText();
    console.log('Button text:', text);
    console.log('Clicking button...');
    await button.click({ force: true });
    await page.waitForTimeout(1000);
    const activeSlide = await page.locator('.slide.active').first();
    const activeName = await activeSlide.getAttribute('data-name');
    console.log('Active slide after click:', activeName);
  } else {
    console.log('Button not found');
  }
  await browser.close();
})();
