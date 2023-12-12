import { ActionBar } from './components/ActionBar';
import { ArticleList } from './components/articles/ArticleList';
import { Dashboard } from './containers/Dashboard';
import { Header } from './components/common/Header';
import { NavBar } from './components/common/NavBar';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <>
      <NavBar />
      <Header title="Top Wikipedia Articles" />
      <Dashboard>
        <ActionBar />
        <ArticleList />
        <Pagination />
      </Dashboard>
    </>
  );
}

export default App;
