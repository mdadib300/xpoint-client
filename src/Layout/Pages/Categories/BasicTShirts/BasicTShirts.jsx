import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const BasicTShirts = () => {
    const [basicTShirts] = useProducts("Basic T-shirt");
    return (
        <div>
            <CategoryTitle titleText="Basic T-shirts"></CategoryTitle>
            <ProductDisplay products={basicTShirts}></ProductDisplay>
        </div>
    );
};

export default BasicTShirts;