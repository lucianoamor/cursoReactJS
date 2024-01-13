// hooks
import {useState, useEffect} from 'react';

// router
import {useParams} from "react-router-dom";

// api
import getProducts from "../../api";

// components
import ProductDetail from "../../components/ProductDetail/ProductDetail";

// assets
import './ProductDetailContainer.css';

function ProductDetailContainer() {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getProducts(id, 0)
            .then(response => {
                if(response.data())
                    setProducts([{id: id, status: "ok", title: response.data().title, category: response.data().category, categoryUrl: response.data().categoryUrl, categoryID: response.data().categoryID, img: response.data().img, price: response.data().price, stock: response.data().stock, description: response.data().description}]);
                else
                    setProducts([{id: 0, status: "error", title: "Error", description: "No existe el producto"}]);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            <ProductDetail product={products} />
        </div>
    );
}

export default ProductDetailContainer;
