import { NgGithubProfileSearcherPage } from './app.po';

describe('ng-github-profile-searcher App', () => {
  let page: NgGithubProfileSearcherPage;

  beforeEach(() => {
    page = new NgGithubProfileSearcherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
