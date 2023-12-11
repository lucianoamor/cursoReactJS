// router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// pages
import Layout from "./pages/Layout";
import Error from "./pages/Error";

// components
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ProductDetail from "./components/ProductDetail/ProductDetail";

// assets
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<ItemListContainer />} />
					<Route path="/category/:id" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ProductDetail />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
