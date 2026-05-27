import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interior moderno de Clínica Dental Ballesteros en Villaverde',
    badge: 'Clínica dental en Villaverde con tecnología avanzada',
  },
  {
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
    alt: 'Tratamiento dental en Clínica Dental Ballesteros',
    badge: 'Atención personalizada para cuidar tu sonrisa',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-blue-50 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-blue-700 lg:block [writing-mode:vertical-rl]">
            Clínica Dental Ballesteros
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-blue-800 sm:text-5xl">
              ¿Por qué elegir Clínica Dental Ballesteros?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En Clínica Dental Ballesteros combinamos experiencia, tecnología y
              cercanía para ofrecerte tratamientos dentales personalizados en
              Villaverde.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-blue-800">
                  Tecnología avanzada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Utilizamos equipamiento moderno para diagnósticos precisos y
                  tratamientos eficaces.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-blue-800">
                  Atención personalizada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Cada paciente recibe un plan de tratamiento adaptado a sus
                  necesidades.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-blue-800">
                  Trato cercano y profesional
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Queremos que te sientas cómodo y acompañado durante todo el
                  proceso.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-blue-800">
                  Salud y estética dental
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Mejoramos la funcionalidad y estética de tu sonrisa con
                  tratamientos integrales.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(37,99,235,0.18)]">
            <div className="relative h-[500px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-blue-900/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-blue-700">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-blue-700"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-blue-700' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs