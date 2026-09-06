export default function Foot() {
	return (
		<footer className="site-footer" id="contacto">
			<div className="footer-intro"><p className="eyebrow">BlingTime journal</p><h2>El buen tiempo<br /><em>se comparte.</em></h2></div>
			<div className="footer-action"><p>Recibe historias de diseño, novedades y acceso anticipado a nuestras piezas.</p><form className="signup-form"><label className="sr-only" htmlFor="email">Tu correo electrónico</label><input id="email" type="email" placeholder="Tu correo electrónico" required /><button type="submit" aria-label="Suscribirme">↗</button></form></div>
			<div className="footer-bottom"><span>© 2026 BlingTime</span><div><a href="#inicio">Instagram</a><a href="#inicio">Privacidad</a><a href="#inicio">Envíos</a></div></div>
		</footer>
	);
}
