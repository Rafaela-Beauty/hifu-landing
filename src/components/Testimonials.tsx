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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-6 px-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">Testimonios</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Fotos reales del centro y testimonios de pacientes.
            <span className="block text-xs text-slate-500">
              Estos testimonios son de ejemplo. Reemplazalos por experiencias reales cuando estén disponibles.
            </span>
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-slate-50 px-6 py-6"
            >
              <p className="text-sm leading-relaxed text-slate-700">
                “{testimonial.message}”
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
