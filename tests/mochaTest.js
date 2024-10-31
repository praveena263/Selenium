const {Builder,Browser,Key,By,until}=require('selenium-webdriver');
describe('Timeouts',async function(){
    this.timeouts(0)
    let driver;
    driver = await new Builder().forBrowser('chrome').build();
    it('Implicit wait',async function(){
         driver= await new Builder().forBrowser('chrome').build();
         await driver.get('www.amazon.in');
         await driver.manage().setTimeouts({implicit:10000});
         await driver.findElement(By.id(''))
         await driver.findElement(By.id(''))
         await driver.findElement(By.id(''))
         await driver.findElement(By.id(''))
         await driver.findElement(By.id(''))
         // Implicit waits , waits each element that are in the test thts its not recomenedd

    });
    it('Explicit wait',async function(){
        driver= await new Builder().forBrowser('chrome').build();
        await driver.get('www.amazon.in');
        await driver.manage().setTimeouts({implicit:10000});
        await driver.wait(until.elementLocated(driver.findElement(By.xpath('//a[text()="Mobiles"]','Mobiles')),10000));
        await driver.wait(until.urlContains('amazon'),10000);
        await driver.findElement(By.id(''))
        await driver.findElement(By.id(''))
        await driver.findElement(By.id(''))
        // Implicit waits , waits each element that are in the test thts its not recomenedd

   })
   it('alerts',async function(){
    driver= await new Builder().forBrowser('chrome').build();
    await driver.get('https://demoqa.com/alerts');
    await driver.findElement(By.id('alertButton')).click()
    await driver.wait(until.alertIsPresent(),10000);
    let alert=driver.switchTo().alert();
    let alertText = alert.getText()
    await driver.sleep()
    console.log(alertText);
    await driver.sleep()
    alert.accept()

})
    this.afterEach(async function(){
       await driver.quit()
    })
})