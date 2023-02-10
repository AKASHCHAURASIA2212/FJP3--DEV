const puppeteer = require("puppeteer");
const codeObj = require("./code");
let loginLink = "https://www.hackerrank.com/auth/login";

let email = "navela5462@ekcsoft.com";
let pwd = "123456789";
let username = "newbie13 newbie13";
const browserOpen = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});

let page;
browserOpen
  .then((browserObject) => {
    // console.log(browserObject);
    let browserOpenPromise = browserObject.newPage();

    return browserOpenPromise;
  })
  .then((newTab) => {
    page = newTab;
    const hackerOpenPromise = page.goto(loginLink);
    return hackerOpenPromise;
  })
  .then(() => {
    let emailEnterPromise = page.type('input[id="input-1"]', email, {
      delay: 0,
    });
    return emailEnterPromise;
  })
  .then(() => {
    let pwdEnterPromise = page.type('input[id="input-2"]', pwd, { delay: 0 });
    return pwdEnterPromise;
  })
  .then(() => {
    let pageClickPromise = page.click('button[type="submit"]');
  })
  .then(() => {
    let elemnentWaitPromise = page.waitForSelector(
      'div[data-automation="algorithms"]',
      {
        visible: true,
      }
    );
    return elemnentWaitPromise;
  })
  .then(() => {
    let algoClickPromise = page.click('div[data-automation="algorithms"]');
    return algoClickPromise;
  })
  .then(() => {
    let elemnentWaitPromise = page.waitForSelector('input[value="warmup"', {
      visible: true,
    });
    return elemnentWaitPromise;
  })
  .then(() => {
    let warmupClickPromise = page.click('input[value="warmup"]');
    return warmupClickPromise;
  })
  .then(() => {
    let elemnentWaitPromise = page.waitForSelector(
      ".challenge-submit-btn button",
      {
        visible: true,
      }
    );
    return elemnentWaitPromise;
  })
  .then(() => {
    // shorthand
    // $ -> querySelector
    // $$ -> querySelectorAll
    console.log("warmup questions selected 👍👍👍👍👍");
    let allChallengePromise = page.$$(".challenge-submit-btn button", {
      delay: 0,
    });
    return allChallengePromise;
  })
  .then((quetionArr) => {
    console.log(quetionArr.length);
    helper(page, quetionArr[0], codeObj.answers[0]);
  });

function helper(page, quetion, ans) {
  return new Promise((resolve, reject) => {
    let quetionWillClicked = quetion.click();
    quetionWillClicked
      .then(() => {
        let elemnentWaitPromise = page.waitForSelector(".view-lines", {
          visible: true,
        });
        return elemnentWaitPromise;
      })
      .then(() => {
        let textEditerFocusPromise = page.click(".view-lines");
        return textEditerFocusPromise;
      })
      .then(() => {
        let checkBoxClickPromise = page.click('input[type="checkbox"]');
        console.log("test checkbox clicked 👌👌👌👌👌");
        return checkBoxClickPromise;
      })
      .then(() => {
        let elemnentWaitPromise = page.waitForSelector("#input-1", {
          visible: true,
        });
        return elemnentWaitPromise;
      })
      .then(() => {
        return page.type("#input-1", ans, { delay: 0 });
      })
      .then(() => {
        let ctrlPressed = page.keyboard.down("Control");
        return ctrlPressed;
      })
      .then(() => {
        let AisPressed = page.keyboard.press("A");
        return AisPressed;
      })
      .then(() => {
        let XisPressed = page.keyboard.press("X");
        return XisPressed;
      })
      .then(() => {
        console.log("Code is cut!!!!!!!!!!");
        let CtrlisUnoressed = page.keyboard.up("Control");
        return CtrlisUnoressed;
      })
      .then(() => {
        let MainEditorInFocus = page.click(".view-lines");
        return MainEditorInFocus;
      })
      .then(() => {
        let ctrlPressed = page.keyboard.down("Control");
        return ctrlPressed;
      })
      .then(() => {
        let AisPressed = page.keyboard.press("A");
        return AisPressed;
      })
      .then(() => {
        let XisPressed = page.keyboard.press("V");
        return XisPressed;
      })
      .then(() => {
        let SubmitPromise = page.click(
          'button[class="ui-btn ui-btn-normal ui-btn-primary pull-right hr-monaco-submit ui-btn-styled"]'
        );
        return SubmitPromise;
      })
      .then(() => {
        console.log("Answer submit !!!!");
      })
      .catch(() => {
        console.log("err");
      });
  });
}
