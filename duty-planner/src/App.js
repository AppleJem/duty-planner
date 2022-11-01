import { useSelector } from 'react-redux';
import { NameContextProvider } from './store/name-context';

import './App.css';
import styles from './App.module.css';

import Table from './components/table/Table';
import NamelistMenu from './components/namelistMenu/NamelistMenu';
import NamelistButton from './components/namelistMenu/NamelistButton';
import TableMenu from './components/tableMenu/TableMenu';
import TableMenuButton from './components/tableMenu/TableMenuButton'

function App() {
  const activeMenu = useSelector(state => state.menuStatus.activeMenu)
  console.log(activeMenu)
  return (
    <NameContextProvider>
      <div className={`app-container ${styles['main-container']}`}>
        {activeMenu !== 'table' && <TableMenuButton />}
        <NamelistButton />
        {activeMenu === 'namelist' && <NamelistMenu />}
        {activeMenu === 'table' && <TableMenu />}
        <Table />
      </div>


    </NameContextProvider>


  );
}

export default App;


