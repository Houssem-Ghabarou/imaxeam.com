const Ceos = () => {
  return (
    <section className=" ">
      <div
        className=" bg-cover bg-center w-full py-10 lg:py-20 px-6 lg:px-20 2xl:px-40  bg-orange-100 "
        // style={{ backgroundImage: "url('/herosection.png')" }}
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-center ">
          <div className="flex flex-col gap-5 w-[100%] lg:w-[45%]">
            <h1 className="text-white-100 text-[29px] lg:text-[54px] font-bold leading-[65px]">
              Meet <br className="hidden lg:inline" />
              <strong className="text-white-100">Our Co-CEOs</strong>
            </h1>
          </div>

          <div className="lg:w-[55%] flex flex-col gap-6">
            <div className=" flex flex-col relative">
              <div className="flex justify-between">
                <div className="flex flex-col gap-3 text-white-100">
                  <strong className="text-[29px] lg:text-[54px] font-bold leading-[65px]">
                    Jean Roger Siani
                  </strong>
                  <strong className="text-[16px] lg:text-[22px] font-[600] leading-[34px] ">
                    Serving as CO-CEO and Chairman of the board
                  </strong>
                  <p>Dedicated for iMaxeam worldwide expansion.</p>
                </div>
              </div>
              <img
                src="/dots.svg"
                alt="dots"
                width={50}
                height={50}
                className="absolute top-0 right-0 transform rotate-270"
              />
            </div>
            <div className=" flex flex-col relative">
              <div className="flex justify-between self-end  text-right text-white-100">
                <div className="flex flex-col gap-3">
                  <strong className="text-[29px] lg:text-[54px] font-bold leading-[65px]">
                    Mahdi Nabli
                  </strong>
                  <strong className="text-[16px] lg:text-[22px] font-[600] leading-[34px] ">
                    Serving as both CO-CEO and COO at iMaxeam
                  </strong>
                  <p>
                    Dedicated to ensuring iMaxeam delivers exceptional value to
                    each client.
                  </p>
                </div>
              </div>
              <img
                src="/dots.svg"
                alt="dots"
                width={50}
                height={50}
                className="absolute top-0 left-0 transform rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceos;
