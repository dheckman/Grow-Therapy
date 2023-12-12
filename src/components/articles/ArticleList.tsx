import { useContext } from 'react';
import { DashboardContext } from '../../containers/Dashboard';
import { ArticleCard } from './ArticleCard';

export const ArticleList = () => {
  const { currentArticleList, error } = useContext(DashboardContext);

  return (
    <section className="my-6 flex w-full flex-col gap-y-5 rounded-none bg-white p-6 shadow-standard sm:p-8 md:rounded-2xl">
      {error && <p className="text-red-500">{error}</p>}
      {currentArticleList?.map((article, idx) => <ArticleCard key={idx} article={article} />)}
    </section>
  );
};
