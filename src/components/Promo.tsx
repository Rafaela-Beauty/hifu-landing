type PromoProps = {
  ctaHref: string;
};

export function Promo({ ctaHref }: PromoProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-10 text-center sm:px-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-emerald-900">Promo HIFU 2x1</h2>
          <p className="text-base text-emerald-800">
            Dos personas, misma zona, mismo turno.
          </p>
        </div>
        <ul className="space-y-2 text-left text-sm leading-relaxed text-emerald-900 sm:text-base">
          <li>• Jornadas específicas</li>
          <li>• Disponibilidad según sede</li>
          <li>• Tratamientos realizados por profesional capacitada</li>
        </ul>
        <div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-medium text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            aria-label="Consultar jornadas disponibles de HIFU por WhatsApp"
          >
            Consultar jornadas disponibles
          </a>
        </div>
        <p className="text-xs text-emerald-900/80">
          El valor del tratamiento depende de la zona y la sede.
        </p>
      </div>
    </section>
  );
}
