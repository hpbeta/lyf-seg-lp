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
      icon: <ClipboardCheck className=" w-8 h-8  text-green-600 mb-7  " />,
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
    <section className="flex flex-col items-center">
      <div>
        <h1 className="text-center mt-14 mb-4 font-bold  text-3xl text-gray-800">
          Nossos Serviços
        </h1>
        <p className=" w-[650px] text-xl text-gray-600  mb-9">
          A LYF SEG oferece treinamentos, assessoria e soluções completas em
          Segurança do Trabalho para garantir conformidade e preservar vidas.
        </p>
      </div>
      <div className="w-full">
        <ul className="flex justify-center gap-4 mb-16">
          {serviceCard.map((service) => (
            <li
              className="box-shadows w-72 h-auto rounded-lg p-8"
              key={service.id}
            >
              {service.icon}
              <p className="font-bold text-xl mt-2 mb-2 text-gray-800 w-64 whitespace-nowrap overflow-hidden text-ellipsis">
                {" "}
                {service.title}
              </p>
              <p className="text-gray-600 font-normal ">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className=" text-center w-[750px] text-xl text-gray-600  mb-9">
          Somos especializados em treinamentos NR, análises ergonômicas e gestão
          de riscos ocupacionais, oferecendo soluções personalizadas para
          empresas de todos os portes e segmentos.
        </p>
        <a
          href="/"
          className="font-bold bg-green-700 text-white p-3 rounded-md block m-auto text-center w-56 mb-11 "
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
