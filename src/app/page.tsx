import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-white to-beige-warm px-6 py-16 text-center text-slate-800">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Rafaela Beauty</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed sm:text-xl">
        Descubrí nuestras jornadas HIFU con dermocosmiatra matriculada en Exaltación de la Cruz.
      </p>
      <Link
        href="/hifu"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-sage-dark px-10 py-4 text-base font-semibold text-white shadow-lg shadow-sage-primary/30 transition hover:bg-sage-primary hover:shadow-xl hover:shadow-sage-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
        aria-label="Consultá disponibilidad para próximas jornadas en Rafaela Beauty"
      >
        Consultá disponibilidad para próximas jornadas
      </Link>
    </main>
  );
}
