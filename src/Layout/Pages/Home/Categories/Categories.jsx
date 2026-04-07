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

const categoryData = [
    { name: "Denim Pants", image: denim },
    { name: "Twill Pants", image: twill },
    { name: "Shorts", image: shorts },
    { name: "Full Sleeve Shirts", image: fullshirt },
    { name: "Half Sleeve Shirts", image: halfshirt },
    { name: "Basic T-Shirt", image: tee },
    { name: "Drop-shoulder", image: droptee },
    { name: "Polo T-Shirts", image: polo },
    { name: "Caps", image: caps },
    { name: "Belts", image: belt },
    { name: "Wallets", image: wallet },
    { name: "Boxers", image: boxer },
];

const Categories = () => {
    return (
        <div className='my-20' id='categories'>
            <Title heading={'Shop by Category'} subheading={'Shop Category-wise'} />

            <div className='flex justify-center w-8/9 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {categoryData.map((cat) => (
                        <Link
                            key={cat.name}
                            to={`/${encodeURIComponent(cat.name)}`}
                        >
                            <TiltedCard
                                imageSrc={cat.image}
                                altText={cat.name}
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
                                    <p className="p-3 bg-black/70 text-white rounded-md">
                                        {cat.name}
                                    </p>
                                }
                            />
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Categories;