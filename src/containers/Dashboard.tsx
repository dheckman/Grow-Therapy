import { useEffect, useState } from 'react';
import { getArticles } from '../api/articles';
import * as React from 'react';

export type ArticleType = {
  article: string;
  views_ceil: number;
  rank: number;
};

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

const currentDate = new Date();
const yesterday = new Date(currentDate.setDate(currentDate.getDate() - 1));

export type DashboardContextType = {
  articles: ArticleType[] | null;
  country: { label: string; value: string };
  currentArticleList: ArticleType[] | null;
  error: string | null;
  handlePageClick: (selectedPage: number) => void;
  isCalendarOpen: boolean;
  isCountryFilterOpen: boolean;
  isNumResultsFilterOpen: boolean;
  itemsPerPage: number;
  selectedDate: Value;
  setCountry: React.Dispatch<React.SetStateAction<Record<'label' | 'value', string>>>;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCountryFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNumResultsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Value>>;
};

export const DashboardContext = React.createContext<DashboardContextType>(
  {} as DashboardContextType
);

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState<ArticleType[] | null>([]);
  const [currentArticleList, setCurrentArticleList] = useState<ArticleType[] | null>(
    articles ? articles.slice(0, 100) : []
  );
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(100);

  const [selectedDate, setSelectedDate] = useState<Value>(yesterday);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isNumResultsFilterOpen, setIsNumResultsFilterOpen] = useState(false);
  const [isCountryFilterOpen, setIsCountryFilterOpen] = useState(false);

  const [country, setCountry] = useState({ value: 'US', label: 'United States of America' });

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const loadArticles = async () => {
      // slightly hacky, consider using a library
      const formattedDate = selectedDate
        ? selectedDate?.toLocaleString('sv-SE', { dateStyle: 'short' }).split('-').join('/')
        : yesterday.toString();

      const { articles, error } = await getArticles(formattedDate, country.value);
      if (articles) {
        setError('');
        setArticles(articles);
      }
      if (error) {
        setArticles([]);
        setError(error);
      }
      setIsLoaded(true);
    };

    loadArticles();
  }, [itemsPerPage, selectedDate, country]);

  useEffect(() => {
    if (articles) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentArticleList(articles.slice(itemOffset, endOffset));
    }
  }, [articles, itemOffset, itemsPerPage]);

  const handlePageClick = (selectedPage: number) => {
    if (articles) {
      const newOffset = (selectedPage * itemsPerPage) % articles.length;
      setItemOffset(newOffset);
    }
  };

  if (!isLoaded) {
    return <span className="mt-10 flex justify-center">Loading...</span>;
  }

  return (
    <DashboardContext.Provider
      value={{
        articles,
        country,
        currentArticleList,
        error,
        handlePageClick,
        isCalendarOpen,
        isCountryFilterOpen,
        isNumResultsFilterOpen,
        itemsPerPage,
        selectedDate,
        setCountry,
        setIsCalendarOpen,
        setIsCountryFilterOpen,
        setIsNumResultsFilterOpen,
        setItemsPerPage,
        setSelectedDate
      }}>
      <main className="m-auto mt-6 flex max-w-none flex-col items-center pb-20 sm:mt-10 sm:max-w-full md:max-w-[950px]">
        {children}
      </main>
    </DashboardContext.Provider>
  );
};
