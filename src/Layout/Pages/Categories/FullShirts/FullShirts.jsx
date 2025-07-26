import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const FullShirts = () => {
    const [fullShirt] = useProducts('Full Sleeve Shirts');
    return (
        <div>
            <CategoryTitle titleText="Full Sleeve Shirt"></CategoryTitle>
            <ProductDisplay products={fullShirt}></ProductDisplay>
        </div>
    );
};

export default FullShirts;