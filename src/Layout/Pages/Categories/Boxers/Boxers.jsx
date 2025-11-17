import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";

const Boxers = () => {

    const [boxers] = useProducts('Boxers');
    return (
        <div className="bg-white text-black min-h-screen">
            <CategoryTitle titleText="Boxers"></CategoryTitle>
            {boxers.length === 0 ? (
                <p className="text-center text-lg mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={boxers}></ProductDisplay>
            )}
        </div>
    );
};

export default Boxers;