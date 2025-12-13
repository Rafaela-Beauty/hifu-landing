export function Differentials() {
  const items = [
    "Dermocosmiatra matriculada",
    "Aparatología propia",
    "Atención personalizada",
    "Protocolos adaptados a cada piel",
    "Dos sedes en Exaltación de la Cruz",
  ];

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl space-y-6 px-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          ¿Por qué elegir Rafaela Beauty?
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm shadow-emerald-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
