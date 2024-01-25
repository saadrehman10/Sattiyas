import '/app/globals.css';
import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '/public/logo.svg'


export default function Navbar(){
    return(
        <>
         <div class="cs_site_header cs_style_1 cs_color_1 cs_primary_bg cs_site_header_full_width cs_sticky_header">
            <div class="cs_top_header cs_primary_color">
            <div class="container-fluid">
                <div class="cs_top_header_in">
                <div class="cs_top_header_left">
                    <p class="cs_medium mb-0">Support : product@sattiyas.com</p>
                </div>
                <div class="cs_top_header_center">
                    <div class="cd-headline slide">
                    <span class="cd-words-wrapper text-center">
                        <b class="cs_text_slide cs_medium is-visible">
                        <span>100% Happy return policy</span>
                        <span>
                            <a href="about.html" class="cs_text_slide_btn">Learn More</a>
                        </span>
                        </b>
                        <b class="cs_text_slide cs_medium">
                        <span>Big sale offer with 50%</span>
                        <span>
                            <a href="shop.html" class="cs_text_slide_btn">Learn More</a>
                        </span>
                        </b>
                        <b class="cs_text_slide cs_medium">
                        <span>New arrival item for you</span>
                        <span>
                            <a href="shop.html" class="cs_text_slide_btn">Learn More</a>
                        </span>
                        </b>
                    </span>
                    </div>
                </div>
                <div class="cs_top_header_right">
                    <p class="cs_medium mb-0">Mon-Fri Open : 11:00 - 19:00</p>
                </div>
                </div>
            </div>
            </div>
            <div class="cs_main_header">
            <div class="container-fluid">
                <div class="cs_main_header_in">
                <div class="cs_main_header_left">
                    <a class="cs_site_branding" href="/">
                     <Image
                     src={logo}
                     alt='logo'
                     height={60}
                     width={110}
                     ></Image>   

                    </a>
                </div>
                <div class="cs_main_header_center">
                    <div class="cs_nav cs_medium">
                    <ul class="cs_nav_list">
                        <li class="menu-item-has-children">
                        <a href="index.html">Home</a>
                        <ul>
                            <li><a href="index.html">Fashion V1</a></li>
                            <li><a href="home-v2.html">Fashion V2</a></li>
                            <li><a href="home-v3.html">Jewelry</a></li>
                        </ul>
                        </li>
                        <li class="menu-item-has-children">
                        <a href="shop.html">Product</a>
                        <ul>
                            <li><a href="shop.html">All Product</a></li>
                            <li><a href="shop_sidebar.html">Shop Sidebar</a></li>
                            <li><a href="product_details.html">Product Details</a></li>
                        </ul>
                        </li>
                        <li><a href="blog.html">Blog</a></li>
                        <li class="menu-item-has-children">
                        <a href="">Pages</a>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/blog">Blog Details</a></li>
                            <li><a href="/cart">Cart</a></li>
                            <li><a href="/checkout">Checkout</a></li>
                            <li><a href="/success">Success</a></li>
                            <li><a href="/wishlist">Wishlist</a></li>
                        </ul>
                        </li>
                        <li class="menu-item-has-children cs_mega_menu">
                        <a href="">MegaMenu</a>
                        <ul class="cs_mega_wrapper">
                            <li class="menu-item-has-children">
                            <a href="">Category One</a>
                            <ul>
                                <li><a href="shop.html">Women's Clothing</a></li>
                                <li><a href="shop.html">Men's Clothing</a></li>
                                <li><a href="shop.html">Kids' Clothing</a></li>
                                <li><a href="shop.html">Shoes (Men, Women, Kids)</a></li>
                                <li><a href="shop.html">Accessories (e.g., hats, scarves)</a></li>
                            </ul>
                            </li>
                            <li class="menu-item-has-children">
                            <a href="">Category Two</a>
                            <ul>
                                <li><a href="shop.html">Activewear</a></li>
                                <li><a href="shop.html">Formal Wear</a></li>
                                <li><a href="shop.html">Casual Wear</a></li>
                                <li><a href="shop.html">Outerwear (Jackets, Coats)</a></li>
                                <li><a href="shop.html">Swimwear</a></li>
                            </ul>
                            </li>
                            <li class="menu-item-has-children">
                            <a href="">Category Three</a>
                            <ul>
                                <li><a href="shop.html">Lingerie and Sleepwear</a></li>
                                <li><a href="shop.html">Maternity Wear</a></li>
                                <li><a href="shop.html">Plus Size Clothing</a></li>
                                <li><a href="shop.html">Sustainable Fashion</a></li>
                                <li><a href="shop.html">Vintage/Second-hand Clothing</a></li>
                            </ul>
                            </li>
                            <li class="menu-item-has-children">
                            <a href="">Category Four</a>
                            <ul>
                                <li><a href="shop.html">Sports Apparel</a></li>
                                <li><a href="shop.html">Workwear</a></li>
                                <li><a href="shop.html">Designer Clothing</a></li>
                                <li><a href="shop.html">Seasonal Collections</a></li>
                                <li><a href="shop.html">Costumes and Cosplay</a></li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div class="cs_main_header_right">
                    <div class="cs_header_action">
                    <button type="button" class="cs_action_icon cs_header_search_btn">
                        <FontAwesomeIcon style={{fontSize:"18px"}} icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                    <a href="#" class="cs_action_icon cs_modal_btn"  >
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faCircleUser}></FontAwesomeIcon>
                    </a>
                    <a href="shop.html" class="cs_action_icon">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faShoppingCart}></FontAwesomeIcon>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="cs_header_search_wrap">
            <div class="container">
                <div class="cs_header_search_in">
                <div class="cs_hero_search_heading">
                    <h3>What are you looking for?</h3>
                    <button class="cs_header_search_close" type="button"><FontAwesomeIcon style={{fontSize:"20px",color:"black"}} icon={faXmark}></FontAwesomeIcon></button>
                </div>
                <form action="#" class="cs_header_search_form">
                    <input type="text" placeholder="Search..."></input>
                    <button type="submit">
                    <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        
        </>
    )
}