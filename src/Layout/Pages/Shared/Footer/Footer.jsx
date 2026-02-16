import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/xpoint-short-logo.png';
import fb from '../../../../assets/images/icons/facebook.png';
import ig from '../../../../assets/images/icons/instagram.png';
import yt from '../../../../assets/images/icons/youtube.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral-800 text-white p-10">
                <nav>
                    <h6 className="footer-title">Info.</h6>
                    <a className="link link-hover"><Link to='/about'>About</Link></a>
                    <a className="link link-hover"><Link to='/return'>Policy</Link></a>
                    <a className="link link-hover"><Link to='/about'>Contact</Link></a>
                    <a className="link link-hover"><Link to='/faq'>FAQ</Link></a>
                    <a className="link link-hover" href='https://maps.app.goo.gl/87YXVKpANqN9wmx59' target='_blank'>Our Location</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover"><Link to='/customers'>Customers' Gallery</Link></a>
                    <a className="link link-hover"><Link to='/*'>Company Policy</Link></a>
                    <a className="link link-hover" href='https://youtu.be/htt7wA31LUc' target='_blank'>First Outlet</a>
                    <a className="link link-hover"><Link to='/*'>Careers</Link></a>
                    <a className="link link-hover"><Link to='/*'>Conditions</Link></a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
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
                </nav>
            </footer>

            <footer className="footer sm:footer-horizontal bg-neutral-800 mt-[-5px] text-white items-center pb-7 px-10">
                <aside className="flex items-center">
                    <img src={logo} className="w-10 md:w-13" />
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by XPoint : <a href="https://adib-mern.netlify.app/" target='_blank'>V - 2.0</a></p>
                </aside>
            </footer>
        </div>

    );
};

export default Footer;