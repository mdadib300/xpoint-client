import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import ScrollToTop from "../../../../Components/ScrollToTop";
import useProducts from "../../../../Hooks/useProducts";

const Boxers = () => {

    const [boxers] = useProducts('Boxers');
    return (
        <div className="bg-white text-black min-h-screen">
            <ScrollToTop></ScrollToTop>
            <CategoryTitle titleText="Boxers"></CategoryTitle>
            {boxers.length === 0 ? (
                <p className="text-center text-lg mx-3 mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={boxers}></ProductDisplay>
            )}
        </div>
    );
};

export default Boxers;