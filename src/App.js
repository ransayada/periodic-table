import './App.css';
import PeriodicTable from './Components/PeriodicTable';
import TableLegend from './Components/TableLegend';

const App = () => {
  return (
    <div className="App">
     <h1>React Periodic Table.</h1>
     <PeriodicTable/>
     <TableLegend />
    </div>
  );
}

export default App;
