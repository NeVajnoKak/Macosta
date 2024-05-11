import React, { useEffect, useState } from 'react'
import ProductService from '../../../API/Service/ProductService/ProductService';
import mercedes from '../../../img/mercedes.jpeg'
import { Link } from 'react-router-dom';
import StarRating from '../../StartRating/StarRating';
const SectionP = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = () => {
        ProductService.getProduct()
            .then(response => {
                setProduct(response.data); 
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }
  return (
    <>
     <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {product.map(productItem => (
                            <div className="col mb-5" key={productItem.id}>
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                    <img className="card-img-top" src={mercedes} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{productItem.name}</h5>
                                            <StarRating rate={productItem.rate}/>
                                            <span className="text-muted text-decoration-line-through me-1">$155,000</span>
                                            {productItem.price}
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link className="btn btn-outline-dark mt-auto" to={`/catalog/${productItem.id}`}>Подробнее</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    </>
  )
}

export default SectionP