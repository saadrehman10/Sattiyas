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

export default function Search_blog(){
    return(
        <>
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
        </>
    )
}