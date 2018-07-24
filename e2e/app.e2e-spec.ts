import { Quizgiri2Page } from './app.po';

describe('quizgiri2 App', () => {
  let page: Quizgiri2Page;

  beforeEach(() => {
    page = new Quizgiri2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
