"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "../components/slider";
import InfoBanner from "../components/infobanner";
import { addToCart } from "../lib/cart";
	import reloj28000 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER 28000.png";
	import reloj15145 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 15145.png";
	import reloj28001 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 28001.png";
	import relojRacing from "../imgXcatalogo/imgReloj/INVICTA RACING REF 47768.png";
	import perfume212 from "../imgXcatalogo/imgPerfume/212 VIP.png";
	import perfumeGoodGirl from "../imgXcatalogo/imgPerfume/CAROLINA HERRERA GOOD GIRL.png";
	import perfumeSauvage from "../imgXcatalogo/imgPerfume/DIOR SAUVAGE.png";
	import perfumeOneMillion from "../imgXcatalogo/imgPerfume/One Million.png";

const products = [
	{ name: "Invicta Pro Diver 28000", detail: "Reloj automático · Acero pulido", price: "$ 189.000", className: "product-image-one", image: reloj28000 },
	{ name: "Invicta Pro Diver 15145", detail: "Reloj automático · Acero y negro", price: "$ 249.000", className: "product-image-two", image: reloj15145 },
	{ name: "Invicta Pro Diver 28001", detail: "Reloj automático · Acero dorado", price: "$ 299.000", className: "product-image-three", image: reloj28001 },
	{ name: "Invicta Racing 47768", detail: "Reloj cronógrafo · Acero", price: "$ 489.000", className: "product-image-four", image: relojRacing },
];

const perfumes = [
	{ name: "212 VIP", detail: "Eau de parfum · Floral y amaderado", price: "$ 89.000", className: "perfume-image-one", image: perfume212 },
	{ name: "Good Girl", detail: "Eau de parfum · Almendra y jazmín", price: "$ 139.000", className: "perfume-image-two", image: perfumeGoodGirl },
	{ name: "Dior Sauvage", detail: "Eau de toilette · Bergamota y ambroxan", price: "$ 139.000", className: "perfume-image-three", image: perfumeSauvage },
	{ name: "One Million", detail: "Eau de toilette · Canela y cuero", price: "$ 119.000", className: "perfume-image-four", image: perfumeOneMillion },
];

export default function Body() {
	const [addedReference, setAddedReference] = useState<string | null>(null);

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
								<Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 100vw, 25vw" className="product-art-image" />
								<span className="product-index">0{index + 1}</span>
							</div>
							<div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{product.price}</strong></div>
							<div className="product-actions">
								<button type="button" className="catalog-add" onClick={() => {
									addToCart({ reference: product.name, price: product.price, category: "Reloj" });
									setAddedReference(product.name);
								}}>
									{addedReference === product.name ? "Añadido" : "Añadir al carrito"}
								</button>
							</div>
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
								<Image src={product.image} alt={product.name} fill sizes="(max-width: 720px) 100vw, 25vw" className="product-art-image" />
								<span className="product-index">0{index + 1}</span>
							</div>
							<div className="product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>{product.price}</strong></div>
							<div className="product-actions">
								<button type="button" className="catalog-add" onClick={() => {
									addToCart({ reference: product.name, price: product.price, category: "Perfume" });
									setAddedReference(product.name);
								}}>
									{addedReference === product.name ? "Añadido" : "Añadir al carrito"}
								</button>
							</div>
						</article>
					))}
				</div>
			</section>
		</>
	);
}
