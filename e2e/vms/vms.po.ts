import { browser, by, element, ElementFinder, $ } from 'protractor';

export class VMsPage {

  addNewWinVmBtn = $('#addWinVM');
  headerElement = $('h1');

  navigateTo() {
    return browser.get('/#/vms');
  }

}
