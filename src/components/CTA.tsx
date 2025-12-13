type CTAProps = {
  ctaHref: string;
};

export function CTA({ ctaHref }: CTAProps) {
  return (
    <section className="bg-emerald-600 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center text-white">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          ¿Querés reservar tu lugar en las próximas jornadas HIFU?
        </h2>
        <p className="text-base leading-relaxed text-emerald-50 sm:text-lg">
          Enviá un mensaje y coordinemos el turno que mejor se adapte a vos.
        </p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-emerald-700 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Consultar próximas jornadas HIFU por WhatsApp"
        >
          Consultar por WhatsApp
        </a>
        <p className="text-xs text-emerald-100">
          &quot;Hola 😊 Quiero consultar por las próximas jornadas de HIFU 2x1 en Rafaela Beauty. Mi sede de preferencia es...&quot;
        </p>
      </div>
    </section>
  );
}
