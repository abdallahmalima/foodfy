import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import { collection, limit, onSnapshot, query } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebase.config";
import Head from "next/head";
import Script from "next/script";

const FontLayout=function getLayout(page:any) {
    const pathname=usePathname()

    const [contact,setContact]=useState({})
    useEffect(() => {
        const unsubscribe=loadLatestContact()
    
          return ()=>{unsubscribe()}
    }, []);

    const [social,setSocial]=useState({})
    useEffect(() => {
        const unsubscribe=loadLatestSocial()
    
          return ()=>{unsubscribe()}
    }, []);

    const loadLatestContact=()=>{
        const productRef=collection(FIRESTORE_DB,'contact')
        const q = query(productRef, limit(1));
        const subscriber=onSnapshot(q,{
            next:(snapshot)=>{
              snapshot.docs.forEach((doc)=>{
                setContact({
                  id:doc.id,
                  ...doc.data()
                })
                
              })
              
            }
          })
    
          return subscriber
    }

    const loadLatestSocial=()=>{
      const productRef=collection(FIRESTORE_DB,'social')
      const q = query(productRef, limit(1));
      const subscriber=onSnapshot(q,{
          next:(snapshot)=>{
            snapshot.docs.forEach((doc)=>{
              setSocial({
                id:doc.id,
                ...doc.data()
              })
              
            })
            
          }
        })
  
        return subscriber
  }
    

    return (
      <>
      <Head>

  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Responsive Bootstrap4 Shop Template, Created by Imran Hossain from https://imransdesign.com/"
  />
  {/* title */}p<title>Fruitkha</title>
  {/* favicon */}
  <link rel="shortcut icon" type="image/png" href="assets/img/favicon.png" />
  {/* google font */}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
    rel="stylesheet"
  />
  {/* fontawesome */}
  <link rel="stylesheet" href="/assets/css/all.min.css" />
  {/* bootstrap */}
  <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
  {/* owl carousel */}
  <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
  {/* magnific popup */}
  <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
  {/* animate css */}
  <link rel="stylesheet" href="/assets/css/animate.css" />
  {/* mean menu css */}
  <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
  {/* main style */}
  <link rel="stylesheet" href="/assets/css/main.css" />
  {/* responsive */}
  <link rel="stylesheet" href="/assets/css/responsive.css" />



      </Head>

  {/* header */}
  <div className="top-header-area" id="sticker">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 text-center">
          <div className="main-menu-wrap">
            {/* logo */}
            <div className="site-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
            {/* logo */}
            {/* menu start */}
            <nav className="main-menu">
              <ul>
                <li className="current-list-item">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
      
                <li>
                <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/products">Product</Link>
                </li>
                <li>
                  <div className="header-icons">
                  <Link href="/cart" className="shopping-cart">
                     <i className="fas fa-shopping-cart" />
                  </Link>

                    <a className="mobile-hide search-bar-icon" href="#">
                      <i className="fas fa-search" />
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <a className="mobile-show search-bar-icon" href="#">
              <i className="fas fa-search" />
            </a>
            <div className="mobile-menu" />
            {/* menu end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end header */}
  {/* search area */}
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="close-btn">
            <i className="fas fa-window-close" />
          </span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">
                Search <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   
  {/* end search area */}
   {page}
  {/* footer */}
  <div className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-box about-widget">
            <h2 className="widget-title">About us</h2>
            <p>
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box get-in-touch">
            <h2 className="widget-title">Get in Touch</h2>
            <ul>
              <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
              <li>support@fruitkha.com</li>
              <li>+00 111 222 3333</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box pages">
            <h2 className="widget-title">Pages</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Shop</a>
              </li>
              <li>
                <a href="news.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="footer-box subscribe">
            <h2 className="widget-title">Subscribe</h2>
            <p>Subscribe to our mailing list to get the latest updates.</p>
            <form action="index.html">
              <input type="email" placeholder="Email" />
              <button type="submit">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end footer */}
  {/* copyright */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p>
            Copyrights © 2019 -{" "}
            <a href="https://imransdesign.com/">Imran Hossain</a>, All Rights
            Reserved.
            <br />
            Distributed By - <a href="https://themewagon.com/">Themewagon</a>
          </p>
        </div>
        <div className="col-lg-6 text-right col-md-12">
          <div className="social-icons">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
<Script src="/assets/js/jquery-1.11.3.min.js"/>
<Script src="/assets/bootstrap/js/bootstrap.min.js" />
<Script src="/assets/js/jquery.countdown.js"/>
<Script src="/assets/js/jquery.isotope-3.0.6.min.js"/>
<Script src="/assets/js/waypoints.js"/>
<Script src="/assets/js/jquery.magnific-popup.min.js"/>
<Script src="/assets/js/jquery.meanmenu.min.js"/>
<Script src="/assets/js/owl.carousel.min.js"/>
<Script src="/assets/js/sticker.js"/>
<Script src="/assets/js/main.js"/>
</>

    );
  };

  export default FontLayout;