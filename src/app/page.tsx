import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16 text-center text-slate-800">
      <h1 className="text-3xl font-semibold sm:text-4xl">Rafaela Beauty</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
        Descubrí nuestras jornadas HIFU con dermocosmiatra matriculada en Exaltación de la Cruz.
      </p>
      <Link
        href="/hifu"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-base font-medium text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
        aria-label="Consultá disponibilidad para próximas jornadas en Rafaela Beauty"
      >
        Consultá disponibilidad para próximas jornadas
      </Link>
    </main>
  );
}
