import { collection, getDocs, limit, query } from "firebase/firestore";
import FontLayout from "../demo/components/FontLayout";
import { FIRESTORE_DB } from "../firebase.config";
import Link from "next/link";
import { truncateStringToWords } from "../lib/utils";



export const loadHeaders = async () => {
  const products:any=[];
  const productRef=collection(FIRESTORE_DB,'headers')
  const querySnapshot = await getDocs(productRef);
  querySnapshot.forEach((doc)=>{
    products.push({
      id:doc.id,
      ...doc.data()
    })
  })

    return products
}

export const loadProducts = async () => {
  const products:any=[];
  const productRef=collection(FIRESTORE_DB,'products')
  const q = query(productRef, limit(3));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    products.push({
      id:doc.id,
      ...doc.data()
    })
  })

    return products
}


const loadLatestAbout=async()=>{
  let about:any={};
  const productRef=collection(FIRESTORE_DB,'about')
  const q = query(productRef, limit(1));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    about={
      id:doc.id,
      ...doc.data()
    }

  })
  

    return about
}


const loadLatestBlog=async()=>{
  let blogs:any=[];
  const productRef=collection(FIRESTORE_DB,'posts')
  const q = query(productRef, limit(3));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    blogs.push({
      id:doc.id,
      ...doc.data()
    })

  })
  

    return blogs
}



const loadTestimonials=async()=>{
  const testimonials:any=[];
  const productRef=collection(FIRESTORE_DB,'testimonials')
  const q = query(productRef, limit(3));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    testimonials.push({
      id:doc.id,
      ...doc.data()
    })
  })

    return testimonials
}


const loadLatestContact= async()=>{

  let contact:any={};
  const productRef=collection(FIRESTORE_DB,'contact')
  const q = query(productRef, limit(1));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc)=>{
    contact={
      id:doc.id,
      ...doc.data()
    }

  })

    return contact

}


