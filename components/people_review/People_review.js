'use client';
import Image from "next/image";
import "/app/globals.css";
import React, { Component } from "react";
import Link from "next/link";
import { useState,useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import user from '/public/user.png';
import user2 from "/public/user2.png";
import user3 from "/public/user3.png";

export default function People_review(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <Image
            src={user}
            alt="First slide"
            height={500}
            width={1000}
            ></Image>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            src={user}
            alt="First slide"
            height={500}
            width={1000}
            ></Image>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            src={user}
            alt="First slide"
            height={500}
            width={1000}
            ></Image>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}