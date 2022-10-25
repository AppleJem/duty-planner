import './App.css';
import { NameContextProvider } from './store/name-context';
import Table from './components/table/Table';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <NameContextProvider>
      <main>
        <h1>Hello and welcome to the PLAD duty planner</h1>
        <SideBar></SideBar>
        <Table></Table>
      </main>
    </NameContextProvider>


  );
}

export default App;


