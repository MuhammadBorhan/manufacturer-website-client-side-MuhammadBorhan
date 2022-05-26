import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [relode, setRelode] = useState(false);
    useEffect(() => {
        fetch('https://thawing-harbor-39407.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setRelode(!relode)
            })
    }, [relode]);
    return [products, setProducts];
};

export default useProducts;