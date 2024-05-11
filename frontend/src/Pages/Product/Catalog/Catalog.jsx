import React from "react";
import prado from '../../../img/prado.png'
import logo from '../../../img/logo.png'
import Header from '../../../Components/Header/Header';
import 'bootstrap/js/dist/dropdown'
import Slidebar from "../../../Components/Slidebar/Slidebar";
import Products from "../../../Components/Product/Product/Products";
const Catalog = ({onSearch}) => {
    return (
        <>
            <Header imageLogo={logo} title="Каталог" imageCar={prado}></Header>
            
            <Slidebar onSearch={onSearch}></Slidebar>

            <Products />
        </>
    );
}

export default Catalog;
