export function Footer() {
  return (
    <footer className="border-t-2 border-beige-light bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-1">
          <p className="font-display text-base font-semibold text-white">Rafaela Beauty – Centro de estética integral</p>
          <p className="text-slate-300">Tratamientos realizados por profesional capacitada.</p>
          <p className="text-slate-300">Promociones válidas según jornadas y sede.</p>
        </div>
        <div className="space-y-1">
          <a
            href="https://wa.me/5491156438476?text=Hola%20%F0%9F%98%8A%20Quiero%20consultar%20por%20las%20pr%C3%B3ximas%20jornadas%20de%20HIFU%202x1%20en%20Rafaela%20Beauty.%20Mi%20sede%20de%20preferencia%20es..."
            target="_blank"
            rel="noreferrer"
            className="block text-white transition hover:text-sage-primary"
          >
            WhatsApp: +54 9 11 5643-8476
          </a>
          <a
            href="https://instagram.com/rafaelabeauty"
            target="_blank"
            rel="noreferrer"
            className="block text-white transition hover:text-sage-primary"
          >
            Instagram (actualizar enlace)
          </a>
        </div>
      </div>
    </footer>
  );
}
