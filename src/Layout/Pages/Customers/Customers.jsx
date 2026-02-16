import ScrollToTop from '../../../Components/ScrollToTop';
import Title from '../../../Components/Title/Title';
import DomeGallery from './DomeGallery';

const Customers = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Title heading={'Happy Faces'} subheading={'Some of our Satisfied Customers'}></Title>
            <p className='mb-7 px-10 text-lg text-center'>These photos capture more than just faces, they reflect satisfaction. Customers choose to be photographed only when they are happy with the products and service, making each image a genuine testament to the quality and trust we deliver.</p>
            <div className='rounded-4xl'>
                <div className='mx-auto mb-10' style={{ width: '90vw', height: '100vh'}}>
                <DomeGallery
                    fit={0.8}
                    minRadius={600}
                    maxVerticalRotationDeg={5}
                    segments={35}
                    dragDampening={2}
                    grayscale
                />
            </div>
            </div>


        </div>
    );
};

export default Customers;