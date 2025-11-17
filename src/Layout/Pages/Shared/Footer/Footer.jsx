import { Link } from 'react-router-dom';
import fb from '../../../../assets/images/icons/facebook.png';
import ig from '../../../../assets/images/icons/instagram.png';
import yt from '../../../../assets/images/icons/youtube.png';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-neutral-800 text-white p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover"><Link to='/about'>About us</Link></a>
                <a className="link link-hover"><Link to='/return'>Return Policy</Link></a>
                <a className="link link-hover" href='https://maps.app.goo.gl/87YXVKpANqN9wmx59' target='_blank'>Outlet location</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/Xpoint.com.bd' target='_blank'>
                        <img src={fb} className='w-7'/>
                    </a>
                    <a href='https://www.youtube.com/@xpoint-p9e' target='_blank'>
                        <img src={yt} className='w-7'/>
                    </a>
                    <a href='https://www.instagram.com/xpoint.bd/?igsh=MTczcXY1cjBwbThkMg%3D%3D#' target='_blank'>
                        <img src={ig} className='w-7'/>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by XPoint</p>
                <p>Version - 1.1</p>
            </aside>
        </footer>
    );
};

export default Footer;