import React, { useState, useEffect } from "react";
import camaro from '../../img/camaro.png'
import mclaren from '../../img/mclaren.jpg'
import logo from '../../img/logo.png'
import CategoryService from '../../API/Service/CategoryService/CategoryService';
import 'bootstrap/js/dist/base-component.js'
import Header from '../../Components/Header/Header';
import Search from "../../Components/Search/Search";
const Home = ({onSearch}) => {
    const [category, setCategory] = useState([]); 
    
    useEffect(() => {
        fetchCategory(); 
    }, []);

    const fetchCategory = () => {
        CategoryService.getCategory() 
            .then(response => {
                setCategory(response.data); 
            })
            .catch(error => {
                console.error('Error fetching catalogs:', error);
            });
    };

    return (
        <>
            <Header imageLogo = {logo} title = "Главная страница" imageCar = {camaro}></Header>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {category
                            .slice(0, 8)
                            .map(category => (
                                <div className="col mb-5" key={category.id}>
                                    <div className="card">
                                        <img className="card-img-top" src={mclaren} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{category.name}</h5>
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                {/* <SearchCategory onSearch = {onSearch} id = {category.id}/> */}
                                                <Search onSearch={onSearch} id={category.id} type={"category"}></Search>
                                                {/* <Link className="btn btn-outline-dark mt-auto" to={`/catalog`}>Подробнее</Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
