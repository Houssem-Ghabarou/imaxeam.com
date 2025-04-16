import ReactCountryFlag from "react-country-flag";
// import Flag from "react-world-flags";

interface LocationProps {
  country: string;
  flag: string;
  address: string[];
  code: string;
}

const locations: LocationProps[] = [
  {
    country: "Canada",
    flag: "🇨🇦",
    code: "ca",
    address: ["3rd floor, Rue terry-fox level,", "Quebec, Canada"],
  },
  {
    country: "France",
    flag: "🇫🇷",
    code: "fr",
    address: ["40 rue Hemet,", "93300 Aubervilliers, France"],
  },
  {
    country: "Cameroon",
    flag: "🇨🇲",
    code: "cm",
    address: [
      "Ancien Collège des nations Avenue des palmiers - Bonapriso",
      "Douala- Cameroon",
    ],
  },
];

export default function OurLocations() {
  return (
    <div className="flex justify-center  w-full px-6 xl:px-20 2xl:px-40   mt-20">
      <div className="flex flex-col md:flex-row gap-5 w-full bg-white rounded-lg overflow-hidden  items-center">
        {/* Map Section */}
        <div className="w-full md:w-1/2 relative h-full">
          <img
            src="/worldmap.png"
            alt="Office locations map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Locations Information */}
        <div className="w-full md:w-1/2 md:p-8 flex flex-col gap-1 xl:gap-4">
          <h2 className="text-[30px] lg:text-[70px] font-bold text-[#F26430] mb-2">
            Our locations
          </h2>
          <p className="text-black-300  text-md lg:text-[25px] font-[600] mb-8">
            Let's Elevate Your Maximo Experience!
          </p>

          <div className="space-y-6">
            {locations.map((location, index) => (
              <div key={index} className="flex items-start group">
                <div className="flex items-center justify-center mr-4">
                  <div
                    className="w-12 h-12 xl:w-20 xl:h-20 rounded-full overflow-hidden bg-gray-50 
                              flex items-center justify-center border-2 border-gray-100 
                              shadow-sm transition-all duration-300 
                              group-hover:shadow-md group-hover:border-gray-200"
                  >
                    <div
                      className="w-10 h-10 xl:w-16 xl:h-16 rounded-full overflow-hidden 
                                  flex items-center justify-center bg-white"
                    >
                      <ReactCountryFlag
                        countryCode={location.code}
                        svg
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-1 pt-2">
                  {location.address.map((line, i) => (
                    <p key={i} className="text-gray-700">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
