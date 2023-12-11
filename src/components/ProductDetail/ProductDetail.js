// hooks
import {useState, useEffect} from 'react';

// router
import {useParams} from "react-router-dom";

// mock function
import getProducts from "../../api";

// assets
import './ProductDetail.css';

function ProductDetail() {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getProducts(id, 0)
            .then(response => {
                if(response !== undefined)
                    setProducts(response);
                else
                    setProducts({id: 0, title: "Error", category: "", categoryUrl: "", categoryID: 0, img: "", price: "", stock: "", description: "No hay resultados"});
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            <div className="row gx-5 my-5">
                <aside className="col-lg-6">
                    <div className="mb-3 d-flex justify-content-center">
                        <img className="fit w-100" src={products.img} />
                    </div>
                </aside>
                <main className="col-lg-6">
                    <div className="ps-lg-3">
                        <h3 className="title text-primary">{products.title}</h3>
                        <div className="mb-3">
                            <span className="h5">$ {products.price}</span>
                        </div>
                        <p>{products.description}</p>
                        <div className="row">
                            <dt className="col-3">ID</dt>
                            <dd className="col-9">{products.id}</dd>
                            <dt className="col-3">Categoría</dt>
                            <dd className="col-9">{products.category}</dd>
                            <dt className="col-3">Stock</dt>
                            <dd className="col-9">{products.stock}</dd>
                            <hr />
                        </div>
                        <a href="#" className="btn btn-success">Comprar</a>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProductDetail;

