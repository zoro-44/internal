const { Builder, By, until } = require('selenium-webdriver');

async function testWorkshopForm() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');

    await driver.findElement(By.name('name')).sendKeys('Test User');
    await driver.findElement(By.name('email')).sendKeys('testuser@example.com');
    await driver.findElement(By.name('phone')).sendKeys('9876543210');
    await driver.findElement(By.name('workshop')).sendKeys('Web Development');
    await driver.findElement(By.css('input[type="submit"]')).click();

    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Registration Successful')]")), 5000);
    console.log("✅ Test Passed: Registration form works correctly!");
  } catch (err) {
    console.log("❌ Test Failed:", err);
  } finally {
    await driver.quit();
  }
}

testWorkshopForm();