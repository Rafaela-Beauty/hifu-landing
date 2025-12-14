type CTAProps = {
  ctaHref: string;
};

export function CTA({ ctaHref }: CTAProps) {
  return (
    <section className="bg-linear-to-br from-sage-dark to-sage-primary py-20 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
        <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Coordinemos tu evaluación HIFU personalizada
        </h2>
        <p className="text-lg leading-relaxed text-white/95 sm:text-xl">
          Contanos qué zona querés tratar y reservamos la próxima jornada disponible.
        </p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-sage-dark shadow-2xl transition hover:bg-beige-warm hover:shadow-2xl focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Consultá disponibilidad para próximas jornadas por WhatsApp"
        >
          Consultá disponibilidad para próximas jornadas
        </a>
        <p className="text-sm text-white/90">
          Recordá mencionar tu sede preferida y la zona de interés al momento de escribirnos.
        </p>
      </div>
    </section>
  );
}
