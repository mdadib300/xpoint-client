import { Link } from "react-router-dom";


const ProductCard = ({ productInfo }) => {

    const { _id, name, price, fit, image1, category } = productInfo;

    return (
        <div key={_id} className="card [@media(max-width:340px)]:w-35 w-40 md:w-60 lg:w-70 shadow-md h-full">
            <Link to={`/details/${_id}`}>
                <div className='transform transition duration-300 ease-out hover:-translate-y-1 rounded-sm'>
                    <figure>
                        <div class="aspect-[4/5] w-80">
                            <img src={image1} class="w-full h-full object-cover" />
                        </div>
                    </figure>
                    <div className="card-body">
                        <div>
                            <p className='text-lg font-semibold uppercase'>{name}</p>
                        </div>
                        <p>{category}, {fit}</p>
                        <div>
                            <p className="font-semibold">৳ {price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;