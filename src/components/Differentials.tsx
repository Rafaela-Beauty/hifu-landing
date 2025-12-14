export function Differentials() {
  const items = [
    "Dermocosmiatra matriculada",
    "Aparatología propia",
    "Atención personalizada",
    "Protocolos adaptados a cada piel",
    "Dos sedes en Exaltación de la Cruz",
  ];

  return (
    <section className="bg-beige-warm/50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          ¿Por qué elegir Rafaela Beauty?
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-3xl border-2 border-sage-primary/30 bg-white px-6 py-5 text-base font-medium text-slate-700 shadow-lg shadow-sage-primary/10"
            >
              <span className="inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-sage-dark"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
