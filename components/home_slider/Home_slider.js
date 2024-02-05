import Image from "next/image";
import Link from "next/link";

export default function Home_slider () {
    return(
        <>
            <section className="container-fluid">
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
                            src={hero5}
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
                            <div className="cs_hero_thumb">{/* <img src="assets/img/hero6.jpg" alt="Thumb"> */}</div>
                            <div className="cs_animated_text position-absolute">
                            {/* <img src="assets/img/animated_text.png" alt="Text Image"> */}
                            <span className="cs_text_light cs_accent_bg"></span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="cs_slides_numbers block">
                    <span className="active">01</span><span className="cs_slide_seperator"> / </span><span className="cs_total_slide"></span>
                </div>
                </div>
            </section>
        
        </>
    )
}