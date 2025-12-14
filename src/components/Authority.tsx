export function Authority() {
  return (
    <section className="bg-linear-to-b from-white to-beige-warm/50 py-14 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 sm:flex-row sm:items-start sm:gap-12">
        <div className="flex flex-1 flex-col gap-4 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-sage-dark">
            Rafaela Beauty
          </p>
          <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
            En Rafaela Beauty trabajamos con aparatología propia y protocolos personalizados para lograr resultados reales, cuidando tu piel y tu bienestar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700 sm:justify-start">
            <a
              href="https://www.google.com/maps?sca_esv=be6047ef5dda0c71&rlz=1C5CHFA_enAR995AR995&output=search&q=pinares+country+club&source=lnms&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQht6_BFq6vBIoFFRK7qchKEJMe3FCrB1e4X43Nkv7WNWQVOaWhOLUBTMRYqrxcjqcvE54Bz-OD70EitkM7M22EPZRqLbZQaxhA-zD7p93PQEs9cHH1YIaCU33RvZ1Wk6gr0vx_9AOOkbKNKWf8emO6ye0habrv9y1jwu5_Fk_wOuw5d8PJ1IoX8WIOOnepLJfxAnLpQ&entry=mc&ved=1t:200715&ictx=111"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-sage-primary bg-white px-5 py-2 shadow-sm transition hover:bg-sage-primary hover:text-white"
              aria-label="Ver ubicación de Capilla del Señor en Google Maps"
            >
              Capilla del Señor
            </a>
            <a
              href="https://www.google.com/maps/place/Urcelay+317,+B2814CNG+Los+Cardales,+Provincia+de+Buenos+Aires/@-34.3283494,-58.9876986,17z/data=!3m1!4b1!4m6!3m5!1s0x95bb7bbe189fd3d3:0xdbf514e38762c9e6!8m2!3d-34.3283494!4d-58.9851237!16s%2Fg%2F11q2nh25c8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-sage-primary bg-white px-5 py-2 shadow-sm transition hover:bg-sage-primary hover:text-white"
              aria-label="Ver ubicación de Los Cardales en Google Maps"
            >
              Los Cardales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
