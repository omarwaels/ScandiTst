import logo from './logo.svg';
import './App.css';
import NavBar from "./components/nav"
import Addform from "./components/addForm"
import NavInsertPage from "./components/navInsertPage"
import { Route,Routes } from 'react-router-dom';
import Products from './components/products';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><NavBar/><Products/> </>}>
      </Route>
      <Route path='/addproduct' element={<><NavInsertPage/><Addform/></>}>
      </Route>
      





    </Routes>
  );
}

export default App;
