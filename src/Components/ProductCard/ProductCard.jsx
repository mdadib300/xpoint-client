import { Link } from "react-router-dom";


const ProductCard = ({productInfo}) => {

    const {_id, name, price, fit, image1} = productInfo;

    return (
        <div className="card bg-base-100 w-80 md:w-95 shadow-sm">
            <figure>
                <img src={image1} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Fit - {fit}</p>
                <p>Price - {price} BDT</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-outline btn-neutral">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;