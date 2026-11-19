import { Link } from "react-router-dom";

const ProductCard = ({ productInfo }) => {

    const { _id, name, price, images, isStockOut } = productInfo;

    return (
        <div
            key={_id}
            className="card relative w-full max-w-[280px] overflow-hidden rounded-xl h-full"
        >
            <Link to={`/details/${_id}`} className="block h-full">

                <div className="relative h-full overflow-hidden rounded-xl transform transition duration-300 ease-out hover:-translate-y-1">

                    {/* PRODUCT IMAGE */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden">

                        <img
                            src={images[0]?.replace(
                                "/upload/",
                                "/upload/f_auto,q_auto,w_600/"
                            )}
                            alt={name}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />

                        {/* SALE BADGE */}
                        {productInfo.discountPrice && (
                            <span className="absolute top-2 left-2 z-10 bg-white text-black text-[10px] sm:text-xs px-2 py-1 rounded">
                                SALE
                            </span>
                        )}

                        {/* STOCK OUT BADGE */}
                        {isStockOut && (
                            <span className="absolute top-2 right-2 z-10 bg-red-700 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                                STOCK OUT
                            </span>
                        )}

                        {/* PRODUCT INFORMATION OVERLAY */}
                        <div className="absolute bottom-3 left-3 right-3 z-10 rounded-lg bg-white/50 backdrop-blur-sm p-3 sm:p-4 text-black">

                            {/* PRODUCT NAME */}
                            <p className="text-xs sm:text-sm md:text-base leading-snug line-clamp-2">
                                {name}
                            </p>

                            {/* PRICE */}
                            <div className="font-semibold text-sm sm:text-base mt-1">
                                {productInfo.discountPrice ? (
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="line-through text-gray-500 text-xs sm:text-sm">
                                            ৳ {price}
                                        </span>
                                        <span>
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
