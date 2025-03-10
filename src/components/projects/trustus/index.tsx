const TrustUsProjects = () => {
  return (
    <section
      className="xl:max-h-[760px] bg-cover bg-center w-full py-40 px-3 xl:py-60 xl:px-25 rounded-2xl "
      style={{
        backgroundImage: "url('/trustus.png')",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between items-center pl-2 pr-2 xl:pl-25 xl:pr-25 gap-20  ">
        <img
          className="hidden xl:inline rounded-[100%] self-center"
          src={"/They-Trust-us-image.png"}
          alt="trustus"
          width={640}
          height={425}
        />
        <div className="flex flex-col gap-5 w-[100%] xl:w-[50%] justify-center">
          <h3 className=" text-[29px] xl:text-[61px] font-bold ">
            They
            <span className="text-orange-100"> Trust us</span>
          </h3>
          <p>
            Experience unparalleled reliability with our dedicated services and{" "}
            <br className="hidden xl:inline" />
            innovative solutions, designed to <strong>elevate</strong> your
            asset management with <br className="hidden xl:inline" />
            <strong>Maximo</strong>.<br className="hidden xl:inline" /> We
            ensures <strong>seamless operations</strong> and{" "}
            <strong>enhanced productivity</strong>, backed by
            <br className="hidden xl:inline" /> our
            <strong> around-the-clock support</strong>
          </p>
          <p>
            <strong className="text-orange-100">Trust us, </strong>to be your
            steadfast partner, delivering continuous service and{" "}
            <br className="hidden xl:inline" /> expertise that keep your assets
            performing at their peak, <strong>24/7</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustUsProjects;
