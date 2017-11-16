import { FilesTreePage } from './app.po';

describe('files-tree App', () => {
  let page: FilesTreePage;

  beforeEach(() => {
    page = new FilesTreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
