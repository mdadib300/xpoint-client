import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";
import ScrollToTop from "../../../../Components/ScrollToTop";


const Wallets = () => {
    const [wallets] = useProducts("Wallets");
    return (
        <div className="bg-white text-black min-h-screen">
            <ScrollToTop></ScrollToTop>
            <CategoryTitle titleText="Wallets"></CategoryTitle>
            {wallets.length === 0 ? (
                <p className="text-center text-lg mx-3 mt-20 opacity-70">
                    No products available in this category, will be added soon!
                </p>
            ) : (
                <ProductDisplay products={wallets}></ProductDisplay>
            )}
        </div>
    );
};

export default Wallets;