import { Send, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-10 gap-5">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-gray-700 text-3xl   mb-7">
            Entre em Contato
          </h1>
          <p className=" w-[650px] text-xl mb-7 text-center text-gray-700 m-auto">
            Estamos prontos para ajudar a sua empresa a criar um ambiente de
            trabalho mais seguro e produtivo.
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <div className="shadow-2xl w-[600px] h-[600px] p-4 ">
              <div className="flex flex-col ">
                <form className="flex flex-col  p-10">
                  <label className="mb-1">Nome:</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="border border-gray-500 rounded-md p-2 w-96 mb-2 outline-green-800"
                  />
                  <label className="mb-1">Email:</label>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="border border-gray-500 rounded-md p-2 w-96 mb-2  outline-green-800"
                  />
                  <label className="mb-1">Número:</label>
                  <input
                    type="text"
                    placeholder="Seu telefone"
                    className="border border-gray-500 rounded-md p-2 w-96 mb-2  outline-green-800"
                  />
                  <label className="mb-1">Mensagem:</label>
                  <textarea
                    rows={4}
                    placeholder="Como posso ajudar sua empresa?"
                    className="border border-gray-500 rounded-md p-2 w-96 mb-2  outline-green-800"
                  ></textarea>
                  <button className=" flex items-center justify-center gap-2 font-bold bg-green-700 text-white w-[390px] mt-3 p-2 hover:bg-green-600 rounded-md transition-colors duration-300 ">
                    <Send /> Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bg-green-700 p-8 rounded-lg shadow-md text-white flex flex-col justify-between  w-[600px] h-[600px]">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Telefone</h4>
                    <p className="text-lg">(00) 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">E-mail</h4>
                    <p className="text-lg">contato@lyfseg.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4 text-xl">Horário de Atendimento</h4>
              <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>

            <div className="mt-12">
              <p className="text-white/80 italic">
                "A segurança não é apenas uma prioridade, é um valor essencial
                que deve estar presente em cada ação dentro da empresa."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
