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
					<p className="eyebrow">Relojes contemporáneos · Desde 2014</p>
					<h1>El tiempo es un lujo; vístelo con elegancia.</h1>
					<p className="hero-description">Diseños precisos para quienes saben que los grandes detalles no necesitan llamar la atención.</p>
					<a className="primary-button" href="#coleccion">Ver colección <span aria-hidden="true">→</span></a>
				</div>
				<div className="hero-art" aria-label="Reloj BlingTime de esfera negra sobre fondo terracota">
					<div className="hero-sun" />
					<div className="hero-watch">
						<span className="watch-strap watch-strap-top" />
						<span className="watch-face"><i /><b /></span>
						<span className="watch-strap watch-strap-bottom" />
					</div>
					<p className="hero-caption">La precisión también puede ser serena.</p>
				</div>
			</section>
			<section className="manifesto" id="historia">
				<p className="eyebrow">El manifiesto BlingTime</p>
				<p className="manifesto-copy">Menos ruido. Más intención. Cada pieza se diseña para quedarse contigo mucho después de que pase la tendencia.</p>
			</section>
			<section className="collection" id="coleccion">
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
