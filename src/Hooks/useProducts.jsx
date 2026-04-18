import { useEffect, useState } from "react";

const useProducts = (categoryName) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                const selectedProducts = data.filter(datum => datum.category === `${categoryName}`);
                setProducts(selectedProducts);
                setLoading(false);
            })
    }, [])

    return [products, loading]
};

export default useProducts;