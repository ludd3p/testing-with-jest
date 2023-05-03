const {Builder, By, until} = require('selenium-webdriver');
const { after } = require('underscore');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000*60*5);

beforeAll(async () => {
    console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
}, defaultTimeout);

test('The stack shoukld be empty in beginning', async () => {
    let topOfStack = await driver.findElement(By.id('top_of_stack')).getText();
    expect(topOfStack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
    it('should open a prompt box', async () => {
        let push = await driver.findElement(By.id('push'));
        await push.click();
        let alert = await driver.switchTo().alert();
        await alert.sendKeys("Hello");
        await alert.accept();
    });
});

// Egna tester
describe('Clicking "Poppa stacken!"', () => {
    it('should open a alert box', async () => {
        let pop = await driver.findElement(By.id('pop'));
        await pop.click();
        let alert = await driver.switchTo().alert();
        await alert.accept();
    });
});