const {Builder,Browser,By,Key,until}=require('selenium-webdriver');
(async function safari() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
      // Navigate to Url
      await driver.get("https://www.facebook.com");
  
      // Get all the elements available with tag 'p'
      let elements = await driver
        .findElement(By.id("email"))
        .sendKeys("veenaamar25@gmail.com", Key.ENTER);
      let elements1 = await driver.wait(until.elementsLocated(By.tagName("li")), 10000);
      for (let element of elements1) {
        const text = await element.getText();
        console.log(text);
      }
    
    } finally {
      await driver.quit();
    }
  })();