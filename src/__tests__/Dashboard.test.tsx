import { act, render, screen } from '@testing-library/react';

import App from '../App.tsx';
import { ArticleType } from '../containers/Dashboard.tsx';
import * as articleApi from '../api/articles.tsx';

// const mockArticleRequest = {
//   date: '2020/12/1',
//   country: 'US'
// };

const renderApp = async () => {
  await act(async () => {
    render(<App />);
  });
};

describe('Dashboard', () => {
  beforeEach(async () => {
    jest
      .spyOn(articleApi, 'getArticles')
      .mockResolvedValue({ articles: mockOkArticleResponseType });
    await renderApp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockOkArticleResponseType: ArticleType[] = [
    {
      article: 'I am a cool article',
      views_ceil: 8675309,
      rank: 1
    },
    {
      article: 'I am a second cool article',
      views_ceil: 3,
      rank: 2
    },
    {
      article: 'Another article?!',
      views_ceil: 666,
      rank: 3
    }
  ];

  it('should render the page title', () => {
    expect(screen.getByText(/Top Wikipedia Articles/)).toBeInTheDocument();
  });

  it('should render the date picker', async () => {
    expect(screen.getByText(/DATE/)).toBeInTheDocument();
  });

  it('should render num results filter', () => {
    expect(screen.getByText(/NUM RESULTS/)).toBeInTheDocument();
  });

  it('should render country filter', () => {
    expect(screen.getByText(/COUNTRY/)).toBeInTheDocument();
  });

  it('should render article card', () => {
    expect(screen.getByText(/8675309 views/)).toBeInTheDocument();
  });
});
