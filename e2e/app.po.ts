import { browser, by, element, ElementFinder } from 'protractor';

export class NgHub {
  navigateTo() {
    return browser.get('/#/vms');
  }
  navigateToWFH() {
    return browser.get('/#/wfh');
  }
  getHeaderElement(): ElementFinder {

    const el = element(by.css('h1'));
    // browser.ignoreSynchronization = false;
    return el;
  }
  getWFHHeaderElement(comp: string): ElementFinder {
    const el = element(by.css(comp + ' h1'));
    return el;
  }
}
