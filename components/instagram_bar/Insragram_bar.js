import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import '/app/globals.css';
import insta1 from "/public/instagram_1.jpeg";
import insta2 from '/public/instagram_2.jpeg';
import insta3 from '/public/instagram_3.jpeg';
import insta4 from '/public/instagram_4.jpeg';
import insta5 from '/public/instagram_5.jpeg';
import insta6 from '/public/instagram_6.jpeg';

export default function Instagram_bar(){
    return(
        <>
         <div class="cs_instagram mt-4 mb-4">
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta1} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"35px", color:"black"}} icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta2} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"35px", color:"black"}} icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta3} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"35px", color:"black"}} icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta4} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"35px", color:"black"}} icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta5} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"35px", color:"black"}} icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" class="position-relative cs_instagram_item">
                  <div class="cs_instagram_thumb position-relative">
                    <Image src={insta6} 
                    alt="insta image"
                    height={100}
                    width={100}                    
                    ></Image>
                  </div>
                  <div class="cs_instagram_overlay position-absolute">
                  <FontAwesomeIcon style={{fontSize:"35px", color:"black"}} icon={faInstagram}></FontAwesomeIcon>
                  </div>
                </Link>
              </div>
        </>
    )
}