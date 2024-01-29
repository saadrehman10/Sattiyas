import Footer from "@/components/footer/Footer"
import Instagram_bar from "@/components/instagram_bar/Insragram_bar"
import Navbar from "@/components/navbar/Navbar"
import People_review from "@/components/people_review/People_review"

export default function Home() {
  return (
    <>
       {/* <Navbar></Navbar> */}
       <div>
       <People_review></People_review>
       
       <Instagram_bar></Instagram_bar>


       </div>
       
       <Footer></Footer>
    </>
      
  )
}
