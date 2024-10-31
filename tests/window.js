const {Builder,Browser,By,Key,until}=require('selenium-webdriver');
(async function safari() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
                        // Navigate to Url
    //   await driver.navigate().to("https://www.facebook.com");
    //   await driver.navigate().back()
    //   await driver.sleep(5000);
    //   await driver.navigate().forward();
    //                   //Window actions
    //   await driver.manage().window().fullscreen();
    //   await driver.manage().window().maximize();
    //   await driver.manage().window().minimize();
    //   const size=await driver.manage().window().getSize();
    //   await driver.manage().window().setSize(30,20);pu
    //   await driver.manage().window().fullscreen();
    //   await driver.manage().window().fullscreen();
    //   console.log(size );
      // Executing javaScript in Selenium
      await driver.navigate().to('https://www.amazon.in/')
      await driver.wait(until.elementIsVisible(executeScript('document.querySelector("a[href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer"]").scrollIntoView();')));
      await driver.sleep(300000000)
    } finally {
      await driver.quit();
    }
  })();