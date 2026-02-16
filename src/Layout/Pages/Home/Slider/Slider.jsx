import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AnimatedContent from './AnimatedContent'
import SplitText from "./SplitText";
import { FaWhatsapp } from "react-icons/fa";
import cover2 from '../../../../assets/images/slider/cover2.jpg';
import cover3 from '../../../../assets/images/slider/cover3.jpg';
import cover4 from '../../../../assets/images/slider/bannerNew.jpeg';
import header from '../../../../assets/images/slider/head1.png';
import { Link } from 'react-router-dom';

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

const Slider = () => {
    return (
        <div>
            {/* Mini Banner */}
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse
                duration={2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={2}
                threshold={0.1}
                delay={0}
            >
                <div className="h-[80px] md:h-[130px] w-8/9 mx-auto flex justify-center items-center my-4 md:my-8" style={{
                    backgroundImage: `url(${header})`,
                }}>
                    <div className="">
                        <SplitText
                            text="THE ELEGANCE OF MENSWEAR"
                            className="text-2xl md:text-4xl lg:text-6xl font-bold text-white"
                            delay={150}
                            duration={1}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                            onLetterAnimationComplete={handleAnimationComplete}
                            showCallback
                        />
                    </div>

                </div>
            </AnimatedContent>
            {/* Slider */}
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
                <Link to='/denimpants'>
                    <div
                        className="hero w-8/9 mx-auto max-h-14/15 aspect-[2/1] bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${cover4})`,
                        }}
                    >
                    </div>
                </Link>
                <Link to='/halfshirts'>
                    <div
                        className="hero w-8/9 mx-auto max-h-14/15 aspect-[2/1] bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${cover2})`,
                        }}
                    >
                    </div></Link>

                <Link to='/denimpants'>
                    <div
                        className="hero w-8/9 mx-auto max-h-14/15 aspect-[2/1] bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${cover3})`,
                        }}
                    >
                    </div></Link>

            </Carousel>
            {/* Whatsapp CTA */}
            <a
                href="https://wa.me/8801797430886?text=Hello!%20Anyone%20there%20to%20chat%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl shadow-lg animate-pulse hover:scale-110 hover:shadow-2xl text-3xl tooltip tooltip-left"
                data-tip="Chat with us in WhatsApp"
            >
                <FaWhatsapp></FaWhatsapp>
            </a>
        </div>
    );
};

export default Slider;




