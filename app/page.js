import Footer from "@/components/footer/Footer"
import Instagram_bar from "@/components/instagram_bar/Insragram_bar"
import Navbar from "@/components/navbar/Navbar"
import People_review from "@/components/people_review/People_review"
import Search_blog from "@/components/search_blog/Search_blog"
import Product_card from "@/components/product_card/Product_card"
import product2 from '/public/product2.png'


export default function Home() {
  return (
    <>
       
       <Product_card
       image={product2}
       price='556'
       discount='8'
       tital='Men black t-shirt'
       product_stock='33'
       product_discription='cotton black shirt only for men '
       ></Product_card>
      
    </>
      
  )
}
