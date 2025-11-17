import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const TwillPants = () => {
    const [twillPants] = useProducts('Twill Pants');
    return (
        <div className="bg-white text-black min-h-screen">
            <CategoryTitle titleText='Twill Pants'></CategoryTitle>
            {twillPants.length === 0 ? (
                <p className="text-center text-lg mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={twillPants}></ProductDisplay>
            )}
        </div>
    );
};

export default TwillPants;