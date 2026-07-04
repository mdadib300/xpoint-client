import image from '../../../../assets/images/export/export.png';
import logo from '../../../../assets/images/xpoint-full-logo.png';
import { FaSquareFacebook } from "react-icons/fa6";
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import DotGrid from './DotGrid';

const Export = () => {
    return (
        <div>
            <div
                className="w-8/9 mx-auto bg-cover bg-center my-20"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="w-7/8 mx-auto flex justify-center items-center py-30">
                    <div className="bg-black/65 p-5 md:p-15 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <h1 className="text-2xl font-semibold text-center">Exported Worldwide, Now at Your Door by -</h1>
                        <img src={logo} className='w-50 mx-auto mt-5' alt="XPoint" />
                        <p className="py-6 text-center">
                            Bangladesh is one of the leading hubs of global garment exports, known for producing high-quality clothing for top international brands. From premium denim and formal wear to casual essentials, these garments are made in state-of-the-art factories using finest fabrics, advanced technology, and the hands of skilled workers. After passing strict quality checks, they are shipped out to countries like the USA, UK, Germany, and Canada, where they are worn with pride and trust. <br /><br />
                            XPoint brings you a curated collection of authentic export menswear, directly from the source—now available both online and offline.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-8/9 mx-auto my-10 md:my-20 bg-neutral-800 text-white py-5 px-5 md:px-15 rounded-md'>
                <div className='text-center md:text-left'>
                    <h1 className='text-3xl mb-3'>Follow us on <FaSquareFacebook className='inline' /></h1>
                    <p className='text-lg'>Join the family trusted by 30k+ people!</p>
                </div>
                <div className='mt-4 md:mt-0 animate-pulse'>
                    <a href="https://www.facebook.com/Xpoint.com.bd" target='_blank'><CustomButton text={"Visit Page"}></CustomButton></a>
                </div>
            </div>
        </div>
    );
};

export default Export;