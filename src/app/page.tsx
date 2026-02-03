import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Users, Sparkles, Instagram, Mail } from "lucide-react";

const SERVICES = [
  {
    title: "Exposiciones",
    description: "Arte contemporáneo en diálogo con la tecnología",
    icon: "🎨",
  },
  {
    title: "Residencias",
    description: "Programa para artistas nacionales e internacionales",
    icon: "🏠",
  },
  {
    title: "Talleres",
    description: "Aprende técnicas de fabricación digital y arte",
    icon: "🛠️",
  },
  {
    title: "Eventos",
    description: "Networking, presentaciones y cultura",
    icon: "✨",
  },
];

const TECH_SERVICES = [
  "Impresión 3D (FDM, SLA, SLS)",
  "CNC Milling",
  "Corte Láser",
  "Modelado 3D",
  "Diseño Industrial",
  "Prototipado Rápido",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2D2D]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#B5C4A1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              {/* Placeholder for logo - replace with actual logo */}
              <div className="w-10 h-10 rounded-full bg-[#B5C4A1] flex items-center justify-center">
                <span className="text-[#2D2D2D] text-xs font-bold">CO</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Casa Orbe</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#espacio" className="text-[#2D2D2D]/70 hover:text-[#2D2D2D] transition">
                Espacio
              </Link>
              <Link href="#servicios" className="text-[#2D2D2D]/70 hover:text-[#2D2D2D] transition">
                Servicios
              </Link>
              <Link href="#tecnologia" className="text-[#2D2D2D]/70 hover:text-[#2D2D2D] transition">
                Tecnología
              </Link>
              <Link href="#contacto" className="text-[#2D2D2D]/70 hover:text-[#2D2D2D] transition">
                Contacto
              </Link>
            </div>
            <Link
              href="https://create.casaorbe.ai"
              className="bg-[#B5C4A1] hover:bg-[#8FA07A] text-[#2D2D2D] font-medium px-4 py-2 rounded-full transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Crear con IA
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#B5C4A1]/20 border border-[#B5C4A1]/40 rounded-full px-4 py-2 mb-8">
            <MapPin className="w-4 h-4 text-[#8FA07A]" />
            <span className="text-[#8FA07A] text-sm font-medium">Reforma 617, Guadalajara</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Arte, Cultura y{" "}
            <span className="text-[#8FA07A]">Tecnología</span>
          </h1>

          <p className="text-xl text-[#2D2D2D]/70 mb-4 max-w-2xl mx-auto">
            Un espacio que genera sinergia local y global con creadores, artistas y tecnólogos.
          </p>

          <p className="text-lg text-[#2D2D2D]/50 mb-10 max-w-xl mx-auto">
            Desde 2013, transformando ideas en realidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#espacio"
              className="inline-flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white font-medium px-8 py-4 rounded-full text-lg transition"
            >
              Conoce el espacio
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://create.casaorbe.ai"
              className="inline-flex items-center gap-2 bg-[#B5C4A1] hover:bg-[#8FA07A] text-[#2D2D2D] font-medium px-8 py-4 rounded-full text-lg transition"
            >
              <Sparkles className="w-5 h-5" />
              Crea con IA
            </Link>
          </div>
        </div>
      </section>

      {/* Current Exhibition */}
      <section className="py-16 px-4 bg-[#B5C4A1]/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#B5C4A1]/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#B5C4A1]/20 rounded-full px-3 py-1 mb-4">
                  <Calendar className="w-4 h-4 text-[#8FA07A]" />
                  <span className="text-sm text-[#8FA07A] font-medium">Exposición Actual</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">BLOBB</h2>
                <p className="text-[#2D2D2D]/70 mb-2">por Proyectos de Aquí</p>
                <p className="text-[#2D2D2D]/60 mb-6">
                  Una exploración de formas orgánicas y fabricación digital que cuestiona
                  los límites entre lo natural y lo artificial.
                </p>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-[#8FA07A] hover:text-[#6d8560] font-medium transition"
                >
                  Agenda tu visita
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#F5F2EB] rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🫧</div>
                  <p className="text-[#2D2D2D]/40 text-sm">Imagen de exposición</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Space */}
      <section id="espacio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">El Espacio</h2>
            <p className="text-[#2D2D2D]/70 max-w-2xl mx-auto">
              Una casona histórica en el corazón de Guadalajara, transformada en un
              laboratorio de creación donde convergen el arte tradicional y la tecnología.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#B5C4A1]/20">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Galería</h3>
              <p className="text-[#2D2D2D]/60">
                Espacio de exposición para artistas emergentes y establecidos.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#B5C4A1]/20">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Fab Lab</h3>
              <p className="text-[#2D2D2D]/60">
                Taller equipado con impresoras 3D, CNC y corte láser.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#B5C4A1]/20">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">Patio</h3>
              <p className="text-[#2D2D2D]/60">
                Espacio al aire libre para eventos y presentaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 px-4 bg-[#2D2D2D] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Servicios</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Programas diseñados para impulsar la creatividad y la innovación
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology / Possible Ideas */}
      <section id="tecnologia" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#04ACC8]/10 to-[#9AC32E]/10 rounded-3xl p-8 md:p-12 border border-[#04ACC8]/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#04ACC8]/10 border border-[#04ACC8]/20 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#04ACC8]" />
                  <span className="text-[#04ACC8] text-sm font-medium">Powered by Possible Ideas</span>
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  Fabricación Digital + IA
                </h2>
                <p className="text-[#2D2D2D]/70 mb-6">
                  Más de 12 años de experiencia en prototipado rápido y diseño industrial.
                  Ahora con inteligencia artificial para democratizar el acceso a la impresión 3D.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {TECH_SERVICES.map((service) => (
                    <span
                      key={service}
                      className="bg-[#04ACC8]/10 text-[#04ACC8] text-sm px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <Link
                  href="https://create.casaorbe.ai"
                  className="inline-flex items-center gap-2 bg-[#04ACC8] hover:bg-[#0399b3] text-white font-medium px-6 py-3 rounded-full transition"
                >
                  <Sparkles className="w-5 h-5" />
                  Crear con IA
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-[#2D2D2D] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">¿Cómo funciona?</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#04ACC8] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Describe tu idea</p>
                      <p className="text-white/60 text-sm">En lenguaje natural, como si hablaras con alguien</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#9AC32E] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-white">2</div>
                    <div>
                      <p className="font-medium">La IA genera tu modelo 3D</p>
                      <p className="text-white/60 text-sm">Visualízalo en 3D antes de imprimir</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#04ACC8] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Lo imprimimos y enviamos</p>
                      <p className="text-white/60 text-sm">Recibe tu pieza física en casa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#B5C4A1]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#8FA07A] mb-2">12+</div>
              <div className="text-[#2D2D2D]/60">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#8FA07A] mb-2">500+</div>
              <div className="text-[#2D2D2D]/60">Proyectos realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#8FA07A] mb-2">50+</div>
              <div className="text-[#2D2D2D]/60">Artistas colaboradores</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#8FA07A] mb-2">∞</div>
              <div className="text-[#2D2D2D]/60">Ideas posibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Visítanos</h2>
          <p className="text-[#2D2D2D]/70 mb-8 text-lg">
            Estamos en el centro de Guadalajara, listos para conocerte
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#B5C4A1]/20 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <MapPin className="w-8 h-8 text-[#8FA07A] mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Dirección</h3>
                <p className="text-[#2D2D2D]/60">Reforma 617<br />Centro, Guadalajara, Jalisco</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-[#8FA07A] mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-[#2D2D2D]/60">hola@casaorbe.ai</p>
              </div>
              <div>
                <Instagram className="w-8 h-8 text-[#8FA07A] mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Instagram</h3>
                <a
                  href="https://instagram.com/casaorbegdl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8FA07A] hover:text-[#6d8560] transition"
                >
                  @casaorbegdl
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/casaorbegdl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white font-medium px-8 py-4 rounded-full transition"
            >
              <Instagram className="w-5 h-5" />
              Síguenos en Instagram
            </a>
            <a
              href="mailto:hola@casaorbe.ai"
              className="inline-flex items-center gap-2 bg-[#B5C4A1] hover:bg-[#8FA07A] text-[#2D2D2D] font-medium px-8 py-4 rounded-full transition"
            >
              <Mail className="w-5 h-5" />
              Escríbenos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#B5C4A1]/30 py-12 px-4 bg-[#F5F2EB]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B5C4A1] flex items-center justify-center">
                <span className="text-[#2D2D2D] text-xs font-bold">CO</span>
              </div>
              <div>
                <span className="font-semibold">Casa Orbe</span>
                <p className="text-sm text-[#2D2D2D]/60">by Possible Ideas (desde 2013)</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-[#2D2D2D]/60">
              <a href="https://instagram.com/casaorbegdl" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D2D2D] transition">Instagram</a>
              <a href="https://instagram.com/possibleidgdl" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D2D2D] transition">Possible Ideas</a>
              <a href="https://create.casaorbe.ai" className="hover:text-[#2D2D2D] transition">Crear con IA</a>
            </div>
          </div>
          <div className="border-t border-[#B5C4A1]/30 mt-8 pt-8 text-center text-[#2D2D2D]/50 text-sm">
            © 2026 Casa Orbe / Possible Ideas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
