import { Button } from "@/components/ui/button"
import { aboutText, aboutImages } from "@/data/data";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between px-28 py-20">
      <div className="md:w-1/2 text-left space-y-4">
        <div className="">
          <p>About us</p>
          <h1 className="text-2xl md:text-3xl">
            Welcome to <span className="text-yellow-400">Hotel.com</span>
          </h1>

        </div>
        <p className=" max-w-[650px]">
          {aboutText[0].text}
        </p>

        {/* cards */}
        <ul className="gap-5 md:grid-rows-1 md:space-y-0 md:space-x-4 flex md:flex-col lg:flex-row md:text-lg font-semibold">
          <li className=" shadow-md p-4 rounded-md flex-grow min-w-[120px] h-24 flex items-center justify-center hover:bg-yellow-200 cursor-pointer">
            500 ROOMS
          </li>
          <li className=" shadow-md p-4 rounded-md flex-grow min-w-[120px] h-24 flex items-center justify-center hover:bg-yellow-200 cursor-pointer">
            800 STAFF
          </li>
          <li className=" shadow-md p-4 rounded-md flex-grow min-w-[120px] h-24 flex items-center justify-center hover:bg-yellow-200 cursor-pointer">
            4001 CLIENTS
          </li>
        </ul>

        
        <Button className="text-lg bg-yellow-400 hover:bg-yellow-300 mt-4 px-8 py-4 flex items-center justify-center">
          Explore More
        </Button>
      </div>

      {/* Right Section - Images */}
      <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-0">
        {aboutImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`About ${index + 1}`}
            className="w-full rounded-md object-cover h-40 md:h-48"
          />
        ))}
      </div>
    </div>
  );
}

export default About;

