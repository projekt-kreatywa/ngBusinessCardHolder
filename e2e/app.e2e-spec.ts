import { NgBusinessCardHolderPage } from './app.po';

describe('ng-business-card-holder App', function() {
  let page: NgBusinessCardHolderPage;

  beforeEach(() => {
    page = new NgBusinessCardHolderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
