import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";

const Boxers = () => {

    const [boxers] = useProducts('Boxers');
    return (
        <div>
            <CategoryTitle titleText="Boxers"></CategoryTitle>
            <ProductDisplay products={boxers}></ProductDisplay>
        </div>
    );
};

export default Boxers;