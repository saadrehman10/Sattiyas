import Footer from "@/components/footer/Footer";
import Instagram_bar from "@/components/instagram_bar/Insragram_bar";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
                                <i className="fa-solid fa-arrow-right"></i>
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
                                <i className="fa-solid fa-arrow-right"></i>
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
                                <i className="fa-solid fa-arrow-right"></i>
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
                                <i className="fa-solid fa-arrow-right"></i>
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
                                <i className="fa-solid fa-arrow-right"></i>
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
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="col-lg-4 text-black">
                      <div className="cs_blog_sidebar">
                        <div className="cs_sidebar_widget cs_search">
                          <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">Search Blog</h3>
                          <div className="cs_search_box">
                            <input type="text" placeholder="Search..."></input>
                            <span className="cs_search_icon">
                             <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </span>
                          </div>
                        </div>
                        <div className="cs_sidebar_widget">
                          <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">Categories</h3>
                          <ul className="cs_category_list">
                            <li><Link href="#"  className="text-black">Fashion (2)</Link></li>
                            <li><Link href="#"  className="text-black">Style Tips (1)</Link></li>
                            <li><Link href="#"  className="text-black">Jewelry (5)</Link></li>
                            <li><Link href="#"  className="text-black">Accessories (1)</Link></li>
                            <li><Link href="#"  className="text-black">Dresses (2)</Link></li>
                            <li><Link href="#"  className="text-black">Beauty (4)</Link></li>
                          </ul>
                        </div>
                        <div className="cs_sidebar_widget">
                          <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">Latest Blog</h3>
                          <div className="cs_post cs_style_4">
                            <Link href="/blog_details" className="cs_post_thumb">
                            <Image
                            src={post1}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            ></Image>
                            </Link>
                            <div className="cs_post_info">
                              <h4 className="cs_post_title cs_fs_18 cs_medium"><Link href="/blog_details"  className="text-black">Mastering the art of...</Link></h4>
                              <div className="cs_post_meta">20 Dec 2023</div>
                            </div>
                          </div>
                          <div className="cs_post cs_style_4">
                            <Link href="/blog_details" className="cs_post_thumb">
                            <Image
                            src={post2}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            ></Image>
                            </Link>
                            <div className="cs_post_info">
                              <h4 className="cs_post_title cs_fs_18 cs_medium"><Link href="/blog_details"  className="text-black">Redefining style with...</Link></h4>
                              <div className="cs_post_meta">20 Dec 2023</div>
                            </div>
                          </div>
                          <div className="cs_post cs_style_4">
                            <Link href="/blog_details" className="cs_post_thumb">
                            <Image
                            src={post3}
                            alt="blog_pst_image"
                            height={300}
                            width={300}
                            ></Image>
                            </Link>
                            <div className="cs_post_info">               
                              <h4 className="cs_post_title cs_fs_18 cs_medium">
                                <Link href="/blog_details"  className="text-black">Tips for mixing and...</Link>
                              </h4>
                              <div className="cs_post_meta">20 Dec 2023</div>
                            </div>
                          </div>
                        </div>
                        <div className="cs_sidebar_widget">
                          <div className="cs_sidebar_tags">
                            <h3 className="cs_sidebar_widget_title cs_fs_21 cs_semibold">Tags</h3>
                            <div className="cs_tags">
                              <Link href="#" className="cs_tag_link text-black">Beauty</Link>
                              <Link href="#" className="cs_tag_link text-black">Women</Link>
                              <Link href="#" className="cs_tag_link text-black">Trend</Link>
                              <Link href="#" className="cs_tag_link text-black">Fashion</Link>
                              <Link href="#" className="cs_tag_link text-black">Minimal</Link>
                              <Link href="#" className="cs_tag_link text-black">Sports</Link>
                              <Link href="#" className="cs_tag_link text-black">Cloths</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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