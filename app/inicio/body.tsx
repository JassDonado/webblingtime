	import Slider from "../components/slider";
	import InfoBanner from "../components/infobanner";

const products = [
	{ name: "Silueta Nº 01", detail: "Reloj automático · Acero pulido", price: "€ 249", className: "product-image-one" },
	{ name: "Silueta Nº 02", detail: "Reloj de cuarzo · Cuero italiano", price: "€ 189", className: "product-image-two" },
	{ name: "Silueta Nº 03", detail: "Reloj automático · Oro mate", price: "€ 299", className: "product-image-three" },
	{ name: "Silueta Nº 04", detail: "Reloj mecánico · Acero cepillado", price: "€ 329", className: "product-image-four" },
];

const perfumes = [
	{ name: "Aura Nº 01", detail: "Eau de parfum · Notas amaderadas", price: "€ 89", className: "perfume-image-one" },
	{ name: "Aura Nº 02", detail: "Eau de parfum · Jazmín y ámbar", price: "€ 95", className: "perfume-image-two" },
	{ name: "Aura Nº 03", detail: "Eau de toilette · Cítricos y cedro", price: "€ 79", className: "perfume-image-three" },
	{ name: "Aura Nº 04", detail: "Eau de parfum · Rosa y almizcle", price: "€ 99", className: "perfume-image-four" },
];

export default function Body() {
	return (
		<>
			<section className="hero" id="inicio">
				<div className="hero-copy">
					<h1>El tiempo es un lujo; vístelo con elegancia.</h1>
					<a className="primary-button" href="#relojes">Ver catalogo<span aria-hidden="true">→</span></a>
				</div>
				<div className="hero-slider">
					<Slider />
                </div>
			</section>
			<section className="" >
				<InfoBanner />
			</section>
			<section className="collection" id="relojes">
				<div className="section-heading">
					<div><p className="eyebrow">Selección de la casa</p><h2>La hora dorada</h2></div>
					<a className="text-link" href="/catalogo/reloj">Ver todos <span aria-hidden="true">↗</span></a>
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
			<section className="collection" id="perfumes">
				<div className="section-heading">
					<div><p className="eyebrow">Esencias de la casa</p><h2>El aroma dorado</h2></div>
					<a className="text-link" href="/catalogo/perfume">Ver todos <span aria-hidden="true">↗</span></a>
				</div>
				<div className="product-grid">
					{perfumes.map((product, index) => (
						<article className="product-card" key={product.name}>
							<div className={`${product.className} product-art`}>
								<span className="product-bottle" aria-hidden="true" />
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
