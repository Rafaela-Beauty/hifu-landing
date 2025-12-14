import type { Metadata } from "next";
import Script from "next/script";
import { AboutHifu } from "@/components/AboutHifu";
import { Authority } from "@/components/Authority";
import { CTA } from "@/components/CTA";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { Promo } from "@/components/Promo";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "HIFU Facial y Corporal en Exaltación de la Cruz | Rafaela Beauty",
  description:
    "Tratamientos HIFU realizados por dermocosmiatra matriculada en Capilla del Señor y Los Cardales. Consultá próximas jornadas.",
  alternates: {
    canonical: "/hifu",
  },
  openGraph: {
    title: "HIFU Facial y Corporal en Exaltación de la Cruz | Rafaela Beauty",
    description:
      "Tratamientos HIFU realizados por dermocosmiatra matriculada en Capilla del Señor y Los Cardales. Consultá próximas jornadas.",
    locale: "es_AR",
    type: "website",
  },
};

const whatsappNumber = "5491156438476";
const whatsappMessage = encodeURIComponent(
  "Hola 😊 Quiero consultar por las próximas jornadas de HIFU 2x1 en Rafaela Beauty. Mi sede de preferencia es...",
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Rafaela Beauty",
  description:
    "Tratamientos HIFU facial y corporal realizados por dermocosmiatra matriculada en Exaltación de la Cruz.",
  telephone: "+54 9 11 5643-8476",
  areaServed: "Exaltación de la Cruz, Buenos Aires",
  sameAs: ["https://instagram.com/rafaela_.beauty"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Exaltación de la Cruz",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
};

export default function HifuPage() {
  return (
    <>
      <Script id="schema-local-business" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <main className="bg-linear-to-b from-white to-beige-warm text-slate-900">
        <Hero ctaHref={whatsappLink} />
        <Promo ctaHref={whatsappLink} />
        <Authority />
        <AboutHifu />
        <Locations />
        <Differentials />
        <Testimonials />
        <CTA ctaHref={whatsappLink} />
      </main>
      <Footer />
    </>
  );
}
