// hooks
import {useState, useEffect} from 'react';

// router
import {useParams} from "react-router-dom";

// components
import Item from "../../components/Item/Item";

// mock function
import getProducts from "../../api";

// assets
import './ItemListContainer.css';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getProducts(0, id)
            .then(response => {
                if(response.length)
                    setProducts(response);
                else
                    setProducts([{id: 0, title: "Error", category: "", categoryUrl: "", categoryID: 0, img: "", price: "", stock: "", description: "No hay resultados"}]);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
                {products.map(product => <Item key={product.id} id={product.id} title={product.title} category={product.category} categoryUrl={product.categoryUrl} categoryID={product.categoryID} price={product.price} stock={product.stock} img={product.img} description={product.description} />)}
            </div>
        </div>
    );
}

export default ItemListContainer;
