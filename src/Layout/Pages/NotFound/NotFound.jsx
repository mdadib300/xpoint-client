import notFound from '../../../assets/images/not-found.svg';
import ScrollToTop from '../../../Components/ScrollToTop';

const NotFound = () => {
    return (
        <div className='px-5'>
            <ScrollToTop></ScrollToTop>
            <h1 className='text-center text-2xl my-5'>Contact XPoint authority for further information.</h1>
            <div className='flex justify-center mt-10 mb-20'>
                <img className='w-1/2' src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;