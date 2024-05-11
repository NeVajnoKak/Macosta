import React, { useState, useEffect } from 'react';
import prado from '../../../img/prado.png';
import mercedes from '../../../img/mercedes.jpeg';
import logo from '../../../img/logo.png';
import { Link, useParams } from 'react-router-dom';
import CategoryService from '../../../API/Service/CategoryService/CategoryService';
import Header from '../../../Components/Header/Header';

const ProductList = () => {
    const { id } = useParams();
    const [subCategories, setSubCategories] = useState([]); 

    useEffect(() => {
        fetchSubCategories(); 
    }, [id]);

    const fetchSubCategories = () => {
        CategoryService.getSubCategory(id) 
            .then(response => {
                setSubCategories(response.data); 
            })
            .catch(error => {
                console.error('Error fetching subCategories:', error);
            });
    };
   

    return (
        <>
        <Header imageLogo = {logo} title = "Саб категории" imageCar = {prado}></Header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {subCategories.map(subCategory => (
                            <div className="col mb-5" key={subCategory.id}>
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                                    <img className="card-img-top" src={mercedes} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Mercedes-AMG GT R</h5>
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            <span className="text-muted text-decoration-line-through">$155,000</span>
                                            $151,000
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link className="btn btn-outline-dark mt-auto" to={`/category/subcategory/${subCategory.id}/product`}>Подробнее</Link>
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

export default ProductList;
