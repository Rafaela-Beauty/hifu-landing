"use client";

import { useState, useEffect } from "react";

type Testimonial = {
  name: string;
  message: string;
  treatment: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mariana G.",
    treatment: "HIFU Facial",
    message:
      "Después de la primera sesión de HIFU noté la piel más firme. Me encantó la atención y la calma del espacio.",
  },
  {
    name: "Laura P.",
    treatment: "HIFU 2x1 con mi hermana",
    message:
      "Elegí la promo 2x1 con mi hermana. La dermocosmiatra nos explicó todo y seguimos viendo mejoras.",
  },
  {
    name: "Gabriela S.",
    treatment: "HIFU Cuello",
    message:
      "Los resultados del HIFU en la zona del cuello fueron increíbles, sin tener que pasar por una cirugía.",
  },
  {
    name: "Patricia R.",
    treatment: "HIFU Facial y Corporal",
    message:
      "Combiné facial y corporal en Capilla del Señor. El cambio fue progresivo pero muy notorio. Totalmente recomendable.",
  },
];

type BeforeAfter = {
  title: string;
  zone: string;
  beforeSrc: string;
  afterSrc: string;
};

const beforeAfterGallery: BeforeAfter[] = [
  {
    title: "Dermaplaning facial",
    zone: "Rostro completo",
    beforeSrc: "/images/after-before/one-before.jpeg",
    afterSrc: "/images/after-before/one-after.jpeg",
  },
  {
    title: "Dermaplaning facial",
    zone: "Rostro completo",
    beforeSrc: "/images/after-before/two-before.jpeg",
    afterSrc: "/images/after-before/two-after.jpeg",
  },
  {
    title: "Limpieza facial profunda",
    zone: "Rostro y cuello",
    beforeSrc: "/images/after-before/three-before.jpeg",
    afterSrc: "/images/after-before/three-after.jpeg",
  },
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const nextGallerySlide = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % beforeAfterGallery.length);
  };

  const prevGallerySlide = () => {
    setCurrentGalleryIndex(
      (prev) => (prev - 1 + beforeAfterGallery.length) % beforeAfterGallery.length
    );
  };

  // Calcular cuántas imágenes mostrar según el tamaño de pantalla
  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 3; // lg: 3 slides
    if (window.innerWidth >= 640) return 2; // sm: 2 slides
    return 1; // mobile: 1 slide
  };

  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Resultados Reales
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
            Conocé las experiencias de quienes ya confiaron en Rafaela Beauty y descubrí los cambios que el HIFU puede lograr.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border-2 border-beige-light bg-linear-to-br from-beige-warm/40 to-white px-8 py-10 shadow-xl sm:px-12 sm:py-12">
          <div className="relative min-h-45">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 text-center transition-all duration-700 ${
                  index === currentTestimonial
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  &quot;{testimonial.message}&quot;
                </p>
                <div>
                  <p className="font-display text-base font-semibold text-sage-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "w-8 bg-sage-dark"
                    : "w-2.5 bg-sage-primary/40 hover:bg-sage-primary/60"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Before/After Gallery */}
        <div className="space-y-6">
          <h3 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            Antes y Después
          </h3>

          {/* Carousel Container */}
          <div className="relative mx-auto max-w-6xl">
            {/* Navigation Buttons */}
            <button
              onClick={prevGallerySlide}
              className="absolute left-0 top-1/2 z-10 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-xl transition hover:bg-sage-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-sage-dark sm:-translate-x-6"
              aria-label="Imagen anterior"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextGallerySlide}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-xl transition hover:bg-sage-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-sage-dark sm:translate-x-6"
              aria-label="Imagen siguiente"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden px-4">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${(currentGalleryIndex * 100) / visibleSlides}%)`,
                }}
              >
                {beforeAfterGallery.map((item, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                  >
                    <article className="group overflow-hidden rounded-3xl border-2 border-beige-light bg-white shadow-lg transition hover:shadow-2xl">
                      <div className="relative grid grid-cols-2">
                        <div className="relative aspect-4/5 overflow-hidden">
                          <img
                            src={item.beforeSrc}
                            alt={`Antes del tratamiento ${item.zone}`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-2 left-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
                            Antes
                          </div>
                        </div>
                        <div className="relative aspect-4/5 overflow-hidden">
                          <img
                            src={item.afterSrc}
                            alt={`Después del tratamiento ${item.zone}`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-2 right-2 rounded-full bg-sage-dark px-3 py-1 text-xs font-semibold text-white">
                            Después
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-4">
                        <p className="font-display text-base font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-600">{item.zone}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({
                length: Math.ceil(beforeAfterGallery.length / visibleSlides),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index * visibleSlides)}
                  className={`h-2.5 rounded-full transition-all ${
                    Math.floor(currentGalleryIndex / visibleSlides) === index
                      ? "w-8 bg-sage-dark"
                      : "w-2.5 bg-sage-primary/40 hover:bg-sage-primary/60"
                  }`}
                  aria-label={`Ver grupo de imágenes ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
