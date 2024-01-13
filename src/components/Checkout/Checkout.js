// hooks
import {useState, useContext} from 'react';

// context
import {DataContext} from "../../context/CartContext";

// assets
import './Checkout.css';

function Checkout() {
    const {cart, reset} = useContext(DataContext);

    const [name, setName]         = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone]       = useState("");
    const [email, setEmail]       = useState("");
    const [email2, setEmail2]     = useState("");

    const [status, setStatus]           = useState(0);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [error, setError]             = useState(false);

    function handleValidation() {
        if(name.trim() == '' || lastname.trim() == '' || phone.trim() == '' || email.trim() == '' || email2.trim() == '') {
            setError(true);
            setBtnDisabled(true);
            return;
        }

        const regexEmail = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)$/;
        if(!regexEmail.test(email.trim())) {
            setError(true);
            setBtnDisabled(true);
            return;
        }

        if(email.trim() !== email2.trim()) {
            setError(true);
            setBtnDisabled(true);
            return;
        }

        setError(false);
        setBtnDisabled(false);
    }

    function handleSubmit(e) {
        e.preventDefault();


        setStatus();

    }

    return (
        <div className="container">
            <div className="row g-4 mt-0">
                <div className="col-6">
                    <h4>Resumen del pedido</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-end pe-5">Cantidad</th>
                                <th>Producto</th>
                                <th className="text-end pe-5">Precio u.</th>
                                <th className="text-end pe-5">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.products.map((product) => {
                            return (
                            <tr key={product.id}>
                                <td className="text-end pe-5">{product.quantity}</td>
                                <td>{product.title}</td>
                                <td className="text-end pe-5">$ {product.price}</td>
                                <td className="text-end pe-5">$ {product.price * product.quantity}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                        <tfoot className="table-group-divider table-primary">
                            <tr className="h5">
                                <td className="text-end pe-5">{cart.quantity}</td>
                                <td colSpan="2"></td>
                                <td className="text-end pe-5">$ {cart.total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="col-1"></div>
                <div className="col">
                    {status === 0 ? (
                    <form>
                        <h4>Datos personales</h4>
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label mb-0">Nombre</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} onKeyUp={handleValidation} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="form-label mb-0">Apellido</label>
                            <input type="text" className="form-control" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} onKeyUp={handleValidation} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="form-label mb-0">Teléfono</label>
                            <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} onKeyUp={handleValidation} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label mb-0">Email</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={handleValidation} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email2" className="form-label mb-0">Repetir email</label>
                            <input type="email" className="form-control" id="email2" value={email2} onChange={(e) => setEmail2(e.target.value)} onKeyUp={handleValidation} />
                        </div>
                        <button className="btn btn-success" disabled={btnDisabled} onClick={handleSubmit}>COMPRAR</button>

                    </form>
                    ) : (
                    <div className="alert alert-success">
                        <p className="text-success">Gracias por su compra</p>
                        <h4>ID de compra: <strong>{status}</strong></h4>
                    </div>
                    )}

                    {error &&
                    <div className="alert alert-warning mt-3">
                        <p className="text-danger mb-0">Por favor complete todos los campos con datos válidos.</p>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Checkout;
