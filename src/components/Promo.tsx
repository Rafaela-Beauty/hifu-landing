type PromoProps = {
  ctaHref: string;
};

export function Promo({ ctaHref }: PromoProps) {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative flex flex-col gap-6 rounded-3xl border-4 border-sage-dark bg-gradient-to-br from-beige-warm to-beige-light px-8 py-12 text-center shadow-2xl shadow-sage-primary/20 sm:px-12">
          <div className="absolute -right-3 -top-3 rotate-12 rounded-full bg-sage-dark px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
            Promo Especial
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold text-sage-dark sm:text-4xl">
              Promo HIFU 2×1 — Vení con quien quieras
            </h2>
            <p className="text-lg leading-relaxed text-slate-800 sm:text-xl">
              Dos personas, misma zona y mismo turno, en jornadas especiales. Una forma inteligente de acceder a tecnología de vanguardia y compartir la experiencia.
            </p>
          </div>
          <ul className="space-y-3 text-left text-base leading-relaxed text-slate-800">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-sage-dark"></span>
              <span>Jornadas especiales con cupos limitados</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-sage-dark"></span>
              <span>Disponibilidad sujeta a la sede elegida</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-sage-dark"></span>
              <span>Atención directa con dermocosmiatra matriculada</span>
            </li>
          </ul>
          <div>
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sage-dark px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sage-dark/30 transition hover:bg-sage-primary hover:shadow-xl hover:shadow-sage-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
              aria-label="Consultá disponibilidad para próximas jornadas por WhatsApp"
            >
              Consultá disponibilidad para próximas jornadas
            </a>
          </div>
          <p className="text-sm text-slate-600">
            El valor del tratamiento depende de la zona y la sede.
          </p>
        </div>
      </div>
    </section>
  );
}
