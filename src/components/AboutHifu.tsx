export function AboutHifu() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-6">
        <h2 className="text-2xl font-semibold text-slate-900">¿Qué es el HIFU?</h2>
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
          El HIFU (Ultrasonido Focalizado de Alta Intensidad) estimula la producción natural de colágeno, logrando un efecto tensor y rejuvenecedor sin cirugía.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Piel más firme y tonificada</p>
            <p className="text-sm text-slate-600">Recuperá sostén y textura sin recurrir a técnicas invasivas.</p>
          </article>
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Efecto lifting natural sin cirugía</p>
            <p className="text-sm text-slate-600">Definí contornos faciales y corporales con un resultado armónico.</p>
          </article>
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Resultados visibles que mejoran con el tiempo</p>
            <p className="text-sm text-slate-600">El estímulo de colágeno continúa trabajando semanas después.</p>
          </article>
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Procedimiento no invasivo y sin recuperación</p>
            <p className="text-sm text-slate-600">Terminá la sesión y seguí con tu día sin pausas.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
