import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Diagnóstico personalizado',
    text: 'Analizamos tu salud bucodental con detalle para diseñar el tratamiento más adecuado para ti.',
  },
  {
    icon: <FaMagic />,
    title: 'Tecnología avanzada',
    text: 'Trabajamos con equipamiento moderno para ofrecer tratamientos más precisos, cómodos y eficaces.',
  },
  {
    icon: <FaAward />,
    title: 'Profesionales especializados',
    text: 'Nuestro equipo combina experiencia y formación continua para cuidar tu salud dental con excelencia.',
  },
  {
    icon: <FaUsers />,
    title: 'Atención cercana',
    text: 'Te acompañamos durante todo el proceso para que cada visita sea cómoda, segura y de confianza.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            ¿Cómo trabajamos en Clínica Dental Ballesteros?
          </h2>

          <p className="mt-4 text-neutral-600">
            Nuestro proceso está diseñado para cuidar tu salud bucodental desde
            la primera visita en Villaverde
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(37,99,235,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-blue-800">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork