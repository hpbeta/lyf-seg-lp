import {
  ClipboardCheck,
  AlertTriangle,
  FileSpreadsheet,
  Users,
} from "lucide-react";

export function Services() {
  const serviceCard = [
    {
      id: 1,
      icon: <ClipboardCheck className="w-8 h-8 text-green-600 mb-7" />,
      title: "Treinamentos NR",
      description:
        "Capacitação completa e certificada em todas as Normas Regulamentadoras aplicáveis ao seu negócio.",
    },
    {
      id: 2,
      icon: <AlertTriangle className="w-8 h-8 text-green-600 mb-7" />,
      title: "Gestão de Riscos",
      description:
        "Identificação, análise e controle de riscos ocupacionais para prevenir acidentes e doenças relacionadas ao trabalho.",
    },
    {
      id: 3,
      icon: <FileSpreadsheet className="w-8 h-8 text-green-600 mb-7" />,
      title: "Análises Ergonômicas ",
      description:
        "Avaliação completa do ambiente de trabalho para melhorar o conforto, a segurança e a produtividade dos colaboradores.",
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-green-600 mb-7" />,
      title: "Consultoria Especializada",
      description:
        "Orientação personalizada para implementação e manutenção de programas de segurança do trabalho.",
    },
  ];

  return (
    <section id="servicing" className="flex flex-col items-center px-4">
      <div className="text-center mt-14 mb-4">
        <h1 className="font-bold text-3xl text-gray-800">Nossos Serviços</h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-9">
          A LYF SEG oferece treinamentos, assessoria e soluções completas em
          Segurança do Trabalho para garantir conformidade e preservar vidas.
        </p>
      </div>

      <div className="w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 justify-items-center">
          {serviceCard.map((service) => (
            <li
              key={service.id}
              className="box-shadows w-full max-w-xs rounded-lg p-6 bg-white"
            >
              {service.icon}
              <p className="font-bold text-lg sm:text-xl mt-2 mb-2 text-gray-800">
                {service.title}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-9">
          Somos especializados em treinamentos NR, análises ergonômicas e gestão
          de riscos ocupacionais, oferecendo soluções personalizadas para
          empresas de todos os portes e segmentos.
        </p>
        <a
          href="#contact"
          className="font-bold bg-green-700 text-white py-3 px-6 rounded-md inline-block mb-11"
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}