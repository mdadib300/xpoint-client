import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";
import ScrollToTop from "../../../../Components/ScrollToTop";


const Shorts = () => {
    const [shorts] = useProducts('Shorts');
    return (
        <div className="bg-white text-black min-h-screen">
            <ScrollToTop></ScrollToTop>
            <CategoryTitle titleText="Shorts"></CategoryTitle>
            {shorts.length === 0 ? (
                <p className="text-center text-lg mx-3 mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={shorts}></ProductDisplay>
            )}
        </div>
    );
};

export default Shorts;