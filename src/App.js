// assets
import Logo from "./img/logo.png";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

const title    = "World Market";
const homeText = "En construcción. Pronto podrás usar el e-commerce.";

function App() {
	return (
		<div>
			<NavBar logo = {Logo} title = {title} />
			<ItemListContainer greeting = {homeText} />
			<Footer logo = {Logo} title = {title} />
		</div>
	);
}

export default App;
