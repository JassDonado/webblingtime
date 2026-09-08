import { ShoppingCartPlus } from 'lucide-react';

export default function Header() {
	return (
		<header className="site-header">
			<a className="brand" href="#inicio" aria-label="BlingTime, inicio">
				<span>BlingTime & Perfum</span>
			</a>
			<nav className="main-nav" aria-label="Navegación principal">
				<a href="#relojes">relojes</a>
				<a href="#perfumes">Perfumes</a>
				<a href="#contacto">Contactanos</a>
                <a href="#nosotros">nosotros</a>
			</nav>
			<a className="cart-link" href="#coleccion">
                <ShoppingCartPlus />
				<span className="cart-count">0</span>
			</a>
		</header>
	);
}