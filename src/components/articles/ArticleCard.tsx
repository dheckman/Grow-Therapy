import { ArticleType } from '../../containers/Dashboard';

export const ArticleCard = ({ article }: { article: ArticleType }) => {
  return (
    <div className="flex items-baseline justify-between gap-4 rounded-xl border border-neutral-300 p-6 sm:justify-start sm:gap-1 sm:gap-5">
      <span className="text-neutral-500">{article.rank}</span>
      <span className="truncate">{article.article.replace(/_/g, ' ')}</span>
      <span className="ml-none font-poppins text-sm text-neutral-600 sm:ml-auto">
        {article.views_ceil} views
      </span>
    </div>
  );
};
