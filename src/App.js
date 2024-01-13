// router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// pages
import Layout from "./pages/Layout";
import Error from "./pages/Error";

// components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import Checkout from "./components/Checkout/Checkout";

// context
import CartContext from './context/CartContext.js';

// assets
import "./App.css";

function App() {
	return (
		<CartContext>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<ItemListContainer />} />
						<Route path="/category/:id" element={<ItemListContainer />} />
						<Route path="/item/:id" element={<ProductDetailContainer />} />
						<Route path="/cart" element={<Checkout />} />
						<Route path="*" element={<Error />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CartContext>
	);
}

export default App;
