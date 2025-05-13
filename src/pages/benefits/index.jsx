import { TrendingUp, ShieldCheck, Award } from 'lucide-react';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-yellow-50 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export function  BenefitsSection () {

  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
      title: "Redução de acidentes",
      description: "Diminua significativamente os índices de acidentes de trabalho e afastamentos, protegendo seus colaboradores."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-600" />,
      title: "Aumento de produtividade",
      description: "Ambientes seguros e saudáveis promovem maior engajamento, reduzem o absenteísmo e melhoram a produtividade."
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      title: "Credibilidade no mercado",
      description: "Demonstre comprometimento com a segurança e fortaleça a imagem da sua empresa perante clientes e parceiros."
    }
  ];

  return (
    <section id="benefits" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-700 opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Por que investir em segurança?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empresas que investem em segurança reduzem acidentes, aumentam a produtividade e transmitem credibilidade no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-8 py-3 rounded-md transition-all duration-300 inline-block"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};