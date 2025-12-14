type CTAProps = {
  ctaHref: string;
};

export function CTA({ ctaHref }: CTAProps) {
  return (
    <section className="bg-emerald-600 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center text-white">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Coordinemos tu evaluación HIFU personalizada
        </h2>
        <p className="text-base leading-relaxed text-emerald-50 sm:text-lg">
          Contanos qué zona querés tratar y reservamos la próxima jornada disponible.
        </p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Consultá disponibilidad para próximas jornadas por WhatsApp"
        >
          Consultá disponibilidad para próximas jornadas
        </a>
        <p className="text-xs text-emerald-100">
          Recordá mencionar tu sede preferida y la zona de interés al momento de escribirnos.
        </p>
      </div>
    </section>
  );
}
