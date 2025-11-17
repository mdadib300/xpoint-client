import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const Shorts = () => {
    const [shorts] = useProducts('Shorts');
    return (
        <div className="bg-white text-black min-h-screen">
            <CategoryTitle titleText="Shorts"></CategoryTitle>
            {shorts.length === 0 ? (
                <p className="text-center text-lg mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={shorts}></ProductDisplay>
            )}
        </div>
    );
};

export default Shorts;