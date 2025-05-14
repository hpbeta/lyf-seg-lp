// import { Send, Phone, Mail } from "lucide-react";

// export function Contact() {
//   return (
//     <section id="contact" className="px-4">
//       <div className="flex flex-col items-center justify-center mt-10 gap-8">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="font-bold text-gray-700 text-3xl mb-5">
//             Entre em Contato
//           </h1>
//           <p className="max-w-xl text-xl text-gray-700">
//             Estamos prontos para ajudar a sua empresa a criar um ambiente de
//             trabalho mais seguro e produtivo.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
//           {/* Formulário */}
//           <div className="shadow-2xl w-full lg:w-1/2 p-4">
//             <form className="flex flex-col p-4 sm:p-10">
//               <label className="mb-1">Nome:</label>
//               <input
//                 type="text"
//                 placeholder="Seu nome"
//                 className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
//               />
//               <label className="mb-1">Email:</label>
//               <input
//                 type="email"
//                 placeholder="Seu email"
//                 className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
//               />
//               <label className="mb-1">Número:</label>
//               <input
//                 type="text"
//                 placeholder="Seu telefone"
//                 className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
//               />
//               <label className="mb-1">Mensagem:</label>
//               <textarea
//                 rows={4}
//                 placeholder="Como posso ajudar sua empresa?"
//                 className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
//               ></textarea>
//               <button className="flex items-center justify-center gap-2 font-bold bg-green-700 text-white w-full mt-3 p-3 hover:bg-green-600 rounded-md transition-colors duration-300">
//                 <Send /> Enviar
//               </button>
//             </form>
//           </div>

//           {/* Informações de contato */}
//           <div className="bg-green-700 p-6 sm:p-8 rounded-lg shadow-md text-white w-full lg:w-1/2 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <Phone className="w-6 h-6 mt-1" />
//                   <div>
//                     <h4 className="font-medium text-white/90 mb-1">Telefone</h4>
//                     <p className="text-lg">(11) 9 87346937</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <Mail className="w-6 h-6 mt-1" />
//                   <div>
//                     <h4 className="font-medium text-white/90 mb-1">E-mail</h4>
//                     <p className="text-lg">Tstalef@gmail.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12">
//               <h4 className="font-bold mb-4 text-xl">Horário de Atendimento</h4>
//               <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
//               <p>Sábado: 8h às 12h</p>
//             </div>

//             <div className="mt-12">
//               <p className="text-white/80 italic">
//                 "A segurança não é apenas uma prioridade, é um valor essencial
//                 que deve estar presente em cada ação dentro da empresa."
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Send, Phone, Mail } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar o formulário para o Formspree
    const response = await fetch("https://formspree.io/f/mvgadzje", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="px-4">
      <div className="flex flex-col items-center justify-center mt-10 gap-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-gray-700 text-3xl mb-5">Entre em Contato</h1>
          <p className="max-w-xl text-xl text-gray-700">
            Estamos prontos para ajudar a sua empresa a criar um ambiente de
            trabalho mais seguro e produtivo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
          {/* Formulário */}
          <div className="shadow-2xl w-full lg:w-1/2 p-4">
            <form onSubmit={handleSubmit} className="flex flex-col p-4 sm:p-10">
              <label className="mb-1">Nome:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
              />
              <label className="mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
                className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
              />
              <label className="mb-1">Número:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Seu telefone"
                className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
              />
              <label className="mb-1">Mensagem:</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Como posso ajudar sua empresa?"
                className="border border-gray-500 rounded-md p-2 w-full mb-2 outline-green-800"
              ></textarea>
              <button className="flex items-center justify-center gap-2 font-bold bg-green-700 text-white w-full mt-3 p-3 hover:bg-green-600 rounded-md transition-colors duration-300">
                <Send /> Enviar
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="bg-green-700 p-6 sm:p-8 rounded-lg shadow-md text-white w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Telefone</h4>
                    <p className="text-lg">(11) 9 87346937</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">E-mail</h4>
                    <p className="text-lg">Tstalef@gmail.com</p>
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