import React from 'react';
import ScrollToTop from "../../../Components/ScrollToTop";
import fb from '../../../assets/images/icons/facebook.png';
import ig from '../../../assets/images/icons/instagram.png';
import yt from '../../../assets/images/icons/youtube.png';

const Contact = () => {
    return (
        <div className="px-3 md:px-7 bg-white text-black min-h-screen">
            <ScrollToTop></ScrollToTop>
            <h1 className="text-2xl md:text-3xl font-bold text-center my-5">Contact Us</h1>
            <div className="text-center pb-7">
                <p className="mb-2"><b>Email Address: </b>info@xpointbd.com</p>
                <p className="mb-2"><b>Secondary Email Address: </b>xpoint387@gmail.com</p>
                <p className="mb-2"><b>Phone Number: </b>+880 1797-430886</p>
                <p className="mb-2"><b>Location: </b>Minnat Plaza, Shop no.: 101, 102, 103, Abdullahpur Bazar, South Keraniganj, Dhaka - 1310</p>
                <p><b>Social Media Page/Channel Links:</b></p>
                <div className='w-40 mx-auto mt-3'>
                    <div className="grid grid-flow-col">
                        <a href='https://www.facebook.com/Xpoint.com.bd' target='_blank'>
                            <img src={fb} className='w-7' />
                        </a>
                        <a href='https://www.youtube.com/@xpoint-p9e' target='_blank'>
                            <img src={yt} className='w-7' />
                        </a>
                        <a href='https://www.instagram.com/xpoint.bd/?igsh=MTczcXY1cjBwbThkMg%3D%3D#' target='_blank'>
                            <img src={ig} className='w-7' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;