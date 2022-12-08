let puppeteer = require('puppeteer')

console.log('before')


let browserWillLaunchPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null
})
browserWillLaunchPromise.then(function (browserInstance) {

    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
}).then(function (newTab) {
    console.log('new tab opened')
    let pageWillBeOpenedPromish = newTab.goto('https://www.pepcoding.com/')
    return pageWillBeOpenedPromish
}).then(function () {
    console.log('site opened ')
})

console.log('after')
