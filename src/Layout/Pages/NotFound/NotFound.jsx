import notFound from '../../../assets/images/not-found.svg';
import ScrollToTop from '../../../Components/ScrollToTop';

const NotFound = () => {
    return (
        <div className='px-5'>
            <ScrollToTop></ScrollToTop>
            <h1 className='text-center font-semibold text-4xl my-5'>Opps! Page Not Found : 404</h1>
            <h1 className='text-center text-xl mb-5'>Maybe under development; Contact XPoint authority for further information.</h1>
            <div className='flex justify-center mt-10 mb-20'>
                <img src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;