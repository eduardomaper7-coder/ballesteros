const Hero = () => {
  const whatsappNumber = '34638710792'
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Clínica Dental Ballesteros.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-dentopia.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/45"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-blue-700/35 to-blue-950/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-24 text-center sm:pb-16 sm:pt-28">
        <div className="mb-4 flex flex-col items-center sm:mb-6">
          <span className="text-lg font-light tracking-widest text-white/85 sm:text-2xl">
            CLÍNICA DENTAL EN VILLAVERDE
          </span>

          <span className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl md:text-4xl">
            Clínica Dental Ballesteros
          </span>
        </div>

        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Tu sonrisa en manos expertas
        </h1>

        <p className="mt-6 hidden max-w-3xl text-lg leading-9 text-white/90 sm:block sm:text-xl">
          En Clínica Dental Ballesteros cuidamos tu salud bucodental con
          tratamientos personalizados, tecnología avanzada y atención cercana en
          Villaverde.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Primera visita gratuita
          </span>

          <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-blue-700 shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Tecnología avanzada
          </span>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-blue-700 sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Pedir cita por WhatsApp"
          >
            <img
              src="/whatsapp.png"
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden="true"
            />
            Pedir cita por WhatsApp
          </a>

          <a
            href="tel:913766036"
            className="flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-extrabold text-blue-700 shadow-xl transition hover:bg-blue-50 sm:w-auto sm:px-8 sm:text-lg whitespace-nowrap"
            aria-label="Llamar a Clínica Dental Ballesteros"
          >
            Llamar ahora
          </a>
        </div>

        <a
          href="#servicios"
          className="mt-5 hidden items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-blue-700 sm:inline-flex"
        >
          Ver tratamientos dentales
        </a>

        <a
          href="#servicios"
          className="mt-12 hidden flex-col items-center text-base font-medium text-white sm:inline-flex"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-2xl transition hover:scale-110 hover:bg-blue-700 sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>
    </section>
  )
}

export default Hero