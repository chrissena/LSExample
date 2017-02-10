import { LSExamplePage } from './app.po';

describe('lsexample App', function() {
  let page: LSExamplePage;

  beforeEach(() => {
    page = new LSExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
