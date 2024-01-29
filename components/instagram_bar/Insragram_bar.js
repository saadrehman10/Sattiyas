import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import '/app/globals.css';
import insta1 from "/public/instagram_1.jpg";
import insta2 from '/public/instagram_2.jpg';
import insta3 from '/public/instagram_3.jpg';
import insta4 from '/public/instagram_4.jpg';
import insta5 from '/public/instagram_5.jpg';
import insta6 from '/public/instagram_6.jpg';

export default function Instagram_bar(){
    return(
        <>
         <div class="cs_instagram">
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta1} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"30px", color:"grey"}} icon={faInstagram}></FontAwesomeIcon>
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    {/* <img src="assets/img/instagram_2.jpg" alt="Instagram"> */}
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    {/* <img src="assets/img/instagram_3.jpg" alt="Instagram"> */}
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                   {/*  <img src="assets/img/instagram_4.jpg" alt="Instagram"> */}
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    {/* <img src="assets/img/instagram_5.jpg" alt="Instagram"> */}
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    {/* <img src="assets/img/instagram_6.jpg" alt="Instagram"> */}
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </Link>
              </div>
        </>
    )
}