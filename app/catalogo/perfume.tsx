"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../inicio/header";
import Foot from "../inicio/foot";
import { addToCart } from "../lib/cart";

const perfumes = [
	{ reference: "Aura Nº 01", detail: "Eau de parfum · Notas amaderadas", price: "€ 89", image: "/imagenes/perfume-01.jpg" },
	{ reference: "Aura Nº 02", detail: "Eau de parfum · Jazmín y ámbar", price: "€ 95", image: "/imagenes/perfume-02.jpg" },
	{ reference: "Aura Nº 03", detail: "Eau de toilette · Cítricos y cedro", price: "€ 79", image: "/imagenes/perfume-03.jpg" },
	{ reference: "Aura Nº 04", detail: "Eau de parfum · Rosa y almizcle", price: "€ 99", image: "/imagenes/perfume-04.jpg" },
];

export default function PerfumeCatalogo() {
	const [addedReference, setAddedReference] = useState<string | null>(null);

	return (
		<main>
			<Header />
			<section className="catalog-page" aria-labelledby="perfume-catalog-title">
				<div className="catalog-heading">
					<div>
						<p className="eyebrow">Colección de perfumería</p>
						<h1 id="perfume-catalog-title">Todos los perfumes</h1>
					</div>
					<p className="catalog-intro">Esencias creadas para dejar una impresión sutil, personal e inolvidable.</p>
				</div>
				<div className="catalog-grid">
					{perfumes.map((perfume, index) => (
						<article className="catalog-card" key={perfume.reference}>
							<div className="catalog-image-wrap">
								<Image src={perfume.image} alt={perfume.reference} className="catalog-image" fill sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 25vw" />
								<span className="product-index">0{index + 1}</span>
							</div>
							<div className="catalog-card-info">
								<div>
									<h2>{perfume.reference}</h2>
									<p>{perfume.detail}</p>
								</div>
								<strong>{perfume.price}</strong>
							</div>
							<div className="catalog-actions">
								<button type="button" className="catalog-view">Ver</button>
								<button type="button" className="catalog-add" onClick={() => {
									addToCart({ reference: perfume.reference, price: perfume.price, category: "Perfume" });
									setAddedReference(perfume.reference);
								}}>
									{addedReference === perfume.reference ? "Añadido" : "Añadir al carrito"}
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
