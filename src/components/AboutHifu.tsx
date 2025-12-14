export function AboutHifu() {
  return (
    <section className="bg-beige-warm/50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">¿Qué es el HIFU?</h2>
        <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
          El HIFU (Ultrasonido Focalizado de Alta Intensidad) estimula la producción natural de colágeno, logrando un efecto tensor y rejuvenecedor sin cirugía.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-3xl border-2 border-sage-primary/30 bg-white px-6 py-5 shadow-lg shadow-sage-primary/10">
            <p className="font-display text-base font-semibold text-sage-dark">Piel más firme y tonificada</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Recuperá sostén y textura sin recurrir a técnicas invasivas.</p>
          </article>
          <article className="rounded-3xl border-2 border-sage-primary/30 bg-white px-6 py-5 shadow-lg shadow-sage-primary/10">
            <p className="font-display text-base font-semibold text-sage-dark">Efecto lifting natural sin cirugía</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Definí contornos faciales y corporales con un resultado armónico.</p>
          </article>
          <article className="rounded-3xl border-2 border-sage-primary/30 bg-white px-6 py-5 shadow-lg shadow-sage-primary/10">
            <p className="font-display text-base font-semibold text-sage-dark">Resultados visibles que mejoran con el tiempo</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">El estímulo de colágeno continúa trabajando semanas después.</p>
          </article>
          <article className="rounded-3xl border-2 border-sage-primary/30 bg-white px-6 py-5 shadow-lg shadow-sage-primary/10">
            <p className="font-display text-base font-semibold text-sage-dark">Procedimiento no invasivo y sin recuperación</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Terminá la sesión y seguí con tu día sin pausas.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
