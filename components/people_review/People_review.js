'use client';
import Image from "next/image";
import "/app/globals.css";
import React, { Component } from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user from '/public/user.png';
import user2 from "/public/user2.png";
import user3 from "/public/user3.png";

export default function People_review(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Set to true if you want automatic sliding
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const testimonials = [
        {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "Bonal Ahmad",
        location: "From London",
        avatar: user,
        },
         {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "Bonal Ahmad",
        location: "From London",
        avatar: user,
        },
         {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "Bonal Ahmad",
        location: "From London",
        avatar: user,
        },
         {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "Bonal Ahmad",
        location: "From London",
        avatar: user,
        },
         {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "Bonal Ahmad",
        location: "From London",
        avatar: user,
        },
    ];   
    return (
        <>
       <section className="cs_gray_bg">
              <div className="cs_height_120 cs_height_lg_70"></div>
              <div className="container">
                <h2 className="cs_section_title cs_fs_50 cs_bold mb-0 text-center">What Our People Says</h2>
              </div>
              <div className="cs_height_35 cs_height_lg_30"></div>
              <div className="cs_slider position-relative">
               <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                        <div key={index} className="cs_slider_wrapper">
                            <div className="slick_slide_in">
                            <div className="cs_testimonial cs_style_1 text-center">
                                <blockquote className="cs_testimonial_text cs_fs_21 cs_semibold">
                                {testimonial.text}
                                </blockquote>
                                <div className="cs_testimonial_user">
                                <div className="cs_avatar_thumb">
                                    <Image src={testimonial.avatar} alt="user_avatar" height={20} width={20} />
                                </div>
                                <h4 className="cs_avatar_title cs_fs_21 cs_semibold mb-0">{testimonial.user}</h4>
                                <p className="cs_avatar_subtitle mb-0">{testimonial.location}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
               </Slider>
             
                <div className="cs_pagination cs_style_2 cs_hide_desktop"></div>
                
                </div>
            </section>

        </>
      
    );
}