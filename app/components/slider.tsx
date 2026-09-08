"use client";
import { useEffect, useState, type JSX } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import invicta1 from "@/imagenes/invicta1.png";
import invicta2 from "@/imagenes/invicta2.png";
import tecno1 from "@/imagenes/tecno1.png";
import tecno2 from "@/imagenes/tecno2.png";
import Image from "next/image";
import { StaticImageData } from "next/image";


interface imageData{
    src: StaticImageData;
}

const images: imageData[] = [
    { src: invicta1 },
    { src: invicta2 },
    { src: tecno1 },
    { src: tecno2 },
];

export default function Slider(): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [ishovered, setIsHovered] = useState(false);

    const preSlide = (): void => {
        setCurrentIndex((index) => (index - 1 + images.length) % images.length);
    };

    const nextSlide = (): void => {
        setCurrentIndex((index) => (index + 1) % images.length);
    };

    useEffect(() => {   
        if (!ishovered) {
            const interval = setInterval(() => {
                setCurrentIndex((index) => (index + 1) % images.length);
            }, 2000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [ishovered]);

    const handleMouseOver = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    return (
        <div className="relative mx-auto mt-4 w-full">
            <div
                className="group relative mx-12 h-[460px] hover:-translate-y-2"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    fill
                    className="cursor-pointer rounded-xl object-cover transition-all duration-500 ease-in-out"
                />
            </div>

            <button
                type="button"
                aria-label="Imagen anterior"
                className="group absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#111927]/70 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#111927] focus:outline-none focus:ring-2 focus:ring-white"
                onClick={preSlide}
            >
                <ChevronLeft className="h-5 w-5 text-white/75 transition group-hover:text-white" />
                <span className="sr-only">Imagen anterior</span>
            </button>

            <button
                type="button"
                aria-label="Imagen siguiente"
                className="group absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#111927]/70 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#111927] focus:outline-none focus:ring-2 focus:ring-white"
                onClick={nextSlide}
            >
                <ChevronRight className="h-5 w-5 text-white/75 transition group-hover:text-white" />
                <span className="sr-only">Imagen siguiente</span>
            </button>

            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-[#111927]/55 px-3 py-2 backdrop-blur-sm">
                {images.map((_, index) => (
                    <button
                        type="button"
                        key={index}
                        aria-current={index === currentIndex ? "true" : undefined}
                        aria-label={`Ir a la imagen ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${index === currentIndex ? "w-8 bg-[#beff46]" : "w-2 bg-white/65 hover:bg-white"}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <span className="sr-only">Imagen {index + 1}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}