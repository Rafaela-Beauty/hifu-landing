export function Authority() {
  return (
    <section className="bg-gradient-to-b from-white to-beige-warm/50 py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 sm:flex-row sm:items-start sm:gap-12">
        <div className="flex-shrink-0">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-sage-primary bg-beige-light shadow-xl">
            {/* Placeholder para tu foto - reemplazar con <Image> cuando tengas la foto */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-beige-light to-beige-warm text-center text-xs font-medium text-slate-600">
              Tu foto
              <br />
              profesional
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark">
            Rafaela Beauty
          </p>
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
            En Rafaela Beauty trabajamos con aparatología propia y protocolos personalizados para lograr resultados reales, cuidando tu piel y tu bienestar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700 sm:justify-start">
            <span className="rounded-full border-2 border-sage-primary bg-white px-5 py-2 shadow-sm">
              Capilla del Señor
            </span>
            <span className="rounded-full border-2 border-sage-primary bg-white px-5 py-2 shadow-sm">
              Los Cardales
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
