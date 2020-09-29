const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3003/';
let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
})

describe('AddToCart Component' , () => {

  beforeEach( async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('title is correct type', async () => {
    var div = '.container h4';
    const storeName = await page.$eval(div, e => e.textContent);
    expect(typeof storeName).toEqual('string');
  })

  test('price starts with $', async () => {
    var div = '.price'
    const firstLetter = await page.$eval(div, e => e.textContent.charAt(0))
    expect(firstLetter).toEqual('$');
  })

  test('the label contains a select tag', async () => {
    var div = '.container label';
    const label = await page.$eval(div, e => e.innerHTML.includes("<select>"));
    expect(label).toBe(true);
  })

  test('check if the icons are there', async () => {
    var div = '.promos img';
    const image = await page.$eval(div, e => e.src);
    expect(image.includes('http')).toBe(true);
  })

})


describe('Promo Component', () => {

  beforeEach( async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('check to promo title is correct', async () => {
    var div = '.promoTitle';
    const title = await page.$eval(div, e => e.innerText);
    expect(title).toEqual('Buy together, get free shipping');
  })

  test('images have a src input', async () => {
    var div = '.itemInfoContainer img';
    const image = await page.$eval(div, e => e.src.includes('http'));
    expect(image).toBe(true);
  })

  test('check if promo button exists', async () => {
    var div = '.promoContainer';
    const button = await page.$eval(div, e => e.innerHTML.includes('<button>'));
    expect(button).toBe(true);
  })
})