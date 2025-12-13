export function Locations() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <h2 className="text-2xl font-semibold text-slate-900">Sedes Rafaela Beauty</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-3xl border border-slate-100 bg-slate-50 px-6 py-6">
            <h3 className="text-xl font-semibold text-slate-900">Capilla del Señor</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• HIFU facial</li>
              <li>• HIFU corporal</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-100 bg-slate-50 px-6 py-6">
            <h3 className="text-xl font-semibold text-slate-900">Los Cardales</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>• HIFU facial</li>
            </ul>
          </article>
        </div>
        <p className="text-xs text-slate-500 sm:text-sm">
          Los tratamientos disponibles pueden variar según la sede seleccionada.
        </p>
      </div>
    </section>
  );
}
