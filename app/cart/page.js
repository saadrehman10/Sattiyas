"use client"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import cartProduct1 from '/public/cart-product-1.jpeg';
import cartProduct2 from '/public/cart-product-2.jpeg';
import cartProduct3 from '/public/cart-product-3.jpeg';
import { faAngleDown, faAngleUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/Layout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Cart() {

  const cart = useSelector(state => state.cart.cart);
  const [modifiedCart, setModifiedCart] = useState([]);


  useEffect(() => {
    console.log(cart)
    const newCart = cart.map(item => ({
      ...item,
      quantity: 1,
      initialPrice:item.price,
      
    }));
    setModifiedCart(newCart);
  }, [cart])


  const updateQuantity = (productId) => {
    setModifiedCart(prevCart =>
      prevCart.map(item =>
        item._id === productId ? { ...item, quantity: item.quantity + 1, price: item.price * 2 } : item
      )
    );
  };
  const decreaseQuantity = (productId) => {
    // setModifiedCart(prevCart =>
    //   prevCart.map(item => {
    //     if (item._id === productId) {
    //       const newQuantity = Math.max(1, item.quantity - 1); // Ensure quantity is at least 1
    //       return {
    //         ...item,
    //         quantity: newQuantity,
    //         price: item.price - item.initialPrice // Recalculate price based on new quantity
    //       };
    //     } else {
    //       return item;
    //     }
    //   })
    // );
  };
  
  
  return (
    <Layout>


      <section className="mt-5 pt-5">
        <div className="container mt-80">
          <div className="cs_height_80 cs_height_lg_60"></div>
          <div className="cs_shop_page_heading text-center">
            <h1 className="cs_fs_50 cs_bold text-black">Shopping Cart</h1>
            <div className="cs_shop_breadcamp cs_medium">
              <Link href="/index">Home</Link>
              <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464467C12.9763 0.269205 12.6597 0.269205 12.4645 0.464467C12.2692 0.659729 12.2692 0.976312 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35355ZM-4.37114e-08 4.5L16 4.5L16 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#5E5E5E" />
              </svg>
              <span>Cart</span>
            </div>
          </div>
          <div className="cs_height_80 cs_height_lg_60"></div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="table-responsive">
              <table className="cs_cart_table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    modifiedCart?.map((item) => {
                      return (
                        <tr>
                          <td>
                            <div className="cs_cart_table_media">
                              <img
                                src={item?.imageUrl}
                                alt="cart_Product "
                                height={50}
                                width={50}
                              />
                              {/*  <img src="assets/img/cart-product-1.jpeg" alt="Thumb"> */}
                              <h3>{item?.name}</h3>
                            </div>
                          </td>
                          <td>{item?.price}</td>
                          <td>
                            <div className="cs_quantity">
                              <button onClick={()=>updateQuantity(item._id)} className="cs_quantity_btn cs_increment"><FontAwesomeIcon style={{ fontSize: '15px' }} icon={faAngleUp}></FontAwesomeIcon></button>
                              <span className="cs_quantity_input">{item?.quantity}</span>
                              <button onClick={()=>decreaseQuantity(item._id)} className="cs_quantity_btn cs_decrement"><FontAwesomeIcon style={{ fontSize: '15px' }} icon={faAngleDown}></FontAwesomeIcon></button>
                            </div>
                          </td>
                          <td>{item.price}</td>
                          <td className="text-center">
                            <button className="cs_cart-table-close"><FontAwesomeIcon style={{ fontSize: '15px' }} icon={faXmark}></FontAwesomeIcon></button>
                          </td>
                        </tr>
                      )
                    })
                  }


                </tbody>
              </table>
            </div>
            <div className="cs_height_30 cs_height_lg_30"></div>
          </div>
          <div className="col-xl-4">
            <div className="cs_shop-side-spacing">
              <div className="cs_shop-card">
                <h2 className="cs_fs_21 cs_medium">Coupon Code</h2>
                <form action="#" className="cs_coupon-doce-form">
                  <input type="text" placeholder="Coupon Code"></input>
                  <button className="cs_product_btn cs_color1 cs_semi_bold">Apply</button>
                </form>
                <div className="cs_height_30 cs_height_lg_30"></div>
                <h2 className="cs_fs_21 cs_medium">Cart Totals</h2>
                <table className="cs_medium">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td className="text-end">$605.00</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td className="text-end">$605.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cs_height_30 cs_height_lg_30"></div>
                <Link href="/checkout" className="cs_btn cs_style_1 cs_fs_16 cs_medium w-100">Procced To Checkout</Link>
              </div>
              <div className="cs_height_30 cs_height_lg_30"></div>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  )
}