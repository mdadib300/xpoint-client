import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const DropShoulders = () => {
    const [dropShoulders] = useProducts("Drop-shoulder");
    return (
        <div>
            <CategoryTitle titleText="Drop-shoulders"></CategoryTitle>
            <ProductDisplay products={dropShoulders}></ProductDisplay>
        </div>
    );
};

export default DropShoulders;