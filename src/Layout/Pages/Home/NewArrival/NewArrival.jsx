import useSomeProducts from '../../../../Hooks/useSomeProducts';
import Title from '../../../../Components/Title/Title';
import ProductDisplay from '../../../../Components/ProductDisplay/ProductDisplay';

const NewArrival = () => {
    const [someProducts, loading,] = useSomeProducts();
    return (
        <div className='bg-white text-black'>
            <Title
                heading={'Shop The Latest'}
                subheading={'Check out our new arrivals!'}
            />

            {
                loading ? (
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center opacity-70">
                            <span className="loading loading-infinity loading-xl w-16 my-5"></span>
                        </div>
                    </div>
                ) : (
                    <ProductDisplay products={someProducts} />
                )
            }
        </div>
    );
};

export default NewArrival;