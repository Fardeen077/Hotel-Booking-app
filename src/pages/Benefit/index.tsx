import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid";
import { BenefitType, SelectedPage } from "@/index";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BenefitsPageGraphic from "@/assets/images/HotelImage.png.jpg";
import Benefit from "@/pages/Benefit/Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Luxurious Accommodations",
        description:
            "Experience elegant rooms and suites designed for ultimate comfort and relaxation, equipped with all the modern amenities you need.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Exceptional Service",
        description:
            "Our dedicated staff is committed to providing personalized service to ensure your stay is enjoyable and memorable.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Exclusive Amenities",
        description:
            "Enjoy a variety of amenities, including fine dining, spa services, and recreational facilities, all designed to enhance your stay.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="Benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1>MORE THAN JUST A HOTEL.</h1>
                    <p className="my-5 text-sm">
                        We offer luxurious accommodations, exceptional service, and a range of amenities to ensure your stay is comfortable and memorable. Experience personalized care and attention from our dedicated staff, making every moment of your visit truly special.
                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto w-1/2 rounded-lg"  // Set the image to 50% width
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <h1>
                                        MILLIONS OF HAPPY GUESTS ENJOYING{" "}
                                        <span className="text-primary-500">LUXURY</span>
                                    </h1>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <Button>
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;
