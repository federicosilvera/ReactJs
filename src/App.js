import './App.css';
import ItemListContainer from './components/Container/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <br/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
