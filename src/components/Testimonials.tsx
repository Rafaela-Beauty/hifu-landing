type Testimonial = {
  name: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mariana G.",
    message:
      "Después de la primera sesión de HIFU noté la piel más firme. Me encantó la atención y la calma del espacio.",
  },
  {
    name: "Laura P.",
    message:
      "Elegí la promo 2x1 con mi hermana. La dermocosmiatra nos explicó todo y seguimos viendo mejoras.",
  },
  {
    name: "Gabriela S.",
    message:
      "Los resultados del HIFU en la zona del cuello fueron increíbles, sin tener que pasar por una cirugía.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-8 px-6">
        <div className="space-y-3">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Testimonios</h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Fotos reales del centro y testimonios de pacientes.
            <span className="block text-sm text-slate-500">
              Estos testimonios son de ejemplo. Reemplazalos por experiencias reales cuando estén disponibles.
            </span>
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border-2 border-beige-light bg-gradient-to-br from-white to-beige-warm/20 px-7 py-7 shadow-lg"
            >
              <p className="text-base leading-relaxed text-slate-700">
                "{testimonial.message}"
              </p>
              <p className="mt-4 text-sm font-semibold text-sage-dark">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
