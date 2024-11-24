import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import imageHotel from "@/assets/images/HotelImage.png.jpg";
import HotelBar from "@/assets/images/HotelBar.png";
import mole from "@/assets/images/mole.png";
import RoomsSection from "@/assets/images/RoomSection.png";
import About from "@/pages/About";
import { motion } from "framer-motion";
import ContactUs from "@/pages/ContactUs";
import Benefits from "@/pages/Benefit";

function HomeCarouselone() {
    const imageSrc = [
        {
            src: imageHotel,
            alt: 'Hotel view',
            text: 'Welcome to Your Perfect Getaway',
            subtitle: 'Explore stunning accommodations, luxurious amenities, and unforgettable experiences at your fingertips.',
        },
        {
            src: HotelBar,
            alt: 'HotelBar',
            text: 'Discover Your Home Away from Home',
            subtitle: 'Book your dream stay with us and enjoy exceptional comfort and service in every room.',
        },
        {
            src: mole,
            alt: 'mole',
            text: 'Escape to Comfort and Luxury',
            subtitle: 'Find the ideal place to unwind, whether it\'s a city escape or a serene retreat.',
        },
        {
            src: RoomsSection,
            alt: 'RoomsSection',
            text: 'Escape to Comfort and Luxury',
            subtitle: 'Find the ideal place to unwind, whether it\'s a city escape or a serene retreat.',
        },
    ];

    return (
        <div className="max-w-full overflow-hidden">
            <Carousel>
                <CarouselContent>
                    {imageSrc.map((imgData, index) => (
                        <CarouselItem key={index} className="flex w-full relative">
                            <img
                                className="
                                    w-full
                                    h-auto
                                    max-h-[300px]     
                                    sm:max-h-[400px]  
                                    md:max-h-[500px]  
                                    lg:max-h-[600px]  
                                    xl:max-h-[90vh]  
                                    object-cover
                                "
                                src={imgData.src}
                                alt={imgData.alt}
                            />
                            {/* Centered Text */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-opacity-50">
                            <h2 className="text-[4vw] font-bold">{imgData.text}</h2>
                            <p className="mb-4 text-[1.5vw]">{imgData.subtitle}

                            </p>

                                <div className="flex gap-4 ">
                                    <Button className="bg-yellow-500 hover:bg-yellow-400 md:text-[1.5vw] md:w-[12vw] md:h-[12vh]">Book Now</Button>
                                    <Button className="bg-yellow-500 hover:bg-yellow-400 md:text-[1.5vw] md:w-[12vw] md:h-[12vh]">Learn More</Button>
                                </div>
                            </div>
                         


                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="flex ml-20" />
                <CarouselNext className="flex mr-20" />
            </Carousel>
            <div className="p-4 md:p-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <About />
                </motion.div>
            </div>
            <div>
                <Benefits />
                <ContactUs />
            </div>
        </div>
    );
}

export default HomeCarouselone;
