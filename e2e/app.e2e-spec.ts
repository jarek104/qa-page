import { NgHub } from './app.po';
import { browser, by, element, ElementFinder } from 'protractor';

describe('qa-page App', () => {
  let page: NgHub;

  beforeEach(() => {
    page = new NgHub();

  });

  it('should display WFH welcome message', async () => {
    page.navigateToWFH();

    expect(page.getWFHHeaderElement('qa-work-from-home').getText()).toEqual('Just kidding!');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.ignoreSynchronization = true;
    expect(page.getHeaderElement().getText()).toEqual('Welcome to my app!');
  });
});
