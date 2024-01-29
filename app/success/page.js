import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function Success(){
    return(
        <>
        <nav><Navbar></Navbar><br></br><br></br><br></br></nav>
          <section>
            <div className="container">
              <div className="cs_height_80 cs_height_lg_60"></div>
              <div className="cs_shop_page_heading text-center">
                <h1 className="cs_fs_50 cs_bold text-black">Order Success</h1>
                <div className="cs_shop_breadcamp cs_medium">
                  <Link href="/">Home</Link>
                  <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464467C12.9763 0.269205 12.6597 0.269205 12.4645 0.464467C12.2692 0.659729 12.2692 0.976312 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53554L16.3536 4.35355ZM-4.37114e-08 4.5L16 4.5L16 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#5E5E5E"/>
                  </svg>            
                  <span>Success</span>
                </div>
              </div>
              <div className="cs_height_80 cs_height_lg_60"></div>
            </div>
          </section>
          <div className="container">
            <p className="m-0 text-center cs_primary_color cs_medium">Thank you! Your order has been received.</p>
            <div className="cs_height_95 cs_height_lg_50"></div>
            <ul className="cs_order-summery">
              <li>
                <p>Order Number:</p>
                <h3>251501</h3>
              </li>
              <li>
                <p>Date:</p>
                <h3>September 11, 2023</h3>
              </li>
              <li>
                <p>Total:</p>
                <h3>$605.00</h3>
              </li>
              <li>
                <p>Payment method:</p>
                <h3>COD</h3>
              </li>
            </ul>
            <div className="cs_height_50 cs_height_lg_30"></div>
            <div className="cs_shop-card">
              <h2 className="cs_fs_21 text-black">Order details</h2>
              <table className="border-bottom-0">
                <tbody>
                    <tr className="cs_semi_bold">
                      <td>Products</td>
                      <td className="text-end">Amount</td>
                    </tr>
                    <tr>
                      <td>Awesome men T-shirt x 1</td>
                      <td className="text-end">$20.00</td>
                    </tr>
                    <tr>
                      <td>Future AI robot toy x 1</td>
                      <td className="text-end">$550.00</td>
                    </tr>
                    <tr>
                      <td>Hemp seed shampoo x 1</td>
                      <td className="text-end">$35.00</td>
                    </tr>
                    <tr>
                      <td className="cs_semi_bold">Subtotal</td>
                      <td className="text-end">$605.00</td>
                    </tr>
                    <tr>
                      <td className="cs_semi_bold">Payment method</td>
                      <td className="text-end">Cash on delivery</td>
                    </tr>
                    <tr className="cs_semi_bold">
                      <td className="pb-0">Total</td>
                      <td className="text-end pb-0">$605.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <footer><Footer></Footer></footer>
        </>
    )
}