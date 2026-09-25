"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../inicio/header";
import Foot from "../inicio/foot";
import { addToCart } from "../lib/cart";
import relojInvicta28000 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER 28000.png";
import relojInvicta15145 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 15145.png";
import relojInvicta28001 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 28001.png";
import relojInvicta3002 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 3002.png";
import relojInvicta30023 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 30023.png";
import relojInvicta33938 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 33938.png";
import relojInvicta34105 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 34105.png";
import relojInvicta34138 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 34138.png";
import relojInvicta3513 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 3513.png";
import relojInvicta35743 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 35743.png";
import relojInvicta37032 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 37032.png";
import relojInvicta37186 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 37186.png";
import relojInvicta39266 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 39266.png";
import relojInvicta44708 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 44708.png";
import relojInvicta47161 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 47161.png";
import relojInvicta47426 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 47426.png";
import relojInvicta48380 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 48380.png";
import relojInvicta48381 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 48381.png";
import relojInvicta49838 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 49838.png";
import relojInvicta50942 from "../imgXcatalogo/imgReloj/INVICTA PRO DIVER REF 50942.png";
import relojInvictaRacing47768 from "../imgXcatalogo/imgReloj/INVICTA RACING REF 47768.png";
import relojInvictaSpecialty47507 from "../imgXcatalogo/imgReloj/INVICTA SPECIALTY REF 47507.png";
import relojInvictaSpecialtyDama47473 from "../imgXcatalogo/imgReloj/INVICTA SPECIALTY DAMA REF 47473.png";
import relojTechnomarine523010 from "../imgXcatalogo/imgReloj/TECHNOMARINEBLACK REF TM 523010.png";
import relojTechnomarine523011 from "../imgXcatalogo/imgReloj/TECHNOMARINEBLACK REEF REF TM 523011.png";
import relojTechnomarine523012 from "../imgXcatalogo/imgReloj/TECHNOMARINEBLACK REEF REF TM 523012.png";

const formatCop = new Intl.NumberFormat("es-CO", {
	currency: "COP",
	maximumFractionDigits: 0,
	style: "currency",
});

const watches = [
	{ reference: "Invicta Pro Diver 28000", detail: "Invicta Pro Diver · Ref. 28000", price: 189000, image: relojInvicta28000 },
	{ reference: "Invicta Pro Diver 15145", detail: "Invicta Pro Diver · Ref. 15145", price: 249000, image: relojInvicta15145 },
	{ reference: "Invicta Pro Diver 28001", detail: "Invicta Pro Diver · Ref. 28001", price: 299000, image: relojInvicta28001 },
	{ reference: "Invicta Pro Diver 3002", detail: "Invicta Pro Diver · Ref. 3002", price: 329000, image: relojInvicta3002 },
	{ reference: "Invicta Pro Diver 30023", detail: "Invicta Pro Diver · Ref. 30023", price: 329000, image: relojInvicta30023 },
	{ reference: "Invicta Pro Diver 33938", detail: "Invicta Pro Diver · Ref. 33938", price: 349000, image: relojInvicta33938 },
	{ reference: "Invicta Pro Diver 34105", detail: "Invicta Pro Diver · Ref. 34105", price: 359000, image: relojInvicta34105 },
	{ reference: "Invicta Pro Diver 34138", detail: "Invicta Pro Diver · Ref. 34138", price: 369000, image: relojInvicta34138 },
	{ reference: "Invicta Pro Diver 3513", detail: "Invicta Pro Diver · Ref. 3513", price: 379000, image: relojInvicta3513 },
	{ reference: "Invicta Pro Diver 35743", detail: "Invicta Pro Diver · Ref. 35743", price: 389000, image: relojInvicta35743 },
	{ reference: "Invicta Pro Diver 37032", detail: "Invicta Pro Diver · Ref. 37032", price: 399000, image: relojInvicta37032 },
	{ reference: "Invicta Pro Diver 37186", detail: "Invicta Pro Diver · Ref. 37186", price: 409000, image: relojInvicta37186 },
	{ reference: "Invicta Pro Diver 39266", detail: "Invicta Pro Diver · Ref. 39266", price: 419000, image: relojInvicta39266 },
	{ reference: "Invicta Pro Diver 44708", detail: "Invicta Pro Diver · Ref. 44708", price: 429000, image: relojInvicta44708 },
	{ reference: "Invicta Pro Diver 47161", detail: "Invicta Pro Diver · Ref. 47161", price: 439000, image: relojInvicta47161 },
	{ reference: "Invicta Pro Diver 47426", detail: "Invicta Pro Diver · Ref. 47426", price: 449000, image: relojInvicta47426 },
	{ reference: "Invicta Pro Diver 48380", detail: "Invicta Pro Diver · Ref. 48380", price: 459000, image: relojInvicta48380 },
	{ reference: "Invicta Pro Diver 48381", detail: "Invicta Pro Diver · Ref. 48381", price: 459000, image: relojInvicta48381 },
	{ reference: "Invicta Pro Diver 49838", detail: "Invicta Pro Diver · Ref. 49838", price: 469000, image: relojInvicta49838 },
	{ reference: "Invicta Pro Diver 50942", detail: "Invicta Pro Diver · Ref. 50942", price: 479000, image: relojInvicta50942 },
	{ reference: "Invicta Racing 47768", detail: "Invicta Racing · Ref. 47768", price: 489000, image: relojInvictaRacing47768 },
	{ reference: "Invicta Specialty 47507", detail: "Invicta Specialty · Ref. 47507", price: 499000, image: relojInvictaSpecialty47507 },
	{ reference: "Invicta Specialty Dama 47473", detail: "Invicta Specialty Dama · Ref. 47473", price: 509000, image: relojInvictaSpecialtyDama47473 },
	{ reference: "Technomarine Black 523010", detail: "Technomarine Black · Ref. TM 523010", price: 519000, image: relojTechnomarine523010 },
	{ reference: "Technomarine Black Reef 523011", detail: "Technomarine Black Reef · Ref. TM 523011", price: 529000, image: relojTechnomarine523011 },
	{ reference: "Technomarine Black Reef 523012", detail: "Technomarine Black Reef · Ref. TM 523012", price: 539000, image: relojTechnomarine523012 },
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
								<span className="product-index">{String(index + 1).padStart(2, "0")}</span>
							</div>
							<div className="catalog-card-info">
								<div>
									<h2>{watch.reference}</h2>
									<p>{watch.detail}</p>
								</div>
								<strong>{formatCop.format(watch.price)}</strong>
							</div>
							<div className="catalog-actions">
								<button type="button" className="catalog-view">Ver</button>
								<button
									type="button"
									className="catalog-add"
									onClick={() => {
										addToCart({ reference: watch.reference, price: formatCop.format(watch.price), category: "Reloj" });
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
