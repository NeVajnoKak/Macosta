import React, { useState, useEffect } from 'react';
import mercedes from '../../../img/mercedes.jpeg'
import { Link, useParams, useNavigate } from 'react-router-dom';
import ProductService from '../../../API/Service/ProductService/ProductService';
import StarRating from '../../../Components/StartRating/StarRating';
import CartService from '../../../API/Service/CartService/CartService';

const ProductInfo = () => {
    const [product, setProduct] = useState(null);
    const [randomProducts, setRandomProducts] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productId: "",
        productQuantity: 1
    });
    let { id } = useParams();

    const handleQuantityChange = (event) => {
        setFormData({ ...formData, productQuantity: event.target.value });
    };
    useEffect(() => {
        fetchProductById(id);
        fetchRandomProducts();
    }, []);

    const handleAddToCart = () => {
        CartService.addToCart(formData)
            .then(response => {
                navigate("/cart")
                setMessage("Product added to cart successfully!");
            })
            .catch(error => {
                setMessage("Error adding product to cart.");
                console.error('Error adding product to cart:', error);
            });
    };

    const fetchProductById = (id) => {
        ProductService.getProductById(id)
            .then(response => {
                setProduct(response.data);
                setFormData({ ...formData, productId: response.data.id });
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }
    const fetchRandomProducts = () => {
        ProductService.getProduct()
            .then(response => {
                const allProducts = response.data;
                const randomIndexes = getRandomIndexes(allProducts.length, 4);
                const randomProducts = randomIndexes.map(index => allProducts[index]);
                setRandomProducts(randomProducts);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }
  
    const getRandomIndexes = (max, count) => {
        const indexes = [];
        while (indexes.length < count) {
            const index = Math.floor(Math.random() * max);
            if (!indexes.includes(index)) {
                indexes.push(index);
            }
        }
        return indexes;
    };
    if (!product) return null;
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={mercedes} alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h1 className="display-5 fw-bolder">{product.name}</h1>
                            <div className="fs-5 mb-5">
                                <span className="text-decoration-line-through me-3">$155,000</span>
                                <span>{product.price}$</span>
                            </div>
                            <p className="lead">{product.description}</p>
                            <p>в наличии только {product.quantity}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value={formData.productQuantity} onChange={handleQuantityChange} max={product.quantity} style={{ maxWidth: '3rem' }} />
                                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={handleAddToCart}>
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Related products</h2>

                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {randomProducts
                            .map(products => (
                                <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={mercedes} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder">{products.name}</h5>
                                                <StarRating rate={products.rate}></StarRating>
                                                {products.price}$
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                                <Link
                                                    className="btn btn-outline-dark mt-auto"
                                                    to={`/catalog/${products.id}`}
                                                    onClick={() => window.location.href = `/catalog/${products.id}`}
                                                >
                                                    Подробнее
                                                </Link>
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

export default ProductInfo;
