import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "573245030090";
const WHATSAPP_MESSAGE = "Hola, quiero más información sobre sus productos.";

export default function WhatsAppButton() {
	return (
		<a
			href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="whatsapp-float"
			aria-label="Escribir por WhatsApp"
			title="Escribir por WhatsApp"
		>
			<MessageCircle aria-hidden="true" size={25} strokeWidth={2.2} />
			<span>WhatsApp</span>
		</a>
	);
}
