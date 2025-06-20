import { Button } from "primereact/button";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-5 !p-4 banner">
        <span className="text-xl font-semibold text-white text-center">
          Serviços 100% regularizados e certificados.
        </span>
        <h2 className="text-5xl font-bold text-white text-center w-full max-w-4xl">
          Serviços de gás com agilidade, segurança e profissionais certificados.
          Soluções eficientes para residências, comércios e indústrias.
        </h2>
        <Button className="!bg-[#E35C4C] !p-2 !border-none text-white !font-semibold !rounded-xl hover:!bg-[#b35e54] active:!bg-[#d16053] transition-all">
          Solicitar Orçamento
        </Button>
      </section>
      <div className="flex justify-center items-center gap-20 !p-4 bg-[#3593D5]">
        <div className="flex flex-col justify-center items-center gap-4 !p-4">
          <h2 className="text-5xl font-bold text-white">100%</h2>
          <span className="text-xl font-semibold text-white">
            Clientes Satisfeitos
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 !p-4">
          <h2 className="text-5xl font-bold text-white">+200</h2>
          <span className="text-xl font-semibold text-white">
            Clientes Atendidos
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 !p-4">
          <h2 className="text-5xl font-bold text-white">5</h2>
          <span className="text-xl font-semibold text-white">
            Serviços de Gás
          </span>
        </div>
      </div>
      <section className="flex justify-center items-center gap-4 !p-4 !my-20 bg-white">
        <div className="flex flex-col justify-center items-start gap-4">
          <h2 className="font-bold text-4xl">SOBRE NÓS</h2>
          <p className="w-full max-w-3xl">
            Com mais de 10 anos de experiência no mercado, a São Paulo Gás é
            especializada na detecção de vazamentos e reparos em tubulações,
            oferecendo soluções seguras, rápidas e eficientes para redes de gás.
            <br />
            <br />
            Contamos com uma equipe altamente capacitada, comprometida com a
            qualidade e em constante evolução, sempre em busca das melhores
            tecnologias para garantir um atendimento de excelência.
          </p>
          <div className="flex justify-start items-center gap-4">
            <Button className="!bg-[#E35C4C] !p-2 !border-none text-white !font-semibold !rounded-xl hover:!bg-[#b35e54] active:!bg-[#d16053] transition-all">
              Solicitar Orçamento
            </Button>
            <Button className="!bg-transparent !p-2 !border-[#E35C4C] !text-[#1e1e1e] !font-semibold !rounded-xl hover:!bg-[#b35e54] active:!bg-[#d16053] transition-all">
              Ver Serviços
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-lg">
          <img src="about-image.png" alt="" className="" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 !px-4 !py-8 !my-20 bg-[#E35C4C]">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-4xl text-white">Serviços</h2>
          <span className="text-lg text-center text-white">
            Serviços de contrução e instalação de redes de gás nos segmentos:
            <br />
            <strong>Residencial, Comercial e Industrial</strong>
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-4  bg-white rounded-lg shadow-lg w-full max-w-sm p-4">
            <img
              src="https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-23926.jpg?t=st=1750414342~exp=1750417942~hmac=6c1265f5806f302a5f9e4ecf8e76c2c0caefae743e40bcb88eea5d69b0e5d011&w=900"
              alt="Instalação de tubulações de gás"
              className="rounded-t-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
