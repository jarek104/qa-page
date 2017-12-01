import { VMsPage } from '../vms/vms.po';
import { browser, by, element, ElementFinder } from 'protractor';
import { AddWinVmModal } from './addWinVm.po';

describe('Add Windows VM Modal', () => {
  let vmsPage: VMsPage;
  let addWinVmModal: AddWinVmModal;

  beforeEach(() => {
    vmsPage = new VMsPage();
    addWinVmModal = new AddWinVmModal();
    vmsPage.navigateTo();
  });

  it('should open and close New Windows VM Modal', () => {
    browser.ignoreSynchronization = true;
    vmsPage.addNewWinVmBtn.click();
    expect(addWinVmModal.wholeModal.isDisplayed()).toBeTruthy();
    addWinVmModal.cancelAddVmBtn.click();
    expect(addWinVmModal.wholeModal.isDisplayed()).toBeFalsy();
  });

  // it('should create a new Windows VM', () => {
  //   vmsPage.addNewWinVmBtn.click();
  // });
});

