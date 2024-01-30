import Image from "next/image"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";



export default function Product_card(props){
    return(
        <>
            <div class="cs_product_col container">
            <div class="cs_product cs_style_1">
                <div class="cs_product_thumb position-relative">
                    <Image
                    src={props.image}
                    alt="Product Image" class="w-100"
                    ></Image>
                <div class="cs_discount_badge cs_white_bg cs_fs_14 cs_primary_color position-absolute">-{props.discount}%</div>
                <div class="cs_cart_badge position-absolute">
                    <Link href="/wishlist" class="cs_cart_icon cs_accent_bg cs_white_color">
                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Link>
                    <Link href="/product_details" class="cs_cart_icon cs_accent_bg cs_white_color">
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </Link>
                </div>
                <Link href="/cart" class="cs_cart_btn cs_accent_bg cs_fs_16 cs_white_color cs_medium position-absolute">Add To Cart</Link>
                </div>
                <div class="cs_product_info text-center">
                <h3 class="cs_product_title cs_fs_21 cs_medium">
                    <Link href="/product_details">{props.tital}</Link>
                </h3>
                <div class="cs_single_product_review">
                    <div class="cs_rating_container">
                    <div class="cs_rating cs_size_sm" data-rating="4.5">
                        <div class="cs_rating_percentage"></div>
                    </div>
                    </div>
                    <span>(5)</span>
                    <span>Stock: <span class="cs_accent_color">{props.product_stock}</span></span>
                </div>
                <p class="cs_product_price cs_fs_18 cs_accent_color mb-0 cs_medium">Rs.{props.price}</p>
                <p class="cs_product_desc">{props.product_discription}</p>
                <div class="cs_action_btns">
                    <Link href="#" class="cs_btn cs_style_1 cs_fs_16 cs_medium cs_accent_btn">Add to Cart</Link>
                    <button class="cs_heart_btn"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button>
                </div>
                </div>
            </div>
            </div>


        
        </>
    )
}