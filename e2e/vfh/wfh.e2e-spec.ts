import { browser, by, element, ElementFinder } from 'protractor';
import { WFHPage } from './wfh.po';

describe('qa-page App', () => {
  let page: WFHPage;

  beforeEach(() => {
    page = new WFHPage();

  });

  it('should display WFH welcome message', async () => {
    page.navigateToWFH();
    expect(page.getWFHHeaderElement('qa-work-from-home').getText()).toEqual('Just kidding!');
  });
});
