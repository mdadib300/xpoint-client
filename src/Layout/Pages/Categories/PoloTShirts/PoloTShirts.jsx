import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const PoloTShirts = () => {
const [poloTShirts] = useProducts("Polo T-shirts");
    return (
        <div>
            <CategoryTitle titleText="Polo T-shirts"></CategoryTitle>
            <ProductDisplay products={poloTShirts}></ProductDisplay>
        </div>
    );
};

export default PoloTShirts;