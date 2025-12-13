type HeroProps = {
  ctaHref: string;
};

export function Hero({ ctaHref }: HeroProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-center sm:text-left">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          HIFU Facial y Corporal en Exaltación de la Cruz
        </h1>
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
          Resultados visibles, sin cirugía, realizados por dermocosmiatra matriculada.
        </p>
        <div>
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-medium text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            aria-label="Consultar próximas jornadas HIFU por WhatsApp"
          >
            Consultar próximas jornadas HIFU
          </a>
        </div>
      </div>
    </section>
  );
}
