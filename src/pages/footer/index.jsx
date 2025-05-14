import { HardHat, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export function  Footer ()  {
  return (
    <footer className="bg-gray-900 text-white mt-20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <HardHat className="h-8 w-8 text-green-500 mr-2" />
              <span className="font-bold text-2xl">LYF SEG</span>
            </div>
            <p className="text-gray-400 mb-6">
              Soluções completas em segurança do trabalho para proteger o que mais importa: as pessoas.
            </p>
         
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicing" className="text-gray-400 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} LYF SEG - Segurança do Trabalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};