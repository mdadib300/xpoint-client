import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const HalfShirts = () => {
    const [halfShirts] = useProducts("Half Sleeve Shirts");
    return (
        <div>
            <CategoryTitle titleText="Half Sleeve Shirts"></CategoryTitle>
            <ProductDisplay products={halfShirts}></ProductDisplay>
        </div>
    );
};

export default HalfShirts;