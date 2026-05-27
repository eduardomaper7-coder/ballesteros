import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Info */}
          <div>
            <div className="mb-6 leading-tight">
              <span className="block text-2xl font-extrabold text-white">
                CLÍNICA DENTAL
              </span>
              <span className="block text-blue-400 text-lg font-semibold">
                Ballesteros
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Clínica dental en Villaverde especializada en tratamientos
              personalizados, odontología avanzada y atención cercana para cuidar
              tu salud bucodental y mejorar tu sonrisa.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-2xl text-blue-400 transition hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/clinica_dental_ballesteros/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl text-blue-400 transition hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-2xl text-blue-400 transition hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-blue-400">Contacto</h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                C. Oxígeno, 4<br />
                Villaverde, Madrid
              </p>

              <p>
                <a
                  href="tel:913766036"
                  className="whitespace-nowrap font-bold text-white transition hover:text-blue-400"
                >
                  913 76 60 36
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/34638710792"
                  className="text-blue-400 transition hover:text-white"
                >
                  WhatsApp: +34 638 710 792
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/90">
            ¿Necesitas pedir cita o más información?
          </p>

          <Link
            to="/#contacto"
            className="rounded-xl bg-blue-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-blue-700"
          >
            Solicitar cita
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/80">
            © 2026 Clínica Dental Ballesteros. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-blue-400">
            <Link to="/legal" className="transition hover:text-white">
              Aviso legal · Privacidad · Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer