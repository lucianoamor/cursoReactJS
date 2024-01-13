// hooks
import {useState, useContext} from 'react';

// router
import {useParams} from "react-router-dom";

// context
import {DataContext} from "../../context/CartContext";

// assets
import './ProductDetail.css';

function ProductDetail({product}) {
    const [q, setQ] = useState(1);
    const {cart, add, reset} = useContext(DataContext);

    function handleQ(e) {
        setQ(e.target.value);
    }

    function handleAdd() {
        add(product[0], q);
    }

    if(!product.length)
        product[0] = {id: 0, status: "loading", title: "Buscando...", description: "Por favor espere"};

    return (
        <div className="container">
            <div className="row gx-5 my-5">
                {product[0].id != 0 &&
                <aside className="col-lg-6">
                    <div className="mb-3 d-flex justify-content-center">
                        <img className="fit w-100" src={product[0].img} />
                    </div>
                </aside>
                }
                <main className="col-lg-6">
                    <div className="ps-lg-3">
                        <h3 className="title text-primary">{product[0].title}</h3>
                        {product[0].id != 0 &&
                        <div className="mb-3">
                            <span className="h5">$ {product[0].price}</span>
                        </div>
                        }
                        <p>{product[0].description}</p>
                        {product[0].id != 0 &&
                        <div className="row">
                            <dt className="col-3">ID</dt>
                            <dd className="col-9">{product[0].id}</dd>
                            <dt className="col-3">Categoría</dt>
                            <dd className="col-9">{product[0].category}</dd>
                            <dt className="col-3">Stock</dt>
                            <dd className="col-9">{product[0].stock}</dd>
                            <hr />
                            <div className="col-9">
                                <button className="btn btn-success w-100" onClick={handleAdd}>Agregar al carrito</button>
                            </div>
                            <div className="col-3">
                                <input type="number" value={q} min="0" className="w-100" onChange={handleQ} />
                            </div>
                        </div>
                        }
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProductDetail;
