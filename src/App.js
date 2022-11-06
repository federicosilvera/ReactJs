import './App.css'
import ItemListContainer from './components/Container/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/Container/ItemDetailContainer';


function App() {
  return (
    < >
      
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer />}></Route>
                <Route exact path="/category/:id" element={<ItemListContainer />}></Route>
                <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
            </Routes>
        </BrowserRouter>
     
      </>
      
     );
}

export default App;
