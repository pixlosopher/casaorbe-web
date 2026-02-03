"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Users, Sparkles, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const SERVICES = [
  {
    title: "Exposiciones",
    description: "Arte contemporáneo en diálogo con la tecnología y fabricación digital",
    number: "01",
  },
  {
    title: "Residencias",
    description: "Programa para artistas nacionales e internacionales con acceso a tecnología",
    number: "02",
  },
  {
    title: "Talleres",
    description: "Aprende técnicas de fabricación digital, impresión 3D y arte generativo",
    number: "03",
  },
  {
    title: "Eventos",
    description: "Networking, presentaciones, lanzamientos y experiencias culturales",
    number: "04",
  },
];

const TECH_SERVICES = [
  "Impresión 3D",
  "CNC Milling",
  "Corte Láser",
  "Modelado 3D",
  "Diseño Industrial",
  "Prototipado",
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2D2D] overflow-x-hidden">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition group">
              <Image
                src="/images/casaorbe-logo.png"
                alt="Casa Orbe Logo"
                width={40}
                height={86}
                className="object-contain h-14 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link href="#espacio" className="text-sm tracking-wide text-[#2D2D2D]/60 hover:text-[#2D2D2D] transition relative group">
                Espacio
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8FA07A] transition-all group-hover:w-full" />
              </Link>
              <Link href="#servicios" className="text-sm tracking-wide text-[#2D2D2D]/60 hover:text-[#2D2D2D] transition relative group">
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8FA07A] transition-all group-hover:w-full" />
              </Link>
              <Link href="#tecnologia" className="text-sm tracking-wide text-[#2D2D2D]/60 hover:text-[#2D2D2D] transition relative group">
                Tecnología
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8FA07A] transition-all group-hover:w-full" />
              </Link>
              <Link href="#contacto" className="text-sm tracking-wide text-[#2D2D2D]/60 hover:text-[#2D2D2D] transition relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8FA07A] transition-all group-hover:w-full" />
              </Link>
            </div>
            <Link
              href="https://create.casaorbe.ai"
              className="group bg-[#2D2D2D] hover:bg-[#8FA07A] text-white font-medium px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Crear con IA</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <section className="min-h-screen gradient-mesh relative flex items-center">
        {/* Decorative elements */}
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-[#B5C4A1]/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-[#C4A484]/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Badge */}
              <div className="animate-fade-in-up opacity-0 inline-flex items-center gap-3 border border-[#B5C4A1] rounded-full px-5 py-2.5 bg-white/50 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#8FA07A] rounded-full animate-pulse" />
                <span className="text-sm tracking-wider text-[#8FA07A] font-medium uppercase">Reforma 617, Guadalajara</span>
              </div>

              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="animate-fade-in-up opacity-0 delay-100 text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight">
                  Arte,
                </h1>
                <h1 className="animate-fade-in-up opacity-0 delay-200 text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight">
                  Cultura
                </h1>
                <h1 className="animate-fade-in-up opacity-0 delay-300 text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] tracking-tight text-[#8FA07A]">
                  & Tecnología
                </h1>
              </div>

              {/* Decorative line */}
              <div className="animate-fade-in opacity-0 delay-400 decorative-line" />

              {/* Description */}
              <p className="animate-fade-in-up opacity-0 delay-500 text-xl md:text-2xl text-[#2D2D2D]/70 max-w-xl leading-relaxed font-light">
                Un espacio que genera sinergia local y global con creadores, artistas y tecnólogos.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up opacity-0 delay-600 flex flex-wrap gap-4 pt-4">
                <Link
                  href="#espacio"
                  className="group inline-flex items-center gap-3 bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300"
                >
                  <span>Explorar</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://create.casaorbe.ai"
                  className="group inline-flex items-center gap-3 bg-[#B5C4A1] hover:bg-[#8FA07A] text-[#2D2D2D] font-medium px-8 py-4 rounded-full text-lg transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Crea con IA</span>
                </Link>
              </div>
            </div>

            {/* Right - Featured Image/Exhibition */}
            <div className="lg:col-span-5 animate-scale-in opacity-0 delay-300">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#B5C4A1]/20 relative z-10">
                  <div className="flex items-center gap-2 text-sm text-[#8FA07A] font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="uppercase tracking-wider">Exposición Actual</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl mb-3">BLOBB</h3>
                  <p className="text-[#2D2D2D]/60 text-sm mb-6">por Proyectos de Aquí</p>

                  {/* Blob visual */}
                  <div className="aspect-square bg-gradient-to-br from-[#B5C4A1]/30 to-[#C4A484]/20 rounded-2xl flex items-center justify-center mb-6 overflow-hidden relative">
                    <div className="blob-shape w-32 h-32 bg-gradient-to-br from-[#B5C4A1] to-[#8FA07A] animate-float" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
                  </div>

                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-[#8FA07A] hover:text-[#6d8560] font-medium transition group"
                  >
                    <span>Agenda tu visita</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Decorative offset border */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#B5C4A1] rounded-3xl -z-10" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-600">
            <span className="text-xs tracking-widest text-[#2D2D2D]/40 uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#8FA07A] to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Marquee */}
      <section className="py-6 bg-[#2D2D2D] text-white overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              <span className="text-4xl font-light">12+ Años</span>
              <span className="w-2 h-2 bg-[#B5C4A1] rounded-full" />
              <span className="text-4xl font-light">500+ Proyectos</span>
              <span className="w-2 h-2 bg-[#B5C4A1] rounded-full" />
              <span className="text-4xl font-light">50+ Artistas</span>
              <span className="w-2 h-2 bg-[#B5C4A1] rounded-full" />
              <span className="text-4xl font-light">∞ Posibilidades</span>
              <span className="w-2 h-2 bg-[#B5C4A1] rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* About Space - Bento Grid */}
      <section id="espacio" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-20">
            <span className="text-sm tracking-widest text-[#8FA07A] uppercase font-medium">El Espacio</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6">
              Una casona histórica<br />
              <span className="text-[#8FA07A]">reimaginada</span>
            </h2>
            <p className="text-xl text-[#2D2D2D]/60 leading-relaxed">
              En el corazón de Guadalajara, donde convergen el arte tradicional y la tecnología de fabricación digital.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large card - Galería */}
            <div className="md:col-span-2 bg-[#2D2D2D] text-white rounded-3xl p-10 relative overflow-hidden group card-3d">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B5C4A1]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-7xl mb-6 block">🏛️</span>
                <h3 className="text-3xl mb-4">Galería</h3>
                <p className="text-white/60 text-lg max-w-md">
                  Espacio de exposición de 120m² para artistas emergentes y establecidos. Curadurías que exploran la intersección del arte y la tecnología.
                </p>
              </div>
            </div>

            {/* Fab Lab */}
            <div className="bg-[#B5C4A1] rounded-3xl p-10 relative overflow-hidden group card-3d">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8FA07A]/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-6xl mb-6 block">⚙️</span>
                <h3 className="text-2xl mb-3 text-[#2D2D2D]">Fab Lab</h3>
                <p className="text-[#2D2D2D]/70">
                  Taller equipado con impresoras 3D, CNC y corte láser para dar vida a tus proyectos.
                </p>
              </div>
            </div>

            {/* Patio */}
            <div className="bg-gradient-to-br from-[#F5F2EB] to-white border border-[#B5C4A1]/30 rounded-3xl p-10 group card-3d">
              <span className="text-6xl mb-6 block">🌿</span>
              <h3 className="text-2xl mb-3">Patio Central</h3>
              <p className="text-[#2D2D2D]/60">
                Espacio al aire libre para eventos, presentaciones y momentos de pausa creativa.
              </p>
            </div>

            {/* Coworking */}
            <div className="md:col-span-2 bg-gradient-to-r from-[#C4A484]/20 to-[#B5C4A1]/20 border border-[#B5C4A1]/30 rounded-3xl p-10 group card-3d">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-6xl mb-6 block">☕</span>
                  <h3 className="text-2xl mb-3">Espacio de Trabajo</h3>
                  <p className="text-[#2D2D2D]/60 max-w-md">
                    Área de coworking para artistas en residencia y colaboradores del espacio.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-5xl font-light text-[#8FA07A]">24/7</span>
                  <p className="text-sm text-[#2D2D2D]/40 mt-1">acceso para residentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Editorial Layout */}
      <section id="servicios" className="py-32 px-6 lg:px-12 bg-[#2D2D2D] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 text-[20rem] font-bold leading-none">01</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left - Header */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="text-sm tracking-widest text-[#B5C4A1] uppercase font-medium">Servicios</span>
              <h2 className="text-5xl md:text-6xl mt-4 mb-6">
                Programas para<br />
                <span className="text-[#B5C4A1]">impulsar</span> tu creatividad
              </h2>
              <p className="text-xl text-white/60 leading-relaxed mb-8">
                Desde exposiciones hasta residencias, ofrecemos un ecosistema completo para artistas y creadores.
              </p>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-3 text-[#B5C4A1] hover:text-white transition group"
              >
                <span className="text-lg">Ver todos los programas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Right - Services List */}
            <div className="space-y-0">
              {SERVICES.map((service, index) => (
                <div
                  key={service.title}
                  className="group border-t border-white/10 py-10 hover:bg-white/5 transition-colors px-6 -mx-6"
                >
                  <div className="flex items-start gap-8">
                    <span className="text-5xl font-light text-[#B5C4A1]/30 group-hover:text-[#B5C4A1] transition-colors">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2 group-hover:text-[#B5C4A1] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/50 group-hover:text-white/70 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#B5C4A1] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology / Possible Ideas */}
      <section id="tecnologia" className="py-32 px-6 lg:px-12 relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#04ACC8]/5 via-transparent to-[#9AC32E]/5" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 bg-[#04ACC8]/10 border border-[#04ACC8]/20 rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 bg-[#04ACC8] rounded-full animate-pulse" />
                <span className="text-sm tracking-wider text-[#04ACC8] font-medium uppercase">Powered by Possible Ideas</span>
              </div>

              <h2 className="text-5xl md:text-6xl mb-6">
                Fabricación Digital<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04ACC8] to-[#9AC32E]">+ Inteligencia Artificial</span>
              </h2>

              <p className="text-xl text-[#2D2D2D]/60 mb-8 leading-relaxed max-w-xl">
                Más de 12 años de experiencia en prototipado rápido y diseño industrial. Ahora con IA para democratizar el acceso a la impresión 3D.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {TECH_SERVICES.map((service) => (
                  <span
                    key={service}
                    className="bg-[#2D2D2D] text-white text-sm px-4 py-2 rounded-full hover:bg-[#04ACC8] transition-colors cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <Link
                href="https://create.casaorbe.ai"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#04ACC8] to-[#0399b3] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#04ACC8]/25 hover:shadow-xl hover:shadow-[#04ACC8]/30"
              >
                <Sparkles className="w-5 h-5" />
                <span>Crear con IA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right - How it works */}
            <div className="lg:col-span-5">
              <div className="bg-[#2D2D2D] rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#04ACC8]/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#9AC32E]/20 rounded-full blur-2xl" />

                <h3 className="text-2xl mb-8 relative z-10">¿Cómo funciona?</h3>

                <div className="space-y-8 relative z-10">
                  {[
                    { num: "01", title: "Describe tu idea", desc: "En lenguaje natural, como si hablaras con alguien", color: "#04ACC8" },
                    { num: "02", title: "La IA genera tu modelo", desc: "Visualízalo en 3D antes de imprimir", color: "#9AC32E" },
                    { num: "03", title: "Lo imprimimos y enviamos", desc: "Recibe tu pieza física en casa", color: "#04ACC8" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-5 group">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <p className="font-medium text-lg">{step.title}</p>
                        <p className="text-white/50 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-32 px-6 lg:px-12 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-sm tracking-widest text-[#8FA07A] uppercase font-medium">Contacto</span>
              <h2 className="text-5xl md:text-6xl mt-4 mb-6">
                Visítanos en el<br />
                <span className="text-[#8FA07A]">centro de GDL</span>
              </h2>
              <p className="text-xl text-[#2D2D2D]/60 mb-10 leading-relaxed">
                Estamos en una casona del Centro Histórico, a pasos de la Catedral.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B5C4A1] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2D2D2D]" />
                  </div>
                  <div>
                    <p className="font-medium">Reforma 617</p>
                    <p className="text-[#2D2D2D]/60">Centro, Guadalajara, Jalisco</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B5C4A1] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#2D2D2D]" />
                  </div>
                  <div>
                    <p className="font-medium">hola@casaorbe.ai</p>
                    <p className="text-[#2D2D2D]/60">Respuesta en 24 horas</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B5C4A1] rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-[#2D2D2D]" />
                  </div>
                  <div>
                    <a
                      href="https://instagram.com/casaorbegdl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#8FA07A] hover:text-[#6d8560] transition"
                    >
                      @casaorbegdl
                    </a>
                    <p className="text-[#2D2D2D]/60">Síguenos para eventos</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hola@casaorbe.ai"
                  className="inline-flex items-center gap-2 bg-[#2D2D2D] hover:bg-[#1a1a1a] text-white font-medium px-8 py-4 rounded-full transition"
                >
                  <Mail className="w-5 h-5" />
                  Escríbenos
                </a>
                <a
                  href="https://instagram.com/casaorbegdl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#B5C4A1] hover:bg-[#8FA07A] text-[#2D2D2D] font-medium px-8 py-4 rounded-full transition"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Right - Map placeholder */}
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#B5C4A1]/20">
              <div className="aspect-square bg-gradient-to-br from-[#B5C4A1]/20 to-[#C4A484]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#8FA07A] mx-auto mb-4" />
                  <p className="text-[#2D2D2D]/40">Reforma 617, Centro</p>
                  <p className="text-[#2D2D2D]/40">Guadalajara, Jalisco</p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-[#B5C4A1]/30 rounded-full" />
                <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#B5C4A1]/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[#2D2D2D] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/casaorbe-logo.png"
                  alt="Casa Orbe Logo"
                  width={32}
                  height={70}
                  className="object-contain h-12 w-auto brightness-0 invert"
                />
                <div>
                  <span className="text-xl font-medium">Casa Orbe</span>
                  <p className="text-white/40 text-sm">by Possible Ideas</p>
                </div>
              </div>
              <p className="text-white/50 max-w-sm leading-relaxed">
                Un espacio que genera sinergia local y global con creadores, artistas y tecnólogos. Desde 2013.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-medium mb-6 text-white/80">Espacio</h4>
              <ul className="space-y-3 text-white/50">
                <li><Link href="#espacio" className="hover:text-white transition">Galería</Link></li>
                <li><Link href="#servicios" className="hover:text-white transition">Servicios</Link></li>
                <li><Link href="#tecnologia" className="hover:text-white transition">Tecnología</Link></li>
                <li><Link href="#contacto" className="hover:text-white transition">Contacto</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-medium mb-6 text-white/80">Síguenos</h4>
              <ul className="space-y-3 text-white/50">
                <li>
                  <a href="https://instagram.com/casaorbegdl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/possibleidgdl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Possible Ideas
                  </a>
                </li>
                <li>
                  <a href="https://create.casaorbe.ai" className="hover:text-white transition">
                    Crear con IA
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Casa Orbe / Possible Ideas. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <span className="w-2 h-2 bg-[#B5C4A1] rounded-full animate-pulse" />
              <span>Guadalajara, México</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
