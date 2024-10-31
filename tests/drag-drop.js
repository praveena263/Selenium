const {Builder, Browser,By,Key,until} = require('selenium-webdriver');

(async function dragAndDrop(){
    const driver=await Builder().forbrower(Browser.CHROME).build();
try{
    // drag and Drop
    let dragAndDrop=driver.action({async:true}).dragAndDrop(srcEle,targetEle).perform();
    // Right click
    const ele=await driver.findElement(By.id('')).click();
    await driver.action().contextclick(ele).perform();
    // Double Click
    await driver.action().doubleclick(ele).perform();
    // sendKeys
    const eles=await driver.findElement(By.id('Clickable')).sendKeys('Kunche'); // Method 1
    await driver.action().sendKeys(eles,'Praveena').perform(); //Second Method
    // Press - its just like left mouse click
    await driver.action.press().perform();
    // keydown or down arrow
    await driver.action().keyDown(Key.COMMAND).sendKeys('a').perform()
    await driver.action().keyDown(Key.BACK_SPACE).perform()
}finally{
    await driver.quit()
}
})()