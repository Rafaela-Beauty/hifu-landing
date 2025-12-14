type PromoProps = {
  ctaHref: string;
};

export function Promo({ ctaHref }: PromoProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-emerald-100 bg-emerald-50 px-6 py-10 text-center sm:px-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-emerald-900">
            Promo HIFU 2×1 — Vení con quien quieras
          </h2>
          <p className="text-base text-emerald-800">
            Dos personas, misma zona y mismo turno, en jornadas especiales. Una forma inteligente de acceder a tecnología de vanguardia y compartir la experiencia.
          </p>
        </div>
        <ul className="space-y-2 text-left text-sm leading-relaxed text-emerald-900 sm:text-base">
          <li>• Jornadas especiales con cupos limitados</li>
          <li>• Disponibilidad sujeta a la sede elegida</li>
          <li>• Atención directa con dermocosmiatra matriculada</li>
        </ul>
        <div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-medium text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            aria-label="Consultá disponibilidad para próximas jornadas por WhatsApp"
          >
            Consultá disponibilidad para próximas jornadas
          </a>
        </div>
        <p className="text-xs text-emerald-900/80">
          El valor del tratamiento depende de la zona y la sede.
        </p>
      </div>
    </section>
  );
}
