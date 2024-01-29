import Footer from "@/components/footer/Footer";
import Instagram_bar from "@/components/instagram_bar/Insragram_bar";
import Navbar from "@/components/navbar/Navbar";
import Search_blog from "@/components/search_blog/Search_blog";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import post1 from "/public/post1.jpg";
import post2 from "/public/post2.jpg";
import post3 from "/public/post3.jpg";
import post4 from "/public/post4.jpg";
import post5 from "/public/post5.jpg";
import post6 from "/public/post6.jpg";
import post7 from "/public/post7.jpg";





export default function Blog(){
    return(
        <>
        <nav>
          <Navbar></Navbar>
        </nav>
        
        <section >
                <div className="cs_height_140 cs_height_lg_80"></div>
                <div className="container">
                  <div className="row cs_gap_y_70">
                    <div className="col-lg-8">
                    <div className="row cs_gap_y_80">
                      <div className="col-md-6">
                        <div className="cs_post cs_style_1">
                          <Link href="/blog_details" className="cs_post_thumb cs_zoom ">
                            <Image
                            src={post1}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            className="cs_zoom_in w-100"
                            ></Image>
                          </Link>
                          <div className="cs_post_meta">
                            <p className="cs_post_meta_info mb-0 cs_fs_14">JANUARY 13, 2023</p>
                          </div>
                          <div className="cs_post_info">
                            <h3 className="cs_post_title cs_fs_28 cs_semibold">
                              <Link href="/blog_details" className="text-black">Mastering the art of wardrobe manage essentials</Link>
                            </h3>
                            <p className="cs_post_subtitle">Discover the key to simplifying your style with a capsule wardrobe. Learn how to curate a collection of versatile pieces that will elevate your fashion game...</p>
                            <Link href="/blog_details" className="cs_post_btn cs_fs_16 cs_medium cs_primary_color">
                              <span>Read More</span>
                              <span className="cs_btn_arrow cs_accent_color">
                                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cs_post cs_style_1">
                          <Link href="/blog_details" className="cs_post_thumb cs_zoom">
                          <Image
                            src={post2}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            className="cs_zoom_in w-100"
                            ></Image>
                          </Link>
                          <div className="cs_post_meta">
                            <p className="cs_post_meta_info mb-0 cs_fs_14">MARCH 18, 2023</p>
                          </div>
                          <div className="cs_post_info">
                            <h3 className="cs_post_title cs_fs_28 cs_semibold">
                              <Link href="/blog_details" className="text-black">Redefining style with eco-friendly choices</Link>
                            </h3>
                            <p className="cs_post_subtitle">Dive into the world of sustainable fashion and explore how your choices can have a positive impact on the planet. From eco-friendly fabrics to ethical brands...</p>
                            <Link href="/blog_details" className="cs_post_btn cs_fs_16 cs_medium cs_primary_color">
                              <span>Read More</span>
                              <span className="cs_btn_arrow cs_accent_color">
                               
                                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cs_post cs_style_1">
                          <Link href="/blog_details" className="cs_post_thumb cs_zoom">
                          <Image
                            src={post3}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            className="cs_zoom_in w-100"
                            ></Image>
                          </Link>
                          <div className="cs_post_meta">
                            <p className="cs_post_meta_info mb-0 cs_fs_14">JANUARY 13, 2023</p>
                          </div>
                          <div className="cs_post_info">
                            <h3 className="cs_post_title cs_fs_28 cs_semibold">
                              <Link href="/blog_details" className="text-black">Tips for mixing and matching patterns</Link>
                            </h3>
                            <p className="cs_post_subtitle">Pattern mixing can be a style statement, but it can also be intimidating. Learn the art of combining different patterns and prints to create unique and eye-catching outfits....</p>
                            <Link href="/blog_details" className="cs_post_btn cs_fs_16 cs_medium cs_primary_color">
                              <span>Read More</span>
                              <span className="cs_btn_arrow cs_accent_color">
                                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cs_post cs_style_1">
                          <Link href="/blog_details" className="cs_post_thumb cs_zoom">
                          <Image
                            src={post3}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            className="cs_zoom_in w-100"
                            ></Image>
                          </Link>
                          <div className="cs_post_meta">
                            <p className="cs_post_meta_info mb-0 cs_fs_14">MARCH 18, 2023</p>
                          </div>
                          <div className="cs_post_info">
                            <h3 className="cs_post_title cs_fs_28 cs_semibold">
                              <Link href="/blog_details" className="text-black">From workwear to wardrobe staple</Link>
                            </h3>
                            <p className="cs_post_subtitle">Take a journey through the history of denim and discover how it transformed from workwear into a fashion icon. Explore the latest denim trends...</p>
                            <Link href="/blog_details" className="cs_post_btn cs_fs_16 cs_medium cs_primary_color">
                              <span>Read More</span>
                              <span className="cs_btn_arrow cs_accent_color">
                               
                                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cs_post cs_style_1">
                          <Link href="/blog_details" className="cs_post_thumb cs_zoom">
                          <Image
                            src={post6}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            className="cs_zoom_in w-100"
                            ></Image>
                          </Link>
                          <div className="cs_post_meta">
                            <p className="cs_post_meta_info mb-0 cs_fs_14">JANUARY 13, 2023</p>
                          </div>
                          <div className="cs_post_info">
                            <h3 className="cs_post_title cs_fs_28 cs_semibold">
                              <Link href="/blog_details"  className="text-black">Exploring the World of Little Black Dresses</Link>
                            </h3>
                            <p className="cs_post_subtitle">The Little Black Dress (LBD) has been a fashion staple for decades. Discover the history, versatility, and the magic of the LBD in this timeless fashion piece...</p>
                            <Link href="/blog_details" className="cs_post_btn cs_fs_16 cs_medium cs_primary_color">
                              <span>Read More</span>
                              <span className="cs_btn_arrow cs_accent_color">
                                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cs_post cs_style_1">
                          <Link href="/blog_details" className="cs_post_thumb cs_zoom">
                          <Image
                            src={post7}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            className="cs_zoom_in w-100"
                            ></Image>
                          </Link>
                          <div className="cs_post_meta">
                            <p className="cs_post_meta_info mb-0 cs_fs_14">MARCH 18, 2023</p>
                          </div>
                          <div className="cs_post_info">
                            <h3 className="cs_post_title cs_fs_28 cs_semibold">
                              <Link href="/blog_details"  className="text-black">Elevate your fashion game with statement jewelry</Link>
                            </h3>
                            <p className="cs_post_subtitle">Learn how to choose, style, and wear bold accessories that express your unique personality and complete your look.accessorize Your Way to...</p>
                            <Link href="/blog_details" className="cs_post_btn cs_fs_16 cs_medium cs_primary_color">
                              <span>Read More</span>
                              <span className="cs_btn_arrow cs_accent_color">
                                <FontAwesomeIcon style={{fontSize:"20px"}} icon={faArrowRight}></FontAwesomeIcon>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                     <Search_blog></Search_blog>
                  </div>
                </div>
                <div className="cs_height_135 cs_height_lg_80"></div>
              </section>
              <section>
                <Instagram_bar></Instagram_bar>
              </section>
              <footer>
                <Footer></Footer>
              </footer>
              
              
        </>
        
    )
}