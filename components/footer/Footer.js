import '/app/globals.css';
import React from "react";
import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo_dark from '../../public/logo_dark.svg';
import payment_method from '../../public/payment_method.svg';

export default function Footer(){
    return(
        
        <>
            <footer className='cs_footer cs_style_1'>
                <div className='cs_height_130 cs_height_lg_80'></div>
                <div className='styles.container'>
                <div className='cs_footer_main'>
                    <div className='row'>
                    <div className='col-xxl-3 col-lg-3'>
                        <div className='cs_text_widget cs_footer_widget'>
                          <Image
                            src={logo_dark}
                            alt=".Logo"
                            height={60}
                            width={120}
                          />  
                        <p>Discover endless delights your one stop eCommerce destination.</p>
                        <Image
                            src={payment_method}
                            alt="payment"
                            height={70}
                            width={300}
                          />  
                        </div>
                    </div>
                    <div className='col-xxl-7 offset-xxl-2 offset-lg-1 col-lg-8'>
                        <div className='row'>
                        <div className="col-md-4">
                            <div className="cs_footer_widget cs_menu_widget">
                            <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">Get to know</h3>
                            <ul>
                                <li><Link href="/about" style={{color:"grey"}}>About Us</Link></li>
                                <li><Link href="/shop" style={{color:"grey"}}>Product</Link></li>
                                <li><Link href="/blog_details" style={{color:"grey"}}>Press</Link></li>
                                <li><Link href="/blog" style={{color:"grey"}}>Blog</Link></li>
                                <li><Link href="/contact" style={{color:"grey"}}>Contact Us</Link></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cs_footer_widget cs_menu_widget">
                            <h3 className="cs_footer_widget_title cs_fs_21 cs_semibold">Customer Service</h3>
                            <ul >
                                <li ><Link href="#" style={{color:"grey"}}>Help Center</Link></li>
                                <li><Link href="#" style={{color:"grey"}}>Shipping & Delivery</Link></li>
                                <li><Link href="#" style={{color:"grey"}}>Exchange & Return</Link></li>
                                <li><Link href="#" style={{color:"grey"}}>Payment Method</Link></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cs_footer_widget cs_menu_widget">
                            <h3 className=" first-letter:${stytles.cs_footer_widget_title} cs_fs_21 cs_semibold">Contact Information</h3>
                            <ul className="cs_contact_info">
                                <li>Call : +92 (300) 745 555</li>
                                <li>Email : info@sattiyas.com</li>
                                <li>Mon – Fri : 11 am – 9 pm</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='cs_footer_bottom'>
                    <div>
                    <p className='cs_copywrite_text'>Copyright & 2023, All rights reserved.</p>
                    </div>
                    <div>
                    <ul className='cs_footer_menu_widget_2'>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms of Use</Link></li>
                        <li><Link href="#">Legal</Link></li>
                    </ul>
                    </div>
                    <div>
                    <div className='cs_social_links'>
                    <div className='cs_social_links'>
                        <Link href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon style={{fontSize:"20px", color:"grey"}} icon={faInstagram}></FontAwesomeIcon></Link>
                        <Link href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon style={{fontSize:"20px",color:"grey"}} icon={faFacebook}></FontAwesomeIcon></Link>
                        <Link href="https://twitter.com/" target="_blank"><FontAwesomeIcon style={{fontSize:"20px",color:"grey"}} icon={faTwitter}></FontAwesomeIcon></Link>
                        <Link href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon style={{fontSize:"20px",color:"grey"}} icon={faYoutube}></FontAwesomeIcon></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
            </footer>
  
        </>
    )
}