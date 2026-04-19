import { Link } from "react-router-dom";


const ProductCard = ({ productInfo }) => {

    const { _id, name, price, fit, images, category } = productInfo;

    return (
        <div key={_id} className="card [@media(max-width:340px)]:w-35 w-40 md:w-60 lg:w-70 shadow-md h-full">
            <Link to={`/details/${_id}`}>
                <div className='transform transition duration-300 ease-out hover:-translate-y-1 rounded-sm'>
                    <figure>
                        <div class="aspect-[4/5] w-80">
                            <img src={images[0]} class="w-full h-full object-cover" />
                        </div>
                    </figure>
                    <div className="card-body">
                        <div>
                            <p className='text-lg font-semibold uppercase'>{name}</p>
                        </div>
                        <p>{category}, {fit}</p>
                        <div>
                            <div className="font-semibold">
                                {productInfo.discountPrice ? (
                                    <div className="flex items-center gap-2">
                                        <span className="line-through text-gray-400">
                                            ৳ {price}
                                        </span>
                                        <span className="font-bold">
                                            ৳ {productInfo.discountPrice}
                                        </span>
                                    </div>
                                ) : (
                                    <span>৳ {price}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;