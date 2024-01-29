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
        speed: 500,
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
        user: "farooq Ahmad",
        location: "From London",
        avatar: user,
        },
        {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "akil Ahmad",
        location: "From London",
        avatar: user,
        },
        {
        text: "Shopping at Sattiyas has been an absolute delight! I've had the pleasure of being a customer for the past year, and I can confidently say that this is my go-to online shopping destination. Highly recommend!",
        user: "saad Ahmad",
        location: "From London",
        avatar: user,
        },

        // Add more testimonials here
    ];

    return(
        <>
           <section className="cs_gray_bg">
      {/* Your existing HTML structure */}
      <div className="cs_slider position-relative">
        <div className="cs_slider_container">
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
        </div>
        {/* Your existing arrow and pagination components */}
      </div>
    </section>
            

        </>
    )
}