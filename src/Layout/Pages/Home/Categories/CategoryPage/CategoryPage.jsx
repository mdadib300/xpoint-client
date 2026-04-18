import { useParams } from "react-router-dom";
import ProductDisplay from "../../../../../Components/ProductDisplay/ProductDisplay";
import CategoryTitle from "../../../../../Components/CategoryTitle/CategoryTitle";
import ScrollToTop from "../../../../../Components/ScrollToTop";
import { FaRegSadTear } from "react-icons/fa";
import useAllProducts from "../../../../../Hooks/useAllProducts";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products, loading,] = useAllProducts();
    console.log(products);
    const createSlug = (text) => {
        return text.toLowerCase().replace(/\s+/g, "-");
    };
    const categoryProducts = products.filter(
        (product) => createSlug(product.category) === categoryName
    );

    return (
        <div className="bg-white text-black min-h-screen">
            <ScrollToTop />

            {loading ? (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center opacity-70 mx-10">
                        <span className="loading loading-infinity loading-xl w-16 mt-20 mb-5"></span>
                        <p className="text-lg">Loading, you must be a little patient to see good products :)</p>
                    </div>
                </div>
            ) : (
                <>
                    <CategoryTitle
                        titleText={categoryProducts[0]?.category || "Still not available."}
                    />

                    {categoryProducts.length === 0 ? (
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center opacity-70 mx-10">
                                <FaRegSadTear className="text-6xl mt-20 mb-5" />
                                <p className="text-lg">
                                    Sorry, No products available in this category.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <ProductDisplay products={categoryProducts} />
                    )}
                </>
            )}
        </div>
    );
};

export default CategoryPage;