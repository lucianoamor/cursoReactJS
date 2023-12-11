// router
import {Link} from "react-router-dom";

// assets
import './Item.css';

function Item(props) {
    const {id, img, title, category, categoryUrl, categoryId, price, stock, description} = props;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top p-3 pb-0" alt="" />
                <span className={`position-absolute badge rounded-pill badge-${categoryUrl}`}>{category}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="d-flex flex-row">
                        <p className="fs-4 w-50">$ {price}</p>
                        <p className="w-50 text-muted text-end">Stock: {stock}</p>
                    </div>
                    <div className="d-flex flex-row pb-2">
                        <Link to={`/item/${id}`} className="btn btn-primary flex-fill me-2">Ver detalle</Link>
                        <button className="btn btn-success flex-fill ms-2 disabled">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;
