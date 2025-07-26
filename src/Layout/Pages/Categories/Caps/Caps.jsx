import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";



const Caps = () => {
    const [caps] = useProducts("Caps");
    return (
        <div>
            <CategoryTitle titleText="Caps"></CategoryTitle>
            <ProductDisplay products={caps}></ProductDisplay>
        </div>
    );
};

export default Caps;