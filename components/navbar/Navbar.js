"use client"
import '/app/globals.css';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faMagnifyingGlass, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '/public/logo.svg'
import { useSelector } from 'react-redux';


export default function Navbar() {

    const cartData = useSelector(state => state)
    console.log(cartData)


    return (
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
                                                <Link href="about.html" class="cs_text_slide_btn">Learn More</Link>
                                            </span>
                                        </b>
                                        <b class="cs_text_slide cs_medium">
                                            <span>Big sale offer with 50%</span>
                                            <span>
                                                <Link href="/shop" class="cs_text_slide_btn">Learn More</Link>
                                            </span>
                                        </b>
                                        <b class="cs_text_slide cs_medium">
                                            <span>New arrival item for you</span>
                                            <span>
                                                <Link href="/shop" class="cs_text_slide_btn">Learn More</Link>
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
                                <Link class="cs_site_branding" href="/">
                                    <Image
                                        src={logo}
                                        alt='logo'
                                        height={60}
                                        width={110}
                                    ></Image>

                                </Link>
                            </div>
                            <div class="cs_main_header_center">
                                <div class="cs_nav cs_medium">
                                    <ul class="cs_nav_list">
                                        <li class="menu-item-has-children">
                                            <Link href="/">Home</Link>
                                            <ul>
                                                <li><Link href="/">Fashion V1</Link></li>
                                                <li><Link href="home-v2.html">Fashion V2</Link></li>
                                                <li><Link href="home-v3.html">Jewelry</Link></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children">
                                            <Link href="/shop">Product</Link>
                                            <ul>
                                                <li><Link href="/shop">All Product</Link></li>
                                                <li><Link href="shop_sidebar.html">Shop Sidebar</Link></li>
                                                <li><Link href="product_details.html">Product Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li class="menu-item-has-children">
                                            <Link href="">Pages</Link>
                                            <ul>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/blog_details">Blog Details</Link></li>
                                                <li><Link href="/cart">Cart</Link></li>
                                                <li><Link href="/checkout">Checkout</Link></li>
                                                <li><Link href="/success">Success</Link></li>
                                                <li><Link href="/wishlist">Wishlist</Link></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children cs_mega_menu">
                                            <Link href="">MegaMenu</Link>
                                            <ul class="cs_mega_wrapper">
                                                <li class="menu-item-has-children">
                                                    <Link href="">Category One</Link>
                                                    <ul>
                                                        <li><Link href="/shop">Women's Clothing</Link></li>
                                                        <li><Link href="/shop">Men's Clothing</Link></li>
                                                        <li><Link href="/shop">Kids' Clothing</Link></li>
                                                        <li><Link href="/shop">Shoes (Men, Women, Kids)</Link></li>
                                                        <li><Link href="/shop">Accessories (e.g., hats, scarves)</Link></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link href="">Category Two</Link>
                                                    <ul>
                                                        <li><Link href="/shop">Activewear</Link></li>
                                                        <li><Link href="/shop">Formal Wear</Link></li>
                                                        <li><Link href="/shop">Casual Wear</Link></li>
                                                        <li><Link href="/shop">Outerwear (Jackets, Coats)</Link></li>
                                                        <li><Link href="/shop">Swimwear</Link></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link href="">Category Three</Link>
                                                    <ul>
                                                        <li><Link href="/shop">Lingerie and Sleepwear</Link></li>
                                                        <li><Link href="/shop">Maternity Wear</Link></li>
                                                        <li><Link href="/shop">Plus Size Clothing</Link></li>
                                                        <li><Link href="/shop">Sustainable Fashion</Link></li>
                                                        <li><Link href="/shop">Vintage/Second-hand Clothing</Link></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <Link href="">Category Four</Link>
                                                    <ul>
                                                        <li><Link href="/shop">Sports Apparel</Link></li>
                                                        <li><Link href="/shop">Workwear</Link></li>
                                                        <li><Link href="/shop">Designer Clothing</Link></li>
                                                        <li><Link href="/shop">Seasonal Collections</Link></li>
                                                        <li><Link href="/shop">Costumes and Cosplay</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link href="contact.html">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cs_main_header_right">
                                <div class="cs_header_action">
                                    <button type="button" class="cs_action_icon cs_header_search_btn">
                                        <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faMagnifyingGlass}></FontAwesomeIcon>
                                    </button>
                                    <Link href="/login" class="cs_action_icon cs_modal_btn"  >
                                        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faCircleUser}></FontAwesomeIcon>
                                    </Link>
                                    <Link href="/cart" class="cs_action_icon">
                                        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faShoppingCart}></FontAwesomeIcon>
                                    </Link>
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
                                <button class="cs_header_search_close" type="button"><FontAwesomeIcon style={{ fontSize: "20px", color: "black" }} icon={faXmark}></FontAwesomeIcon></button>
                            </div>
                            <form action="#" class="cs_header_search_form">
                                <input type="text" placeholder="Search..."></input>
                                <button type="submit">
                                    <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}