const Home=({headers,testimonials,products,about,contact,blogs})=>{
  return (
<>
 {/* hero area */}
 <div style={{ height: '100vh', overflow: 'hidden' }}>
  <>
  {/* home page slider */}
  <div className="homepage-slider">
    {/* single home slider */}

    {headers.map((header,index)=>(
      <div key={header.id} className={`single-homepage-slider homepage-bg-${index+1}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
            <div className="hero-text">
              <div className="hero-text-tablecell">
                <p className="subtitle">Fresh &amp; Organic</p>
                <h1>{header.title}</h1>
                <div className="hero-btns">
                  <a href="shop.html" className="boxed-btn">
                    Fruit Collection
                  </a>
                  <a href="contact.html" className="bordered-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
   
  </div>
  {/* end home page slider */}
</>

  </div>
  {/* end hero area */}
  {/* features list section */}
  <div className="list-section pt-80 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="list-box d-flex align-items-center">
            <div className="list-icon">
              <i className="fas fa-shipping-fast" />
            </div>
            <div className="content">
              <h3>Free Shipping</h3>
              <p>When order over $75</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="list-box d-flex align-items-center">
            <div className="list-icon">
              <i className="fas fa-phone-volume" />
            </div>
            <div className="content">
              <h3>24/7 Support</h3>
              <p>Get support all day</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="list-box d-flex justify-content-start align-items-center">
            <div className="list-icon">
              <i className="fas fa-sync" />
            </div>
            <div className="content">
              <h3>Refund</h3>
              <p>Get refund within 3 days!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end features list section */}
  {/* product section */}
  <div className="product-section mt-150 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">
            <h3>
              <span className="orange-text">Our</span> Products
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              fuga quas itaque eveniet beatae optio.
            </p>
          </div>
        </div>
      </div>
      <div className="row">

        {products.map((product)=>(
         <div key={product.id} className="col-lg-4 col-md-6 text-center">
         <div className="single-product-item">
           <div className="product-image">
             <a href="single-product.html">
               <img src={product.image} alt="" />
             </a>
           </div>
           <h3>{product.name}</h3>
           <p className="product-price">
             <span>{product.description}</span> {product.price}${" "}
           </p>
           <a href="cart.html" className="cart-btn">
             <i className="fas fa-shopping-cart" /> Add to Cart
           </a>
         </div>
       </div>
        ))}
        

      </div>
      <div className="col-lg-12 text-center">
          <Link href="/products" className="boxed-btn">More Products</Link>
        </div>
    </div>
  </div>
  {/* end product section */}
  {/* cart banner section */}
  <section className="cart-banner pt-100 pb-100">
    <div className="container">
      <div className="row clearfix">
        {/*Image Column*/}
        <div className="image-column col-lg-6">
          <div className="image">
            <div className="price-box">
              <div className="inner-price">
                <span className="price">
                  <strong>30%</strong> <br /> off per kg
                </span>
              </div>
            </div>
            <img src="assets/img/a.jpg" alt="" />
          </div>
        </div>
        {/*Content Column*/}
        <div className="content-column col-lg-6">
          <h3>
            <span className="orange-text">Deal</span> of the month
          </h3>
          <h4>Hikan Strwaberry</h4>
          <div className="text">
            Quisquam minus maiores repudiandae nobis, minima saepe id, fugit
            ullam similique! Beatae, minima quisquam molestias facere ea.
            Perspiciatis unde omnis iste natus error sit voluptatem accusant
          </div>
          {/*Countdown Timer*/}
          <div className="time-counter">
            <div className="time-countdown clearfix" data-countdown="2020/2/01">
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Days
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Hours
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Mins
                </div>
              </div>{" "}
              <div className="counter-column">
                <div className="inner">
                  <span className="count">00</span>Secs
                </div>
              </div>
            </div>
          </div>
          <a href="cart.html" className="cart-btn mt-3">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end cart banner section */}
  {/* testimonail-section */}
  <div className="testimonail-section mt-150 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div className="testimonial-sliders">
          {testimonials.map((testimonail)=>(
            <div key={testimonail.id} className="single-testimonial-slider">
              <div className="client-avater">
                <img src={testimonail.image} alt="" />
              </div>
              <div className="client-meta">
                <h3>
                  {testimonail.name} <span>{testimonail.profession}</span>
                </h3>
                <p className="testimonial-body">
                   {testimonail.description} 
                </p>
                <div className="last-icon">
                  <i className="fas fa-quote-right" />
                </div>
              </div>
            </div>
          ))}
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end testimonail-section */}
  {/* advertisement section */}
  <div className="abt-section mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="abt-bg">
            <a
              href="https://www.youtube.com/watch?v=DBLlFWYcIGQ"
              className="video-play-btn popup-youtube"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="abt-text">
            <p className="top-sub">Since Year 1999</p>
            <h2>
              We are <span className="orange-text">Fruitkha</span>
            </h2>
            <p>
              Etiam vulputate ut augue vel sodales. In sollicitudin neque et
              massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget
              dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed,
              interdum velit. Nam eu molestie lorem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              facilis illo repellat veritatis minus, et labore minima mollitia
              qui ducimus.
            </p>
            <Link href="/about" className="boxed-btn mt-4">  know more</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end advertisement section */}
  {/* shop banner */}
  <section className="shop-banner">
    <div className="container">
      <h3>
        December sale is on! <br /> with big{" "}
        <span className="orange-text">Discount...</span>
      </h3>
      <div className="sale-percent">
        <span>
          Sale! <br /> Upto
        </span>
        50% <span>off</span>
      </div>
      <a href="shop.html" className="cart-btn btn-lg">
        Shop Now
      </a>
    </div>
  </section>
  {/* end shop banner */}
  {/* latest news */}
  <div className="latest-news pt-150 pb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">
            <h3>
              <span className="orange-text">Our</span> News
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              fuga quas itaque eveniet beatae optio.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
      {blogs.map((blog)=>(
        <div key={blog.id} className="col-lg-4 col-md-6">
          <div className="single-latest-news">
            <a href="single-news.html">
            <div className="latest-news-bg" style={{backgroundImage: `url(${blog.image})`}} />
            </a>
            <div className="news-text-box">
              <h3>
                <a href="single-news.html">
                  {blog.title}
                </a>
              </h3>
              <p className="blog-meta">
                <span className="author">
                  <i className="fas fa-user" /> Admin
                </span>
                <span className="date">
                  <i className="fas fa-calendar" /> 27 December, 2019
                </span>
              </p>
              <p className="excerpt">
              {truncateStringToWords(blog.description, 15)}
              
              </p>
                 <Link href="/blog/111" className="read-more-btn"> 
                 read more <i className="fas fa-angle-right" />
                 </Link>
            </div>
          </div>
        </div>
       ))}
       
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <Link href="/blog" className="boxed-btn"> More News</Link>
        </div>
      </div>
    </div>
  </div>

   {/* logo carousel */}
   <div className="logo-carousel-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="logo-carousel-inner">
            <div className="single-logo-item">
              <img src="assets/img/company-logos/1.png" alt="" />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/2.png" alt="" />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/3.png" alt="" />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/4.png" alt="" />
            </div>
            <div className="single-logo-item">
              <img src="assets/img/company-logos/5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end logo carousel */}
</>
  )
}

Home.getLayout = FontLayout


export async function getStaticProps() {
  try {
    const headers =  await loadHeaders();
    const products =  await loadProducts();
    const testimonials =  await loadTestimonials();
    const about =  await loadLatestAbout();
    const contact =  await loadLatestContact();
    const blogs =  await loadLatestBlog();

    // Log the fetched data on the server side
    

    return {
      props: {
        headers,
        testimonials,
        about,
        contact,
        products,
        blogs,
      },
      revalidate:10
  
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        headers: null,
      },

    };
  }
}
  

export default Home;