import CategoryTitle from "../../../../Components/CategoryTitle/CategoryTitle";
import ProductDisplay from "../../../../Components/ProductDisplay/ProductDisplay";
import useProducts from "../../../../Hooks/useProducts";


const Shorts = () => {
    const [shorts] = useProducts('Shorts');
    return (
        <div>
            <CategoryTitle titleText="Shorts"></CategoryTitle>
            <ProductDisplay products={shorts}></ProductDisplay>
        </div>
    );
};

export default Shorts;