const { Builder, By, until, Key} = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
	let stack = await driver.findElement(By.id('top_of_stack')).getText();
	expect(stack).toEqual("n/a");
});

//controll so the title is correctly set
it('Should show the title', async () => {
    let title = await driver.getTitle();
    expect(title).toEqual("En stack");
});


describe('Clicking "Pusha till stacken"', () => {
	it('should open a prompt box', async () => {
		let push = await driver.findElement(By.id('push'));
		await push.click();
		let alert = await driver.switchTo().alert();
		await alert.sendKeys("Bananer");
		await alert.accept();
	});

    //Basically controll so the bubble up method works correectly asswell as the pop method
    it('should remove the minimu value of the heap in this case 2', async () => {
        await driver.findElement(By.id('pop')).click(); // clear heap from previous test
        let alert = await driver.switchTo().alert();
		await alert.accept();

		await driver.findElement(By.id('push')).click();
		alert = await driver.switchTo().alert();
		await alert.sendKeys("8");
		await alert.accept();

        await driver.findElement(By.id('push')).click();
		alert = await driver.switchTo().alert();
		await alert.sendKeys("2");
		await alert.accept();

        await driver.findElement(By.id('push')).click();
		alert = await driver.switchTo().alert();
		await alert.sendKeys("3");
		await alert.accept(); 
        
        await driver.findElement(By.id('pop')).click();
        expect(await driver.switchTo().alert().getText()).toEqual("Tog bort 2");
	});
});