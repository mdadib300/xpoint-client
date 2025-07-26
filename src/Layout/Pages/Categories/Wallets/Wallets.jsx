import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const Wallets = () => {
    const [wallets] = useProducts("Wallets");
    return (
        <div>
            <CategoryTitle titleText="Wallets"></CategoryTitle>
            <ProductDisplay products={wallets}></ProductDisplay>
        </div>
    );
};

export default Wallets;