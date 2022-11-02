import './App.css'
import ItemListContainer from './components/Container/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    < >
      
      <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />}></Route>
                <Route path="/category/:id" element={<ItemListContainer />}></Route>
                <Route path="/category/:category" element={<ItemListContainer />}></Route>
                <Route path="/item/:id" element={<ItemListContainer />}></Route>
            </Routes>
        </BrowserRouter>
     
      </>
      
     );
}

export default App;
