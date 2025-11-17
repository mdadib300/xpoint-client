import { Link } from 'react-router-dom';
import useAllProducts from '../../../../Hooks/useAllProducts';
import Title from '../../../../Components/Title/Title';

const NewArrival = () => {
    const [products, ,] = useAllProducts();
    const latestProducts = [...products].reverse().slice(0, 8);
    return (
        <div className='bg-white text-black'>
            <Title heading={'Shop The Latest'} subheading={'Here are our new arrivals!'}></Title>
            <div className="flex justify-center pb-10 md:pb-20">
                <div className="
                grid  [@media(max-width:860px)]:grid-cols-2 [@media(max-width:1365px)]:grid-cols-3 lg:grid-cols-4 
                     gap-2  [@media(max-width:860px)]:gap-2     [@media(max-width:1365px)]:gap-10      lg:gap-15
                "
                >
                    {
                        latestProducts.map((product) => <div key={product._id} className="card [@media(max-width:340px)]:w-35 w-40 md:w-60 lg:w-70 shadow-md h-full rounded-sm">
                            <figure>
                                <div class="aspect-[4/5] w-80">
                                    <img src={product.image1} class="w-full h-full object-cover" />
                                </div>
                            </figure>
                            <Link to={`/details/${product._id}`}>
                                <div className="card-body hover:underline">
                                    <p className='font-semibold uppercase'>{product.name}</p>
                                    <p>{product.category}</p>
                                    <p>{product.price} BDT</p>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
            </div>

            {/* Three, two and one card(s) */}
            {/* <div className='flex justify-center'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        latestProducts.map(product => <div key={product._id} className="card bg-base-100 w-80 shadow-xl rounded-sm">
                            <figure>
                                <div class="aspect-[4/5] w-80">
                                    <img src={product.image1} class="w-full h-full object-cover" />
                                </div>
                            </figure>

                            <Link to={`/details/${product._id}`}>
                                <div className="card-body hover:underline">
                                    <p className='font-semibold uppercase'>{product.name}</p>
                                    <p>{product.category}</p>
                                    <p>{product.price} BDT</p>
                                </div>
                            </Link>


                        </div>)
                    }
                </div>
            </div > */}
        </div >
    );
};

export default NewArrival;