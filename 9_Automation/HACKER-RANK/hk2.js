const puppeteer = require("puppeteer");
const codeObj = require("./code");
let loginLink = "https://www.hackerrank.com/auth/login";

let email = "navela5462@ekcsoft.com";
let pwd = "123456789";
let username = "newbie13 newbie13";
let page;

(async function () {
  try {
    let browserInstance = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized"],
      defaultViewport: null,
    });

    let newTab = await browserInstance.newPage();
    await newTab.goto(loginLink);
    await newTab.type('input[id="input-1"]', email, {
      delay: 0,
    });
    await newTab.type('input[id="input-2"]', pwd, {
      delay: 0,
    });
    await newTab.click('button[type="submit"]');

    await waitAndClick('div[data-automation="algorithms"]', newTab);

    await waitAndClick('input[value="warmup"]', newTab);

    let AllChallenge = await newTab.$$(".challenge-submit-btn button");
    console.log("Totel Quetion " + AllChallenge.length);

    problemSolver(newTab, AllChallenge[0], codeObj.answers[0]);
  } catch (error) {
    console.log(error);
  }
})();

async function problemSolver(page, quetion, ans) {
  try {
    console.log("inside Problem Solver");
    await quetion.click();
    await waitAndClick(".view-lines", page);
    await page.click('input[type="checkbox"]');
    //   await waitAndClick('#input-1',page);
    await page.type("#input-1", ans);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("X");
    await page.keyboard.up("Control");
    await page.click(".view-lines");
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("V");
    await page.click(
      'button[class="ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled"]'
    );
  } catch (error) {
    console.log(error);
  }
}

async function waitAndClick(selector, cPaqge) {
  await cPaqge.waitForSelector(selector);
  let selectorClick = cPaqge.click(selector);
  return selectorClick;
}
