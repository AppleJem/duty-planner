import { useSelector } from 'react-redux';
import { NameContextProvider } from './store/name-context';

import './App.css';
import styles from './App.module.css';

import Table from './components/table/Table';
import NamelistMenu from './components/namelistMenu/NamelistMenu';
import TableMenu from './components/tableMenu/TableMenu';
import NamelistButton from './components/floatingButtons/NamelistButton';
import Navbar from './components/navbar/Navbar';

function App() {
  const activeMenu = useSelector(state => state.menuStatus.activeMenu)

  return (
    <NameContextProvider>
      <div className={`app-container ${styles['main-container']}`}>
        <Navbar/>
        <NamelistButton/>
        {activeMenu === 'namelist' && <NamelistMenu />}
        {activeMenu === 'table' && <TableMenu />}\
        <Table />
      </div>


    </NameContextProvider>


  );
}

export default App;


