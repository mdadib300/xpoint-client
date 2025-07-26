import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const Belts = () => {
    const [belts] = useProducts("Belts");
    return (
        <div>
            <CategoryTitle titleText="Belts"></CategoryTitle>
            <ProductDisplay products={belts}></ProductDisplay>
        </div>
    );
};

export default Belts;