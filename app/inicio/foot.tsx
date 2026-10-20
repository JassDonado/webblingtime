import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573244495800";

function InstagramIcon() {
	return (
		<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect width="20" height="20" x="2" y="2" rx="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<path d="M17.5 6.5h.01" />
		</svg>
	);
}

export default function Foot() {
	return (
		<footer className="site-footer" id="contacto">
			<div className="footer-intro"><p className="eyebrow">BlingTime journal</p><h2>El buen tiempo<br /><em>se comparte.</em></h2></div>
			<div className="footer-action">
				<p>Conoce nuestras novedades y contáctanos para encontrar tu próxima pieza.</p>
				<div className="footer-social-links">
					<a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp" title="WhatsApp">
						<MessageCircle aria-hidden="true" size={22} strokeWidth={2} />
					</a>
					<a href="https://www.instagram.com/blingtime_parfum?rpxt=MTl6MThqenk1YnN3dQ==" target="_blank" rel="noopener noreferrer" aria-label="Visitar Instagram" title="Instagram">
						<InstagramIcon />
					</a>
				</div>
			</div>
			<div className="footer-bottom"><span>© 2026 BlingTime</span><div><a href="#inicio">Privacidad</a><a href="#inicio">Envíos</a></div></div>
		</footer>
	);
}
