import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const TwillPants = () => {
    const [twillPants] = useProducts('Twill Pants');
    return (
        <div>
            <CategoryTitle titleText='Twill Pants'></CategoryTitle>
            <ProductDisplay products={twillPants}></ProductDisplay>
        </div>
    );
};

export default TwillPants;