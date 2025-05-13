import { ArrowRight } from 'lucide-react';

export function HeroSection () {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-100">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/8961345/pexels-photo-8961345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Imagem de background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Sua empresa segura, seus colaboradores protegidos.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Soluções completas em segurança do trabalho para proteger o que mais importa: as pessoas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              Fale com um especialista
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center text-lg border border-white/30"
            >
              Nossos serviços
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};