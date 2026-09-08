	import Slider from "../components/slider";

const products = [
	{ name: "Silueta Nº 01", detail: "Reloj automático · Acero pulido", price: "€ 249", className: "product-image-one" },
	{ name: "Silueta Nº 02", detail: "Reloj de cuarzo · Cuero italiano", price: "€ 189", className: "product-image-two" },
	{ name: "Silueta Nº 03", detail: "Reloj automático · Oro mate", price: "€ 299", className: "product-image-three" },
];

export default function Body() {
	return (
		<>
			<section className="hero" id="inicio">
				<div className="hero-copy">
					<h1>El tiempo es un lujo; vístelo con elegancia.</h1>
					<a className="primary-button" href="#coleccion">Ver relojes <span aria-hidden="true">→</span></a>
				</div>
				<div className="hero-slider">
					<Slider />
                </div>
			</section>
			<section className="manifesto" id="historia">
				<p className="eyebrow">El manifiesto BlingTime</p>
				<p className="manifesto-copy">Menos ruido. Más intención. Cada pieza se diseña para quedarse contigo mucho después de que pase la tendencia.</p>
			</section>
			<section className="collection" id="relojes">
				<div className="section-heading">
					<div><p className="eyebrow">Selección de la casa</p><h2>La hora dorada</h2></div>
					<a className="text-link" href="#contacto">Explorar todo <span aria-hidden="true">↗</span></a>
				</div>
				<div className="product-grid">
					{products.map((product, index) => (
						<article className="product-card" key={product.name}>
							<div className={`${product.className} product-art`}>
								<span className="product-watch" aria-hidden="true"><i /><b /></span>
								<span className="product-index">0{index + 1}</span>
							</div>
							<div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{product.price}</strong></div>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
