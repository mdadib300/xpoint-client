import useProducts from "../../../../Hooks/useProducts";
import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";


const DenimPants = () => {
    const [denimPants] = useProducts('Denim Pants');
    return (
        <div className="bg-white text-black min-h-screen">
            <CategoryTitle titleText="Denim Pants"></CategoryTitle>
            {denimPants.length === 0 ? (
                <p className="text-center text-lg mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={denimPants}></ProductDisplay>
            )}
        </div>
    );
};

export default DenimPants;