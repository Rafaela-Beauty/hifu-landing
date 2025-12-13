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
            <p className="text-sm font-semibold text-emerald-900">Mejora la firmeza</p>
            <p className="text-sm text-slate-600">Optimiza la densidad y tonicidad de la piel.</p>
          </article>
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Reduce flacidez</p>
            <p className="text-sm text-slate-600">Ayuda a redefinir contornos faciales y corporales.</p>
          </article>
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Resultados progresivos</p>
            <p className="text-sm text-slate-600">Los cambios continúan semanas después del tratamiento.</p>
          </article>
          <article className="rounded-2xl border border-white bg-white px-5 py-4 shadow-sm shadow-emerald-100">
            <p className="text-sm font-semibold text-emerald-900">Procedimiento no invasivo</p>
            <p className="text-sm text-slate-600">Sin tiempo de recuperación, ideal para agendas intensas.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
