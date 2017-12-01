import { VMsPage } from './vms.po';
import { browser, by, element, ElementFinder } from 'protractor';

describe('qa-page App', () => {
  let page: VMsPage;

  beforeEach(() => {
    page = new VMsPage();

  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    expect(page.headerElement.getText()).toEqual('Welcome to my app!');
  });
});
