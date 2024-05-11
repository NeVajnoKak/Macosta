import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import ProductInfo from './Pages/Product/ProductInfo/ProductInfo';
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import SubCategory from './Pages/Product/SubCategory/SubCategory'
import CatalogSearch from './Pages/Product/Catalog/Search/CatalogSearch';
import React , {useState} from 'react';
import NavScrollExample from './Components/Navbar/Navbar';
import Slidebar from './Components/Slidebar/Slidebar';
function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
      setSearchResults(results);
  };
  return (
    <>
    
      <NavScrollExample onSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Home onSearch={handleSearch} />} />
        <Route path="/slidebar" element={<Slidebar />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/catalog" element={<Catalog onSearch={handleSearch} />} /> */}
        <Route path="/catalog" element={<CatalogSearch onSearch={handleSearch} searchResults={searchResults.searchResults} />} />

        <Route path="/category/:subcategory/:id" element={<SubCategory />} />
        <Route path="/:category/:id" element={<ProductInfo />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
