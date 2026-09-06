export default function Header() {
	return (
		<header className="site-header">
			<a className="brand" href="#inicio" aria-label="BlingTime, inicio">
				<span className="brand-mark" aria-hidden="true">⌁</span>
				<span>BlingTime</span>
			</a>
			<nav className="main-nav" aria-label="Navegación principal">
				<a href="#coleccion">Colección</a>
				<a href="#historia">Nuestra historia</a>
				<a href="#contacto">Contacto</a>
			</nav>
			<a className="cart-link" href="#coleccion">
				<span className="cart-icon" aria-hidden="true">♧</span>
				<span>Carrito</span>
				<span className="cart-count">0</span>
			</a>
		</header>
	);
}