import { Button } from "primereact/button";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <header className="flex justify-around items-center gap-4 !p-4">
        <div className="flex">
          <img src="logo.png" alt="Logo" className="" />
        </div>
        <nav className="flex justify-center items-center gap-4">
          <a
            href="#"
            className="uppercase font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Página Inicial
          </a>
          <a
            href="#sobre"
            className="uppercase font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Sobre nós
          </a>
          <a
            href="#servicos"
            className="uppercase font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Serviços
          </a>
          <a
            href="#contatos"
            className="uppercase font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Contatos
          </a>
        </nav>
        <Button className="!bg-[#E35C4C] !p-2 !border-none text-white !font-semibold !rounded-xl hover:!bg-[#b35e54] active:!bg-[#d16053] transition-all">
          Solicitar Orçamento
        </Button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} key="home" />
      </Routes>

      <footer className="flex justify-around items-start gap-4 !p-4 bg-white">
        <div className="flex flex-col justify-center items-start">
          <div className="flex">
            <img src="logo.png" alt="Logo" />
          </div>
          <span className="text-gray-600 text-sm">
            São Paulo Gás - Construção de redes de gás
          </span>
          <span className="text-gray-600 text-sm">
            São Paulo Gás LTDA
            <br />
            <strong>CNPJ:</strong> 12.345.678/0001-90
          </span>
          <span className="text-gray-600 text-sm">
            2025 © Todos os direitos reservados
          </span>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="font-bold">Navegação</h2>
          <div className="flex flex-col justify-center items-start gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Página Inicial
            </a>
            <a
              href="#sobre"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Sobre nós
            </a>
            <a
              href="#servicos"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Serviços
            </a>
            <a
              href="#contatos"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Contatos
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="font-bold">
            Serviços
          </h2>
          <div className="flex flex-col justify-center items-start gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Instalação e Manutenção de Aquecedores a Gás
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Aplicação de Resina (MND)
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Detecção de Vazamento
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Vendas de Pressurizadores e Aquecedores a Gás
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="font-bold">
            Encontre-nos
          </h2>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex justify-center items-center gap-4">
              <i className="pi pi-pin"></i>
              <span>Rua (nome da rua) - (número), (cidade - estado) - (cep)</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
