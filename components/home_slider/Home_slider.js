import Image from "next/image";
import Link from "next/link";
import hero2 from  '/public/hero2.jpg';
import animated_text from '/public/animated_text.png';
import React from "react";
import Slider from "react-slick";

export default function Home_slider () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return(
        <>
            <section className="container-fluid">
            <Slider {...settings}>
                    <div className="cs_slider position-relative">
                        <div className="cs_slider_container" data-autoplay="1" data-loop="1" data-speed="700" data-center="0"
                            data-slides-per-view="1" data-fade-slide="1">
                            <div className="cs_slider_wrapper">
                            <div className="slick_slide_in">
                                <div className="cs_hero cs_style_2 position-relative">
                                <div className="cs_hero_left">
                                    <div className="cs_hero_text">
                                    <h4 className="cs_hero_title_mini cs_fs_28">Up to 50% Off</h4>
                                    <h1 className="cs_hero_title cs_fs_67 cs_bold">Elegant men collection in summer season</h1>
                                    <a href="shop.html" className="cs_btn cs_style_1 cs_fs_16 cs_medium">See Collection</a>
                                    </div>
                                </div>
                                <div className="cs_hero_right">
                                    <div className="cs_hero_thumb">
                                    <Image
                                    src={hero2}
                                    alt="Thumb"
                                    height={1072}
                                    width={1140}                          
                                    ></Image>
                                    </div>
                                    <div className="cs_animated_text position-absolute">
                                    <Image
                                    src={animated_text}
                                    alt="animated_text"
                                    height={300}
                                    width={300}
                                    ></Image>
                                    <span className="cs_text_light cs_accent_bg"></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="slick_slide_in">
                                <div className="cs_hero cs_style_2 position-relative">
                                <div className="cs_hero_left">
                                    <div className="cs_hero_text">
                                    <h4 className="cs_hero_title_mini cs_fs_28">Up to 20% Off</h4>
                                    <h1 className="cs_hero_title cs_fs_67 cs_bold">Elegant woman collection in summer</h1>
                                    <a href="shop.html" className="cs_btn cs_style_1 cs_fs_16 cs_medium">See Collection</a>
                                    </div>
                                </div>
                                <div className="cs_hero_right">
                                    <div className="cs_hero_thumb">
                                    <Image
                                    src={hero2}
                                    alt="hero5"
                                    height={1072}
                                    width={1140}
                                    ></Image>
                                    </div>
                                    <div className="cs_animated_text position-absolute">
                                    <Image
                                    src={animated_text}
                                    alt="Animated Text"
                                    height={300}
                                    width={300}
                                    ></Image>
                                    <span className="cs_text_light cs_accent_bg"></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="slick_slide_in">
                                <div className="cs_hero cs_style_2 position-relative">
                                <div className="cs_hero_left">
                                    <div className="cs_hero_text">
                                    <h4 className="cs_hero_title_mini cs_fs_28">Up to 10% Off</h4>
                                    <h1 className="cs_hero_title cs_fs_67 cs_bold">Children collection in winter season</h1>
                                    <a href="shop.html" className="cs_btn cs_style_1 cs_fs_16 cs_medium">See Collection</a>
                                    </div>
                                </div>
                                <div className="cs_hero_right">
                                    <div className="cs_hero_thumb">
                                    <Image
                                    src={hero2}
                                    alt="Thumb"
                                    height={1072}
                                    width={1140}                          
                                    ></Image></div>
                                    <div className="cs_animated_text position-absolute">
                                    <Image
                                    src={animated_text}
                                    alt="Animated Text"
                                    height={300}
                                    width={300}
                                    ></Image>
                                    <span className="cs_text_light cs_accent_bg"></span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        </div>

                    </Slider>
                
            </section>
            <div className="cs_slides_numbers">
                    <span className="active">01</span><span className="cs_slide_seperator"> / </span><span className="cs_total_slide"></span>
            </div>
        
        </>
    )
}