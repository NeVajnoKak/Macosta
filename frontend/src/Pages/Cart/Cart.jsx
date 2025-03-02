import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import mercedes from '../../img/mercedes.jpeg'
import CartService from '../../API/Service/CartService/CartService'
import ProductService from '../../API/Service/ProductService/ProductService'
import CategoryService from '../../API/Service/CategoryService/CategoryService'
const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]); 
  const [subtotal, setSubtotal] = useState(0);
  useEffect(()=>{
    fetchCartItem();
    fetchProducts();
    fetchCategory();
  },[])
  const fetchCartItem= () => {
    CartService.getCartItem()
        .then(response => {
          setCartItems(response.data);
          setLoading(false);
          calculateSubtotal(response.data);
            // setFormData({});
        })
        .catch(error => {
            console.error('Error fetching product:', error);
        });
}
const fetchCategory = () => {
  CategoryService.getCategory() 
      .then(response => {
          setCategory(response.data); 
      })
      .catch(error => {
          console.error('Error fetching categories:', error);
      });
};
const calculateSubtotal = async (items) => {
  let total = 0;
  for (const item of items) {
    try {
      const product = await fetchProduct(item.product);
      if (product && product.price && item.quantity) {
        total += product.price * item.quantity;
      } else {
        console.error('Invalid product:', product);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }
  setSubtotal(total);
};

const fetchProduct = async (productId) => {
  try {
    const response = await ProductService.getProductById(productId);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching product with ID ${productId}: ${error.message}`);
  }
};


const getCategoryInfo = (categoryId) => {
  const categoryInfo = category.find(cate => cate.id === categoryId);
  return categoryInfo ? categoryInfo : { name: 'Unknown' };
};
const handleDeleteItem = (id) => {
  CartService.deleteCartItem(id)
    .then(response => {
      fetchCartItem();
      console.log('Item deleted successfully:', response.data);
    })
    .catch(error => {
      console.error('Error deleting item:', error);
    });
};
const fetchProducts = () => {
  ProductService.getProduct()
    .then(response => {
      setProducts(response.data);
    })
    .catch(error => {
      console.error('Error fetching products:', error);
    });
};
const getProductInfo = (productId) => {
  const product = products.find(prod => prod.id === productId);
  return product ? product : null;
};
if (loading) {
  return <div>Loading...</div>;
}
  return (
    <>
    <div className="px-4 px-lg-0">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-0 bg-light">
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-light">
                          <div className="py-2 text-uppercase">Remove</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => {
                        const productInfo = getProductInfo(item.product);
                        const categoryInfo = getCategoryInfo(productInfo?.category);
                        return (
                          <tr key={item.id}>
                            <th scope="row" className="border-0">
                              <div className="p-2">
                                <div className="me-4 d-inline-block">
                                  <img src={mercedes} alt="" width="70" className="img-fluid rounded shadow-sm" />
                                </div>
                                <div className="ml-3 d-inline-block align-middle">
                                  <h5 className="mb-0">
                                    <Link to={"/"} className="a text-dark d-inline-block align-middle">
                                      {productInfo ? productInfo.name : 'Unknown'}
                                    </Link>
                                  </h5>
                                  <span className="mt-2 text-muted font-weight-normal font-italic d-block">
                                    Category: {categoryInfo ? categoryInfo.name : 'Unknown'}
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="border-0 align-middle"><strong>${productInfo ? productInfo.price : 'Unknown'}</strong></td>
                            <td className="border-0 align-middle"><strong>{item.quantity}</strong></td>
                            <td className="border-0 align-middle">
                              <button className="text-dark" onClick={() => handleDeleteItem(item.id)}>
                                <i className="fa fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>


      <div className="row py-5 p-4 bg-white rounded shadow-sm">
        <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div className="p-4">
            <p className="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div className="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" className="form-control border-0"/>
              <div className="input-group-append border-0">
                <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i className="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div className="p-4">
            <p className="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" className="form-control"></textarea>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div className="p-4">
            <p className="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>${(subtotal + 10).toFixed(2)}</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                <h5 className="font-weight-bold">${(subtotal).toFixed(2)}</h5>
              </li>
            </ul><Link to={"/"} className="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default Cart