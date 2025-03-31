const TrustUsProjects = () => {
  return (
    <section
      className="xl:max-h-[760px] bg-cover bg-center w-full pt-40 px-6 xl:px-20 xl:pt-30 2xl:px-50 rounded-2xl flex flex-col justify-center items-center text-center gap-8 "
      style={{
        backgroundImage: "url('/trustus.png')",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="font-bold text-[30px] md:text-[50px] lg:text-[70px]">
        They <span className="text-orange-100 ">Trust Us</span>
      </h1>
      <p className="lg:w-[65%] font-bold  text-[18px]">
        Trust us to be your steadfast partner, delivering continuous service and
        expertise that keep your assets performing at their peak, 24/7.
      </p>
      <p className="lg:w-[65%] text-[18px]">
        Experience unparalleled reliability with our dedicated services and
        innovative solutions, designed to <strong>elevate</strong> your asset
        management with Maximo. We ensure <strong>seamless operations</strong>{" "}
        and <strong>enhanced productivity</strong>, backed by our
        <strong>around- the-clock support</strong>.
      </p>
    </section>
  );
};

export default TrustUsProjects;
