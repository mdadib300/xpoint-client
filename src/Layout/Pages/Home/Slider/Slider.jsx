import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Images
// import image1 from '../../../../assets/images/slider/slider-belt2.jpg';
import image2 from '../../../../assets/images/slider/slider-jeans.jpg';
// import image3 from '../../../../assets/images/slider/slider-shirt.jpg';
import image4 from '../../../../assets/images/slider/slider-t-shirt.jpg';
// import cover1 from '../../../../assets/images/slider/cover1.jpg';
// import cover2 from '../../../../assets/images/slider/cover2.jpg';
// import cover3 from '../../../../assets/images/slider/cover3.jpg';

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
                swipeable={false}
                emulateTouch={false}
                showArrows={false}
                showIndicators={false}
            >
                {/* Static Slider (will be added later) */}
                {/* <div
                    className="hero w-full aspect-[2/1] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${cover1})`,
                    }}
                >
                </div>
                <div
                    className="hero w-full aspect-[2/1] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${cover2})`,
                    }}
                >
                </div>
                <div
                    className="hero w-full aspect-[2/1] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${cover3})`,
                    }}
                >
                </div> */}

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
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;




