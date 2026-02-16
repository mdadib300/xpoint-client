import Title from '../../../../Components/Title/Title';
import TiltedCard from './TiltedCard';
import denim from '../../../../assets/images/categories/denim.jpg';
import belt from '../../../../assets/images/categories/belt.jpg';
import boxer from '../../../../assets/images/categories/boxer.jpg';
import caps from '../../../../assets/images/categories/caps.jpg';
import droptee from '../../../../assets/images/categories/droptee.jpg';
import fullshirt from '../../../../assets/images/categories/fullshirt2.jpg';
import halfshirt from '../../../../assets/images/categories/halfshirt.jpg';
import polo from '../../../../assets/images/categories/polo.jpg';
import shorts from '../../../../assets/images/categories/shorts.jpg';
import tee from '../../../../assets/images/categories/tee.jpg';
import twill from '../../../../assets/images/categories/twill.jpg';
import wallet from '../../../../assets/images/categories/wallet.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='my-20' id='categories'>
            <Title heading={'Shop by Category'} subheading={'Shop Category-wise'}></Title>
            <div className='flex justify-center w-8/9 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <Link to='/denimpants'>
                        <TiltedCard
                            imageSrc={denim}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Denim Full Pant
                                </p>
                            }
                        /></Link>
                    <Link to='/twillpants'>
                        <TiltedCard
                            imageSrc={twill}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Twill Full Pant
                                </p>
                            }
                        /></Link>
                    <Link to='/shorts'>
                        <TiltedCard
                            imageSrc={shorts}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Shorts
                                </p>
                            }
                        /></Link>
                    <Link to='/fullshirts'>
                        <TiltedCard
                            imageSrc={fullshirt}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Full Sleeve Shirt
                                </p>
                            }
                        /></Link>
                    <Link to='/halfshirts'>
                        <TiltedCard
                            imageSrc={halfshirt}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Half Sleeve Shirt
                                </p>
                            }
                        /></Link>
                    <Link to='/basictshirts'>
                        <TiltedCard
                            imageSrc={tee}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Basic T-Shirt
                                </p>
                            }
                        /></Link>
                    <Link to='/dropshoulders'>
                        <TiltedCard
                            imageSrc={droptee}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Drop Shoulder T-Shirt
                                </p>
                            }
                        /></Link>
                    <Link to='/polotshirts'>
                        <TiltedCard
                            imageSrc={polo}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Polo T-Shirt
                                </p>
                            }
                        /></Link>
                    <Link to='/caps'>
                        <TiltedCard
                            imageSrc={caps}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Caps
                                </p>
                            }
                        /></Link>
                    <Link to='/belts'>
                        <TiltedCard
                            imageSrc={belt}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Belt
                                </p>
                            }
                        /></Link>
                    <Link to='/wallets'>
                        <TiltedCard
                            imageSrc={wallet}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Wallet
                                </p>
                            }
                        /></Link>
                    <Link to='/boxers'>
                        <TiltedCard
                            imageSrc={boxer}
                            altText="Kendrick Lamar - GNX Album Cover"
                            captionText="Denim Full Pant"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent
                            overlayContent={
                                <p className="tilted-card-demo-text p-3 bg-black/70 text-white rounded-md">
                                    Underwear
                                </p>
                            }
                        /></Link>
                </div>
            </div >
        </div>
    );
};

export default Categories;