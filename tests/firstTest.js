const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://www.google.com');
        await  driver.findElement(By.name('q')).sendKeys("webdriver", Key.RETURN);
        await driver.wait(until.titleIs("webdriver - Google Search"), 100000);
     }
     finally {
      await driver.quit();
    }
})();
(async function firefox() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    // Navigate to Url
    await driver.get("https://www.facebook.com");

    // Get all the elements available with tag 'p'
    let elements = await driver
      .findElement(By.id("email"))
      .sendKeys("veenaamar25@gmail.com", Key.ENTER);
    //let elements1 = await driver.findElements(By.tagName("li"));
    let elements1 = await driver.wait(until.elementsLocated(By.tagName("li")), 10000);
    for (let element of elements1) {
      const text = await element.getText();
      console.log(text);
    }
    // Issue with forEach: Using async/await inside forEach can lead to session-related errors because forEach doesn’t wait for asynchronous operations to complete.
    // Switch to for...of: A for...of loop properly handles asynchronous operations, ensuring each operation completes before moving on.
    // Session Management: Always ensure the WebDriver session is active until all operations are completed.

    /*  elements1.forEach( (element)=>{
            const text=  element.getText();
            console.log(text)
        })
   */
  } finally {
    await driver.quit();
  }
})();
