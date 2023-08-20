import React from 'react';
import FontLayout from '../../../demo/components/FontLayout';
import BlogItem from '../../../demo/components/BlogItem';
import BlogComp from '../../../demo/components/BlogComp';
import ProductDetail from '../../../demo/components/ProductDetail';
import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../firebase.config';
import Link from 'next/link';
import { getProducts } from '..';

const getProduct= async (slug:string) => {
  const productRef = doc(FIRESTORE_DB, 'products', slug);
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    return { id: productSnapshot.id, ...productSnapshot.data() };
  } else {
    return {};
  }
};

function ProductSingle({product}:any) {
    return (
      <>
      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>See more Details</p>
                <h1>Single Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
      {/* single product */}
      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-img">
                <img src="assets/img/products/product-img-5.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>Green apples have polyphenols</h3>
                <p className="single-product-pricing">
                  <span>Per Kg</span> $50
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                  sint dignissimos, rem commodi cum voluptatem quae reprehenderit
                  repudiandae ea tempora incidunt ipsa, quisquam animi perferendis
                  eos eum modi! Tempora, earum.
                </p>
                <div className="single-product-form">
                  <form action="index.html">
                    <input type="number" placeholder={0} />
                  </form>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                  <p>
                    <strong>Categories: </strong>Fruits, Organic
                  </p>
                </div>
                <h4>Share:</h4>
                <ul className="product-share">
                  <li>
                    <a href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end single product */}
      {/* more products */}
      <div className="more-products mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  <span className="orange-text">Related</span> Products
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                  fuga quas itaque eveniet beatae optio.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src="/assets/img/products/product-img-1.jpg" alt="" />
                  </a>
                </div>
                <h3>Strawberry</h3>
                <p className="product-price">
                  <span>Per Kg</span> 85${" "}
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src="/assets/img/products/product-img-2.jpg" alt="" />
                  </a>
                </div>
                <h3>Berry</h3>
                <p className="product-price">
                  <span>Per Kg</span> 70${" "}
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="single-product.html">
                    <img src="/assets/img/products/product-img-3.jpg" alt="" />
                  </a>
                </div>
                <h3>Lemon</h3>
                <p className="product-price">
                  <span>Per Kg</span> 35${" "}
                </p>
                <a href="cart.html" className="cart-btn">
                  <i className="fas fa-shopping-cart" /> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end more products */}
    </>
    
       
    );
}
ProductSingle.getLayout = FontLayout


// export const getStaticPaths = async () => {
//   const  products =  await getProducts();

//   const paths =  products.map((product) => ({
//     params: { slug: product.id },
//   }))
//  //
//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
  try {
    const { params } = context;
    const { slug } = params;


    const product =  await getProduct (slug);

    // Log the fetched data on the server side
    console.log('Fetched data:', product);

    return {
      props: {
        product,
      },

    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        product: null,
      },
    };
  }
}

export default  ProductSingle;