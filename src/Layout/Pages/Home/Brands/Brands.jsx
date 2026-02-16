import Marquee from "react-fast-marquee";

import image1 from '../../../../assets/images/brands/Aeropostale-Logo.jpg';
import image2 from '../../../../assets/images/brands/american-eagle-outfitters.svg';
import image3 from '../../../../assets/images/brands/calvin-klein-logo-png_seeklogo-311014.png';
import image4 from '../../../../assets/images/brands/hm-h-and-m-logo-png_seeklogo-168429.png';
import image5 from '../../../../assets/images/brands/hugo-boss-logo-png_seeklogo-207549.png';
import image6 from '../../../../assets/images/brands/jack-and-jones-logo-png_seeklogo-389891.png';
import image7 from '../../../../assets/images/brands/levis-brand-clothes-logo-symbol-design-fashion-illustration-free-vector.jpg';
import image8 from '../../../../assets/images/brands/s-oliver-logo-black-and-white.png';
import image9 from '../../../../assets/images/brands/tom-tailor-logo-png_seeklogo-427195.png';
import image10 from '../../../../assets/images/brands/zara-logo-png_seeklogo-423532.png';

const Brands = () => {
    return (
        <div className="w-8/9 mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold mb-10">Our Brands</h1>
            <div className="bg-white text-black mb-10">
                <p className="text-center py-2">
                    <Marquee
                        pauseOnHover={true}
                    >
                        <img src={image1} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image2} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image3} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image4} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image5} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image6} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image7} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image8} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image9} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />
                        <img src={image10} className='w-20 lg:w-40 ml-5 lg:ml-25' alt="" />

                    </Marquee>
                </p>
            </div>
        </div>
    );
};

export default Brands;