"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyToHouse = void 0;
const puppeteer = require("puppeteer");
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
const data = {
    gender: "m",
    lastName: "ALMATAR",
    firstName: "Abdulla",
    title: "9",
    birthday: "01",
    birthmonth: "01",
    birthyear: "1991",
    street: "Leystrasse",
    hausnr: "4",
    floor: "2",
    doornr: "22b",
    zip: "1200",
    city: "Wien",
    phone: "067761806959",
    email: "abodjarad12@gmail.com"
};
const applyToHouse = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({
        headless: true,
        args: ['--no-sandbox']
    });
    const page = yield browser.newPage();
    yield page.setViewport({
        width: 1200,
        height: 720,
        deviceScaleFactor: 1,
    });
    yield page.goto(url);
    const gender = yield page.$('[name="tx_wxsozialbau_altbau[contact][gender]"]');
    console.log("🚀 ~ file: applyToHouse.ts:44 ~ applyToHouse ~ gender", gender);
    gender.select(data.gender);
    console.log("🚀 ~ file: applyToHouse.ts:44 ~ applyToHouse ~ gender", gender);
    // const last_name = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][last_name]"]'
    // );
    // await last_name.click();
    // await page.keyboard.type(data.lastName);
    // const first_name = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][first_name]"]'
    // );
    // await first_name.click();
    // await page.keyboard.type(data.firstName);
    // const title = await page.$('[name="tx_wxsozialbau_altbau[contact][title]"]');
    // title.select(data.title);
    // const birthday = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][birthday]"]'
    // );
    // birthday.select(data.birthday);
    // const birthmonth = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][birthmonth]"]'
    // );
    // birthmonth.select(data.birthmonth);
    // const birthyear = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][birthyear]"]'
    // );
    // await birthyear.select(data.birthyear);
    // const street = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][street]"]'
    // );
    // await street.click();
    // await page.keyboard.type(data.street);
    // const hausnr = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][hausnr]"]'
    // );
    // await hausnr.click();
    // await page.keyboard.type(data.hausnr);
    // // const floor = await page.$('[name="tx_wxsozialbau_altbau[contact][floor]"]');
    // // await floor.click();
    // // await page.keyboard.type(data.floor);
    // const doornr = await page.$(
    //   '[name="tx_wxsozialbau_altbau[contact][doornr]"]'
    // );
    // await doornr.click();
    // await page.keyboard.type(data.doornr);
    // const zip = await page.$('[name="tx_wxsozialbau_altbau[contact][zip]"]');
    // await zip.click();
    // await page.keyboard.type(data.zip);
    // const city = await page.$('[name="tx_wxsozialbau_altbau[contact][city]"]');
    // await city.click();
    // await page.keyboard.type(data.city);
    // const phone = await page.$('[name="tx_wxsozialbau_altbau[contact][phone]"]');
    // await phone.click();
    // await page.keyboard.type(data.phone);
    // const email = await page.$('[name="tx_wxsozialbau_altbau[contact][email]"]');
    // await email.click();
    // await page.keyboard.type(data.email);
    // let div_selector_to_remove = "#CybotCookiebotDialog";
    // await page.evaluate((sel) => {
    //   var elements = document.querySelectorAll(sel);
    //   for (var i = 0; i < elements.length; i++) {
    //     elements[i].parentNode.removeChild(elements[i]);
    //   }
    // }, div_selector_to_remove);
    // div_selector_to_remove = ".navbar";
    // await page.evaluate((sel) => {
    //   var elements = document.querySelectorAll(sel);
    //   for (var i = 0; i < elements.length; i++) {
    //     elements[i].parentNode.removeChild(elements[i]);
    //   }
    // }, div_selector_to_remove);
    // await page.keyboard.press("Tab");
    // await page.keyboard.press("Tab");
    // await page.keyboard.press("Space");
    // await street.type(data.street);
    // await hausnr.type(data.hausnr);
    // // await page.screenshot({ path: "before.png", fullPage: true });
    // await page.keyboard.press("Enter");
    // await page.screenshot({ path: "after.png", fullPage: true });
    yield page.click('button[type="submit"]');
    yield browser.close();
});
exports.applyToHouse = applyToHouse;
