import { Link } from 'react-router-dom'

const posts = [
  {
    date: '1 abril, 2026',
    title: 'Implantes dentales en Arganzuela, Madrid',
    excerpt:
      'Descubre cómo los implantes dentales pueden ayudarte a recuperar tu sonrisa, mejorar la funcionalidad de tu boca y ganar confianza con un tratamiento duradero.',
    image:
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    href: '/blog/implantes-dentales-arganzuela',
  },
  {
    date: '1 abril, 2026',
    title: 'Limpieza dental profesional: por qué es importante hacerla',
    excerpt:
      'Una limpieza dental ayuda a prevenir problemas de encías, caries y acumulación de sarro.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '25 marzo, 2026',
    title: 'Blanqueamiento dental: cómo funciona y qué debes saber',
    excerpt:
      'Todo lo que necesitas saber antes de iniciar un tratamiento de blanqueamiento dental.',
    image:
      'https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            Blog
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Artículos y consejos para cuidar tu salud bucodental
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-neutral-500">📅 {post.date}</p>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-blue-800">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-700">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  <Link
                    to={post.href}
                    className="inline-flex items-center gap-2 text-lg font-medium text-blue-700 transition hover:text-blue-900"
                  >
                    Leer más <span className="text-2xl">›</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection