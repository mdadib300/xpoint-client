import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";



const Caps = () => {
    const [caps] = useProducts("Caps");
    return (
        <div className="bg-white text-black min-h-screen">
            <CategoryTitle titleText="Caps"></CategoryTitle>
            {caps.length === 0 ? (
                <p className="text-center text-lg mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
            <ProductDisplay products={caps}></ProductDisplay>
            )}
        </div>
    );
};

export default Caps;