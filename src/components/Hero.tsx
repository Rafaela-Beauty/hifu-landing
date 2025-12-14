type HeroProps = {
  ctaHref: string;
};

export function Hero({ ctaHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-beige-warm/30 to-beige-light/20 py-20 sm:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 text-center sm:text-left">
        <div className="inline-flex items-center justify-center gap-2 self-center text-xs font-medium uppercase tracking-wider text-sage-dark sm:self-start">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sage-dark"></span>
          Dermocosmiatra Matriculada · Exaltación de la Cruz
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Rejuvenecé tu piel sin cirugía — HIFU profesional en Rafaela Beauty
        </h1>
        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
          Resultados naturales y progresivos con atención personalizada por dermocosmiatra matriculada.
        </p>
        <div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sage-dark px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sage-primary/25 transition hover:bg-sage-primary hover:shadow-xl hover:shadow-sage-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
            aria-label="Consultá disponibilidad para próximas jornadas por WhatsApp"
          >
            Consultá disponibilidad para próximas jornadas
          </a>
        </div>
      </div>
    </section>
  );
}
