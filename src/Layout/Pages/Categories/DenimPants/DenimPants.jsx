import useProducts from "../../../../Hooks/useProducts";
import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";


const DenimPants = () => {
    const [denimPants] = useProducts('Denim Pants');
    return (
        <div>
            <CategoryTitle titleText="Denim Pants"></CategoryTitle>
            <ProductDisplay products={denimPants}></ProductDisplay>
        </div>
    );
};

export default DenimPants;