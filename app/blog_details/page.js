import Footer from "@/components/footer/Footer";
import Instagram_bar from "@/components/instagram_bar/Insragram_bar";
import Navbar from "@/components/navbar/Navbar";
import Search_blog from "@/components/search_blog/Search_blog";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faTwitter,faLinkedinIn,faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons";
import post_detail from '/public/post_details.jpg';
import auther from '/public/author.png';
import Layout from "@/components/Layout";


export default function Blog_details(){
    return(
        <Layout>
       
        
          <section>
            <div className="cs_height_140 cs_height_lg_80"></div>
            <div className="container">
              <div className="row cs_gap_y_70">
                <div className="col-lg-8">
                  <div className="cs_post_details">
                    <div className="cs_post_details_meta cs_fs_14">
                      <span>JANUARY 13, 2023</span>
                      <span>By <Link href="#" className="cs_post_subtitle mb-0">Jhon Bentham</Link></span>
                    </div>
                    <h1 className='text-black'>Mastering the art of wardrobe manage essentials</h1>
                    <Image
                    src={post_detail}
                    alt="Post_detail"
                    height={576}
                    width={872}
                    ></Image>
                    <h2 className='text-black'>Introduction</h2>
                    <p>In a world where our closets can overflow with clothes, finding a sense of style and simplicity can be a daunting task. That's where the concept of a capsule wardrobe comes to the rescue. This blog will guide you through the art of curating your own capsule wardrobe and mastering the essentials for a more effortless and sustainable approach to fashion.</p>
                    <h2 className='text-black'>Chapter 1: What Is a Capsule Wardrobe?</h2>
                    <ul>
                      <li>Define the concept of a capsule wardrobe.</li>
                      <li>Understand the benefits of having a capsule wardrobe, including saving time and money.</li>
                      <li>Explore the history and origin of the term.</li>
                    </ul>
                    <h2 className='text-black'>Chapter 2: Building Your Capsule Wardrobe</h2>
                    <ul>
                      <li>Discuss the key components of a capsule wardrobe, such as timeless basics and statement pieces.</li>
                      <li>Provide tips for decluttering your current wardrobe.</li>
                      <li>Explain how to create a versatile, mix-and-match collection of clothing.</li>
                    </ul>
                    <h2 className='text-black'>Chapter 3: Choosing Your Essentials</h2>
                    <ul>
                      <li>Break down the must-have pieces for men and women, including classic clothing items like a white shirt, well-fitting jeans, and a versatile blazer.</li>
                      <li>Emphasize the importance of quality over quantity in selecting essentials.</li>
                    </ul>
                    <h2 className='text-black'>Chapter 4: Personalizing Your Capsule Wardrobe</h2>
                    <ul>
                      <li>Discuss how to incorporate your unique style into your capsule wardrobe.</li>
                      <li>Offer suggestions for adding pops of color, accessories, and individuality.</li>
                    </ul>
                    <h2 className='text-black'>Chapter 5: Maintaining and Updating Your Capsule Wardrobe</h2>
                    <ul>
                      <li>Share tips on how to keep your wardrobe fresh and relevant season after season.</li>
                      <li>Discuss the sustainable aspect of owning fewer, high-quality items.</li>
                    </ul>
                    <h2 className='text-black'>Conclusion:</h2>
                    <p>Mastering the art of wardrobe essentials through a capsule wardrobe is not only a game-changer for your style but also a mindful approach to fashion. It's about curating a collection that truly reflects your personality and values while simplifying your daily decisions. <br></br>Join us on this journey of style and simplicity as we explore the world of capsule wardrobes. Your wardrobe will thank you, and you'll discover that less truly can be more when it comes to fashion.</p>
                  </div>
                  <div className="cs_height_40 cs_height_lg_40"></div>
                  <div className="cs_post_details_bottom">
                    <div className="cs_post_details_tags_wrap">
                      <h4 className="cs_fs_16">Tags: </h4>
                      <div className="cs_post_details_tags">
                        <Link href="#" className="tag-cloud-link">Fashion, </Link>
                        <Link href="#" className="tag-cloud-link"> New, </Link>
                        <Link href="#" className="tag-cloud-link">Trend</Link>
                      </div>
                    </div>
                    <div className="cs_post_details_share_wrap">
                      <h4 className="cs_fs_16">Share: </h4>
                      <div className="cs_post_details_share">
                        <Link href="#"><FontAwesomeIcon style={{fontSize:"15px", color:"grey"}} icon={faLinkedinIn}></FontAwesomeIcon></Link>
                        <Link href="#"><FontAwesomeIcon style={{fontSize:"15px", color:"grey"}} icon={faTwitter}></FontAwesomeIcon></Link>
                        <Link href="#"><FontAwesomeIcon style={{fontSize:"15px", color:"grey"}} icon={faFacebook}></FontAwesomeIcon></Link>
                      </div>
                    </div>
                  </div>
                  <div className="cs_height_80 cs_height_lg_60"></div>
                  <div className="cs_author_card">
                    <div className="cs_author_thumb">
                      <Image
                      src={auther}
                      alt="auther"
                      height={150}
                      width={150}
                      ></Image>
                    </div>
                    <div className="cs_author_info">
                      <h3 className="cs_author_title cs_fs_21 cs_semibold">Jhon Bentham</h3>
                      <p>Hi, my name is Anthony kuber. I am artist and fashion designer. <br></br>I love to travel and writing blogging.</p>
                      <div className="cs_author_social">
                        <Link href="#" className="cs_center">
                        <FontAwesomeIcon style={{fontSize:"15px", color:"black"}} icon={faLinkedinIn}></FontAwesomeIcon>
                        </Link>
                        <Link href="#" className="cs_center">
                        <FontAwesomeIcon style={{fontSize:"15px", color:"black"}} icon={faTwitter}></FontAwesomeIcon>
                        </Link>
                        <Link href="#" className="cs_center">
                        <FontAwesomeIcon style={{fontSize:"15px", color:"black"}} icon={faYoutube}></FontAwesomeIcon>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                  <div className="cs_comment_heading">
                    <h2 className="cs_fs_37 cs_semibold mb-0">Write your opinion</h2>
                    <div className="cs_height_10 cs_height_lg_10"></div>
                    <p className="cs_section_subtitle mb-0">Your email address will not be published. Required fields are marked *</p>
                    <div className="cs_height_35 cs_height_lg_35"></div>
                  </div>
                  <form className="row cs_gap_y_24">
                    <div className="col-lg-12">
                      <textarea cols="30" rows="7" className="cs_form_field" placeholder="Write Your Comment *"></textarea>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="cs_form_field" placeholder="Your name *"></input>
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="cs_form_field" placeholder="Your email *"></input>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_check">
                        <input className="form-check-input" id="check" type="checkbox"></input>
                        <label className="form-check-label m-0" for="check">
                        Save my name, email, and website in this browser for the next time I comment.</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="cs_btn cs_style_1 cs_fs_16 cs_medium" type="submit">Post Comment</button>
                    </div>
                  </form>
                </div>
                <Search_blog></Search_blog>
              </div>
            </div>
            <div className="cs_height_140 cs_height_lg_80"></div>
          </section>
          <section>
            <Instagram_bar></Instagram_bar>
          </section>
        
        </Layout>
    )

}