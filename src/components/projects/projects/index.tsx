import Image from "next/image";

const projects = [
  {
    image: "/Projectscswg.png",
    title: "Fully Managed Service on Cloud",
    subtitle: "We Are Hosting World Most Biggest Food Supplier",
    description: `
   C&S Wholesale Grocers is a national wholesale grocery supply company in the United States, based in Keene, New Hampshire. In 2021 it was the eighth-largest privately held company in the United States, as listed by Forbes.
    `,
  },
  {
    image: "/Projectsmot.png",
    title: "MAXapps Mobile Solution",
    subtitle: "Trusted by one of the most important authority is KSA",
    description:
      "General Authority for Roads (Arabic: الهيئة العامة للطرق), or Roads General Authority (RGA), is a regulatory authority under Saudi Arabia’s Ministry of Transport and Logistic Services that is responsible for overseeing the country’s construction, operation and maintenance of roads.",
  },
  {
    image: "/Projectsrtc.png",
    title: "On-Premise Managed Service",
    subtitle: "We Are Managing On-Premise RTC",
    description: ` In the context of a Delegated Management under the name "REGIE DU TERMINAL A CONTENEURS DU PORT DE DOUALA/BONABERI-RTC," the Port Autonome de Douala (PAD) has been ensuring, since January 1, 2020, and on a transitional basis, the management, operation, and maintenance of the container terminal, in accordance with the provisions of Decree No. 2019/034 of January 24, 2019, reorganizing the Port Autonome de Douala.`,
  },
  {
    image: "/ProjectssouthernCompany.png",
    title: "MAXLS Excel Maximo Dataloader",
    subtitle: "Used by one of the biggest users of IBM Maximo",
    description:
      "Southern Company is an American gas and electric utility holding company based in the Southern United States. It is headquartered in Atlanta, Georgia, with executive offices also located in Birmingham, Alabama. The company is the second largest utility company in the U.S. in terms of customer base, as of 2021.",
  },
  {
    image: "/ProjectstimkenSteel.png",
    title: "MAXVS Visual Scheduler Calendar For Maximo",
    subtitle: "Used on daily basis by a major steel company",
    description:
      "TimkenSteel Corporation manufactures and sells alloy steel, and carbon and micro-alloy steel products in the United States and internationally. It offers carbon, micro-alloy, and alloy steel ingots, bars, tubes, and billets, as well as supplies machining and thermal treatment services.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="pl-2 pr-2 xl:pl-25 xl:pr-25 ">
      <div
        className=" bg-cover bg-center w-full py-20 px-3 xl:py-40 xl:px-25 rounded-2xl "
        style={{ backgroundImage: "url('/herosection.png')" }}
      >
        <div className="mt-10 space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col xl:flex-row items-center gap-8 ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <Image
                  src={project.image}
                  alt="Project Image"
                  width={604}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1  flex flex-col gap-5">
                <h1 className="leading-[65px]">
                  <strong>{project.title}</strong>
                </h1>
                <h2 className="text-[29px] font-normal">{project.subtitle}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
