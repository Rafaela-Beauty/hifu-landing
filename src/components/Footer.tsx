export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-1">
          <p className="font-semibold">Rafaela Beauty – Centro de estética integral</p>
          <p>Tratamientos realizados por profesional capacitada.</p>
          <p>Promociones válidas según jornadas y sede.</p>
        </div>
        <div className="space-y-1">
          <a
            href="https://wa.me/5491156438476?text=Hola%20%F0%9F%98%8A%20Quiero%20consultar%20por%20las%20pr%C3%B3ximas%20jornadas%20de%20HIFU%202x1%20en%20Rafaela%20Beauty.%20Mi%20sede%20de%20preferencia%20es..."
            target="_blank"
            rel="noreferrer"
            className="block text-slate-100 transition hover:text-white"
          >
            WhatsApp: +54 9 11 5643-8476
          </a>
          <a
            href="https://instagram.com/rafaelabeauty"
            target="_blank"
            rel="noreferrer"
            className="block text-slate-100 transition hover:text-white"
          >
            Instagram (actualizar enlace)
          </a>
        </div>
      </div>
    </footer>
  );
}
