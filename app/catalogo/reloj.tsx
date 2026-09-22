"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../inicio/header";
import Foot from "../inicio/foot";
import { addToCart } from "../lib/cart";

const watches = [
	{ reference: "Silueta Nº 01", detail: "Reloj automático · Acero pulido", price: "€ 249", image: "/imagenes/reloj-01.jpg" },
	{ reference: "Silueta Nº 02", detail: "Reloj de cuarzo · Cuero italiano", price: "€ 189", image: "/imagenes/reloj-02.jpg" },
	{ reference: "Silueta Nº 03", detail: "Reloj automático · Oro mate", price: "€ 299", image: "/imagenes/reloj-03.jpg" },
	{ reference: "Silueta Nº 04", detail: "Reloj mecánico · Acero cepillado", price: "€ 329", image: "/imagenes/reloj-04.jpg" },
];

export default function RelojCatalogo() {
	const [addedReference, setAddedReference] = useState<string | null>(null);

	return (
		<main>
			<Header />
			<section className="catalog-page" aria-labelledby="catalog-title">
				<div className="catalog-heading">
					<div>
						<p className="eyebrow">Colección de relojería</p>
						<h1 id="catalog-title">Todos los relojes</h1>
					</div>
					<p className="catalog-intro">Piezas pensadas para acompañar cada momento con precisión y carácter.</p>
				</div>
				<div className="catalog-grid">
					{watches.map((watch, index) => (
						<article className="catalog-card" key={watch.reference}>
							<div className="catalog-image-wrap">
								<Image src={watch.image} alt={watch.reference} className="catalog-image" fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw" />
								<span className="product-index">0{index + 1}</span>
							</div>
							<div className="catalog-card-info">
								<div>
									<h2>{watch.reference}</h2>
									<p>{watch.detail}</p>
								</div>
								<strong>{watch.price}</strong>
							</div>
							<div className="catalog-actions">
								<button type="button" className="catalog-view">Ver</button>
								<button
									type="button"
									className="catalog-add"
									onClick={() => {
										addToCart({ reference: watch.reference, price: watch.price, category: "Reloj" });
										setAddedReference(watch.reference);
									}}
								>
									{addedReference === watch.reference ? "Añadido" : "Añadir al carrito"}
								</button>
							</div>
						</article>
					))}
				</div>
			</section>
			<Foot />
		</main>
	);
}
