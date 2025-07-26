import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Images
import image1 from '../../../../assets/images/slider/slider-belt2.jpg';
import image2 from '../../../../assets/images/slider/slider-jeans.jpg';
import image3 from '../../../../assets/images/slider/slider-shirt.jpg';
import image4 from '../../../../assets/images/slider/slider-t-shirt.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                stopOnHover={false}
                showThumbs={false}
                showStatus={false}
            >
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${image2})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Denim That Moves With You</h1>
                            <p className="mb-5">
                                Step into comfort and timeless style with our premium denim pants. Designed for daily wear, these jeans combine durability and flexibility—perfect for any mood, any moment.
                            </p>
                            <Link to="/denimpants"><button className="btn btn-white btn-outline btn-wide">Let's Shop!</button></Link>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${image1})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hold It Together, In Style</h1>
                            <p className="mb-5">
                                Complete your look with our sleek and sturdy belts. Built with high-quality materials, they’re more than just accessories—they’re essentials that blend function with fashion.
                            </p>
                            <Link to="/belts"><button className="btn btn-white btn-outline btn-wide">Let's Shop!</button></Link>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${image3})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Sharp Looks, Effortless Style</h1>
                            <p className="mb-5">
                                Upgrade your wardrobe with formal shirts that speak confidence. Whether it’s for work or a special occasion, our finely tailored collection brings you comfort, class, and a perfect fit—every time.
                            </p>
                            <Link to="/fullshirts"><button className="btn btn-white btn-outline btn-wide">Let's Shop!</button></Link>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${image4})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Wear Your Vibe</h1>
                            <p className="mb-5">
                                From casual hangouts to everyday adventures, our soft and stylish T-shirts keep you cool and confident. Express yourself with fresh colors, perfect cuts, and unbeatable comfort.
                            </p>
                            <Link to="/basictshirts"><button className="btn btn-white btn-outline btn-wide">Let's Shop!</button></Link>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;




