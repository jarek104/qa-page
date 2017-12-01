import { browser, by, element, ElementFinder, $ } from 'protractor';

export class WFHPage {
  navigateToWFH() {
    return browser.get('/#/wfh');
  }

  getWFHHeaderElement(comp: string): ElementFinder {
    const el = $(comp + ' h1');
    return el;
  }
}
