import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { DashboardContext } from '../containers/Dashboard';
import leftIcon from '../assets/left-icon.svg';
import rightIcon from '../assets/right-icon.svg';

export const Pagination = () => {
  const { articles, itemsPerPage, handlePageClick } = useContext(DashboardContext);
  const pageCount = articles ? Math.ceil(articles.length / itemsPerPage) : 1;

  return (
    <div className="w-full">
      <ReactPaginate
        breakLabel="..."
        className="paginated-list"
        nextClassName="navigation-link"
        nextLabel={<img alt="next page icon" src={rightIcon} />}
        onPageChange={(e) => handlePageClick(e.selected)}
        pageClassName="paginated-list-item"
        pageCount={pageCount}
        pageLinkClassName="paginated-list-item-link"
        pageRangeDisplayed={5}
        previousClassName="navigation-link"
        previousLabel={<img alt="previous page icon" src={leftIcon} />}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
