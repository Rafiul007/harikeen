import { Route, Router, Routes } from 'react-router';
import './App.css';
import Card from './components/Card';
import ContractUs from './components/contract us/ContractUs';
import Navbar from './components/navbar/Navbar';
import Home from './page/Home';
import Product from './screens/Product';
import { BrowserRouter } from 'react-router-dom';
import Contract from './page/Contract';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contract' element={<Contract/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
