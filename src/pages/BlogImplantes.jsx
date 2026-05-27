const BlogImplantes = () => {
  return (
    <main className="bg-white pt-28">
      {/* Hero */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white">
              Implantología dental
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-blue-900 sm:text-5xl">
              Implantes dentales en Villaverde, Madrid
            </h1>

            <p className="mt-6 text-xl leading-9 text-neutral-700">
              La solución definitiva para recuperar tu sonrisa, mejorar la
              funcionalidad de tu boca y volver a masticar con confianza.
            </p>

            <a
              href="tel:913766036"
              className="mt-8 inline-flex rounded-xl bg-blue-800 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-900"
            >
              Solicitar valoración
            </a>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
            <img
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=80"
              alt="Implantes dentales en Clínica Dental Ballesteros"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(37,99,235,0.10)] sm:p-10">
            <p className="text-lg leading-9 text-neutral-700">
              Perder una pieza dental no solo afecta a la estética de la sonrisa,
              sino también a funciones esenciales como masticar, hablar
              correctamente y mantener una buena salud bucodental.
            </p>

            <p className="mt-5 text-lg leading-9 text-neutral-700">
              Los implantes dentales son la solución más eficaz, duradera y
              estética para reemplazar dientes perdidos.
            </p>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Ventajas de los implantes dentales
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Recuperan la funcionalidad completa',
              'Resultado estético natural',
              'Preservan el hueso dental',
              'Mayor comodidad',
              'Durabilidad',
              'Recuperas confianza al sonreír',
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(37,99,235,0.08)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                  ✓
                </div>

                <h3 className="text-xl font-extrabold text-blue-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-blue-900">
            ¿Cómo es el proceso?
          </h2>

          <div className="mt-12 space-y-6">
            {[
              ['1', 'Diagnóstico digital'],
              ['2', 'Colocación del implante'],
              ['3', 'Osteointegración'],
              ['4', 'Corona definitiva'],
            ].map(([number, title]) => (
              <div
                key={number}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(37,99,235,0.10)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl font-extrabold text-white">
                  {number}
                </div>

                <h3 className="pt-2 text-xl font-extrabold text-blue-900">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Ballesteros */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
              ¿Por qué elegir Clínica Dental Ballesteros?
            </h2>

            <div className="mt-8 space-y-4">
              {[
                'Tecnología avanzada',
                'Equipo especializado',
                'Planificación digital',
                'Tratamientos personalizados',
                'Atención cercana en Villaverde',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    ✓
                  </span>
                  <p className="text-lg font-medium text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1400&q=80"
              alt="Equipo profesional Clínica Dental Ballesteros"
              className="h-[380px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Recupera tu sonrisa con implantes dentales
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/85">
            En Clínica Dental Ballesteros te ayudamos a recuperar funcionalidad,
            estética y confianza.
          </p>

          <a
            href="tel:913766036"
            className="mt-8 inline-flex rounded-xl bg-blue-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-400"
          >
            Solicitar primera valoración
          </a>
        </div>
      </section>
    </main>
  )
}

export default BlogImplantes