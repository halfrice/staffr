import { StaffrPage } from './app.po';

describe('staffr App', () => {
  let page: StaffrPage;

  beforeEach(() => {
    page = new StaffrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
