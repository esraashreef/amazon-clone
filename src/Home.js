import React from 'react'
import "./Home.css"
import { motion } from "framer-motion"

import Product from './Product'
export default function Home() {
    return (
        <div className="home">
            <div className="home-container">

                <img className="home-img"  src="https://film-book.com/wp-content/uploads/2020/04/hanna-season-two-tv-show-poster-banner-01-700x400-1.jpg" alt=""/>
                <div className="home-row">
                   
                   <Product id="1"
                            image="https://m.media-amazon.com/images/I/71+pKTiBdKS._AC_SL1500_.jpg"
                            rating={4} price={179.99}
                            title="Espresso Machine, 15 Bar Espresso Maker with Milk Frother Wand and Compact Design, Professional Espresso Coffee Machine for Cappuccino and Latte"


                    />
                   
                   
                    <Product  id="2" image="https://m.media-amazon.com/images/I/61zJBFNujKL._AC_SL1000_.jpg"
                            rating={5} price={119.97}
                            title="Kindle Essentials Bundle including Kindle, now with a built-in front light, Amazon Printed Cover, and Power Adapter"/>
                                {/*product*/}
                </div>
               
                <div className="home-row">
                 <Product id="3" image="https://m.media-amazon.com/images/I/81fPaY3RlJL._SL1500_.jpg"
                            rating={5} price={8.12}
                            title="Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack"/>
                 <Product id ="4" image="https://m.media-amazon.com/images/I/61XG9u6fbOL._AC_SL1500_.jpg"
                            rating={4} price={69.99}
                            title="Ultrean Air Fryer, 4.2 Quart (4 Liter) Electric Hot Air Fryers Oven Oilless Cooker with LCD Digital Screen and Nonstick Frying Pot, ETL/UL Certified,1-Year Warranty,1500W (Black)"/>
                 <Product id="5" image="https://m.media-amazon.com/images/I/618OZ5oGsyL._AC_SL1000_.jpg"
                            rating={4} price={1049.99}
                            title="SAMSUNG Galaxy S21+ Plus 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 8K Video 12MP High Res, Phantom Silver" />
                    {/*product*/}

                </div>
                <div className="home-row">
                    <Product id ="6" image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
                            rating={4} price={239.99}
                            title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)" />
                    <Product      id="7"  image="https://m.media-amazon.com/images/I/51MT0MbpD7L.jpg"
                            rating={4} price={12.99}
                            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life Audible Logo" />


                </div>
            </div>
        </div>
    )
}
