import { DynamicFormsPage } from './app.po';

describe('dynamic-forms App', () => {
  let page: DynamicFormsPage;

  beforeEach(() => {
    page = new DynamicFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
