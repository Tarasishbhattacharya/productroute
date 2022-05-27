
import { Home } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Products } from './components/Product';
import { Navbar } from './components/Navbar';
import { Productdetail } from './components/Productdetail';


function App() {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<Productdetail/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
