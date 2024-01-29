import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import cartProduct1 from '/public/cart-product-1.jpeg';
import cartProduct2 from '/public/cart-product-2.jpeg';
import cartProduct3 from '/public/cart-product-3.jpeg';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Wishlist(){
    return(
        <>
          <nav ><Navbar></Navbar><br></br><br></br><br></br></nav>
        
           <section>
              <div className="container">
                <div className="cs_height_80 cs_height_lg_60"></div>
                <div className="cs_shop_page_heading text-center">
                  <h1 className="cs_fs_50 cs_bold">Shopping Cart</h1>
                  <div className="cs_shop_breadcamp cs_medium">
                    <Link  href="/">Home</Link>
                    <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464467C12.9763 0.269205 12.6597 0.269205 12.4645 0.464467C12.2692 0.659729 12.2692 0.976312 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35355ZM-4.37114e-08 4.5L16 4.5L16 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#5E5E5E"/>
                    </svg>            
                    <span>Cart</span>
                  </div>
                </div>
                <div className="cs_height_80 cs_height_lg_60"></div>
              </div>
            </section> 

            <div className="container">
              <div className="table-responsive">
                <table className="cs_cart_table cs_size1">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Stock Status</th>
                      <th>Remove</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="cs_cart_table_media">
                          <Image
                          src={cartProduct1}
                          alt="Cart_Product"
                          height={80}
                          width={96}
                          ></Image>
                          <h3>Pure black cotton men T-shirt</h3>
                        </div>
                      </td>
                      <td>$300.00</td>
                      <td>In stock</td>
                      <td className="text-center">
                        <button className="cs_cart-table-close"><FontAwesomeIcon style={{fontSize:'15px'}} icon={faXmark}></FontAwesomeIcon></button>
                      </td>
                      <td className="text-end"><Link  href="/cart" className="cs_btn cs_style_1 cs_type_1 cs_fs_16 cs_medium">Add to Cart</Link></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cs_cart_table_media">
                        <Image
                          src={cartProduct2}
                          alt="Cart_Product"
                          height={80}
                          width={96}
                          ></Image>
                          <h3>Satin silk sleeping were</h3>
                        </div>
                      </td>
                      <td>$300.00</td>
                      <td>In stock</td>
                      <td className="text-center">
                        <button className="cs_cart-table-close"><FontAwesomeIcon style={{fontSize:'15px'}} icon={faXmark}></FontAwesomeIcon></button>
                      </td>
                      <td className="text-end"><Link  href="/cart" className="cs_btn cs_style_1 cs_type_1 cs_fs_16 cs_medium">Add to Cart</Link></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="cs_cart_table_media">
                        <Image
                          src={cartProduct3}
                          alt="Cart_Product"
                          height={80}
                          width={96}
                          ></Image>
                          <h3>Top gorgeous woman dress</h3>
                        </div>
                      </td>
                      <td>$300.00</td>
                      <td>In stock</td>
                      <td className="text-center">
                        <button className="cs_cart-table-close"><FontAwesomeIcon style={{fontSize:'15px'}} icon={faXmark}></FontAwesomeIcon></button>
                      </td>
                      <td className="text-end"><Link  href="/cart" className="cs_btn cs_style_1 cs_type_1 cs_fs_16 cs_medium">Add to Cart</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <footer><Footer></Footer></footer>

        </>
    )
}