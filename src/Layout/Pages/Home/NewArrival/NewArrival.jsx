import useAllProducts from '../../../../Hooks/useAllProducts';
import Title from '../../../../Components/Title/Title';
import ProductDisplay from '../../../../Components/ProductDisplay/ProductDisplay';

const NewArrival = () => {
    const [products, ,] = useAllProducts();
    const latestProducts = [...products].reverse().slice(0, 8);
    return (
        <div className='bg-white text-black'>
            <Title heading={'Shop The Latest'} subheading={'Check out our new arrivals!'}></Title>
            <ProductDisplay products={latestProducts} ></ProductDisplay>
        </div >
    );
};

export default NewArrival;