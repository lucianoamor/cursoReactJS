import './CartWidget.css';

function CartWidget() {
    return (
        <div className="px-5">
            <button type="button" className="btn btn-primary position-relative">
                <i className="bi-cart text-white"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">99</span>
            </button>
        </div>
    );
}

export default CartWidget;
