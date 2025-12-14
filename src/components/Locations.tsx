export function Locations() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-10 px-6">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Donde trabaja Rafaela Beauty</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <article className="rounded-3xl border-2 border-beige-light bg-linear-to-br from-white to-beige-warm/30 px-8 py-8 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-sage-dark">Capilla del Señor</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              HIFU facial y corporal, con aparatología completa en un entorno privado y tranquilo pensado para desconectar.
            </p>
          </article>
          <article className="rounded-3xl border-2 border-beige-light bg-linear-to-br from-white to-beige-warm/30 px-8 py-8 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-sage-dark">Los Cardales</h3>
            <p className="mt-2 text-sm font-medium italic text-slate-600">
              En alianza con{" "}
              <a
                href="https://www.instagram.com/aura_saludbelleza/"
                target="_blank"
                rel="noreferrer"
                className="text-sage-dark underline decoration-sage-primary/50 underline-offset-2 transition hover:text-sage-primary hover:decoration-sage-primary"
              >
                Aura Salud y Belleza
              </a>
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              HIFU facial en consultorio a la calle, ideal si querés resultados sin desplazarte lejos de casa.
            </p>
          </article>
        </div>
        <p className="text-xs text-slate-500 sm:text-sm">
          Los tratamientos disponibles pueden variar según la sede seleccionada.
        </p>
      </div>
    </section>
  );
}
