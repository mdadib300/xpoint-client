import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import ScrollToTop from "../../../../Components/ScrollToTop";
import useProducts from "../../../../Hooks/useProducts";


const Belts = () => {
    const [belts] = useProducts("Belts");
    return (
        <div className="bg-white text-black min-h-screen">
            <ScrollToTop></ScrollToTop>
            <CategoryTitle titleText="Belts"></CategoryTitle>
            {belts.length === 0 ? (
                <p className="text-center text-lg mx-3 mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={belts}></ProductDisplay>
            )}
        </div>
    );
};

export default Belts;