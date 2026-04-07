import { useParams } from "react-router-dom";
import ProductDisplay from "../../../../../Components/ProductDisplay/ProductDisplay";
import CategoryTitle from "../../../../../Components/CategoryTitle/CategoryTitle";
import useProducts from "../../../../../Hooks/useProducts";
import ScrollToTop from "../../../../../Components/ScrollToTop";
import { FaRegSadTear } from "react-icons/fa";

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [products] = useProducts();
    const categoryProducts = products.filter(product => product.category === categoryName);

    return (
        <div className="bg-white text-black min-h-screen">
            <ScrollToTop />

            <CategoryTitle titleText={categoryName} />

            {categoryProducts.length === 0 ? (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center opacity-70 mx-10">
                        <FaRegSadTear className="text-6xl mt-20 mb-5" />
                        <p className="text-lg">Sorry, No products available in this category.</p>
                    </div>
                </div>
            ) : (
                <ProductDisplay products={categoryProducts} />
            )}
        </div>
    );
};

export default CategoryPage;