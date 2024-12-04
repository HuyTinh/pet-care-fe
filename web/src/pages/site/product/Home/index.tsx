import { motion } from "framer-motion";
import { AnimateSection } from "../../../../shared/ui/animate-section";
import { NavLink } from "react-router-dom";

const Home = () => {
    const textBox = {
        animate: { height: "auto", opacity: 1 },
    };
    const imageBox = {
        animate: { scale: 1.2 },
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div id="chat-container"></div>
            <div className="">
                <header
                    className="Header relative h-screen bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-hero.jpg)",
                    }}
                >
                    <motion.div className="Content absolute top-1/2 w-full -translate-y-1/2 transform text-center text-white px-4 sm:px-8 md:px-16 lg:px-24">
                        <AnimateSection>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Welcome to product with Pet Care Hospital
                            </h1>
                        </AnimateSection>
                        <AnimateSection>
                            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">

                                Discover our special line of products designed just for your pets – premium nutrition to keep your dogs and cats healthy, active, and happy every day!
                            </p>
                        </AnimateSection>
                        <AnimateSection>
                            <a
                                href="#services"
                                className="mt-6 inline-block rounded-full border border-white bg-transparent px-4 py-2 sm:px-6 sm:py-3 hover:bg-white hover:text-black"
                            >
                                View Our Services →
                            </a>
                        </AnimateSection>
                    </motion.div>
                </header>
                <section className="H14 bg-gray-100 bg-cover bg-center px-8 pb-16">
                    <div className="H12 bg-gray-100 py-16">
                        <div className="mb-6 text-center">
                            <AnimateSection>
                                <h2 className="text-xl font-semibold uppercase tracking-wide text-blue-500/75">
                                    Introducing Dog and Cat Products
                                </h2>
                            </AnimateSection>
                            <AnimateSection>
                                <h1 className="mt-2 text-3xl font-bold">Our Products</h1>
                            </AnimateSection>
                        </div>

                        <div className="mx-auto mb-12 max-w-3xl px-4 text-center text-gray-700">
                            <p>
                                We are proud to provide comprehensive health care products for dogs and cats, meeting all needs from basic to advanced.
                                Our products are developed based on modern standards and high quality, ensuring the safety and health of your pets.
                                We are committed to accompanying you in caring for your pets, bringing health, joy, and happiness to your dogs and cats throughout their lives!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between">
                                <div>
                                    <span>Category 1</span>
                                </div>
                                <div>
                                    <span className="underline cursor-pointer">Show more</span>
                                </div>
                            </div>
                            <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-4">
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                Dentistry
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <div className="flex *:text-white">
                                                     <NavLink to={"/product/detail"}> <button className="btn btn-info"><p className="text-white">Product detail</p></button></NavLink>
                                                    <button className="btn btn-success ml-2">Pay now</button>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733242696/mh8zmm1hwvhivkgeuwrk.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                Diagnostics
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <div className="flex *:text-white">
                                                    <button className="btn btn-info">Product detail</button>
                                                    <button className="btn btn-success ml-2">Pay now</button>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733242908/fmglzvrzekx87j6drd9n.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                Diagnostics
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <div className="flex *:text-white">
                                                    <button className="btn btn-info">Product detail</button>
                                                    <button className="btn btn-success ml-2">Pay now</button>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733243040/r4q5t8mamoekob7torph.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                Surgery
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <div className="flex *:text-white">
                                                    <button className="btn btn-info">Product detail</button>
                                                    <button className="btn btn-success ml-2">Pay now</button>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733243174/zpjgjcod3sysv3qlpbqd.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <span>Category 2</span>
                                </div>
                                <div>
                                    <span className="underline cursor-pointer">Show more</span>
                                </div>
                            </div>
                            <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-4">
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                Home Euthanasia
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <b className="w-full text-white">
                                                    This is a very specialized service and we are happy to
                                                    be able to offer this to uor client.
                                                </b>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733243843/w8e93gz7rw0ygen1a3ap.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                In-Home Euthanasia
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <b className="w-full text-white">
                                                    This is a very specialized service and we are happy to
                                                    be able to offer this to uor client.
                                                </b>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733243897/emorkd0bh7zcjekwtisz.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                                <AnimateSection>
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="rounded p-2 text-2xl font-semibold text-white">
                                                Emergency Care
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <b className="w-full text-white">
                                                    Aber Veterinary Hospitaal is a member of the Kamloops
                                                    Veterinary On Call Group.
                                                </b>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733243947/wlljr75df33b3v4qrgyc.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                                <AnimateSection>
                                    {" "}
                                    <motion.div
                                        initial="initial"
                                        animate="initial"
                                        whileHover="animate"
                                        className="Service-Image relative overflow-hidden rounded"
                                    >
                                        <div className="absolute bottom-10 left-8 z-10">
                                            <p className="p-2 text-2xl font-semibold text-white">
                                                Yearly Health Checks & Vaccinations
                                            </p>
                                            <motion.div
                                                transition={{
                                                    duration: 0.8,
                                                    height: { duration: 0.5 },
                                                }}
                                                variants={textBox}
                                                className="h-0 !w-[300px] overflow-hidden opacity-0"
                                            >
                                                <b className="w-full text-white">
                                                    Annual health exams are important in identifying
                                                    problems before they become complicated.
                                                </b>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            transition={{
                                                duration: 0.5,
                                            }}
                                            variants={imageBox}
                                            className="overflow-hidden"
                                        >
                                            <img
                                                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733243919/tathvjbkmzx32huongxf.jpg"
                                                alt="Service 1"
                                                className="h-[300px] w-full rounded object-cover shadow-lg"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </AnimateSection>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="Mission flex min-h-screen items-center justify-center bg-gray-900 bg-cover bg-center p-4 text-white md:p-8"
                    style={{
                        backgroundImage:
                            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/mission-bg.jpg)",
                    }}
                >
                    <div className="relative grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-6 p-4 md:p-0">
                            <AnimateSection>
                                <h2 className="text-sm uppercase tracking-widest text-blue-500/75 md:text-xs">
                                    Pet Care Hospital
                                </h2>
                            </AnimateSection>
                            <AnimateSection>
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                    Mission Statement
                                </h1>
                            </AnimateSection>

                            <p className="text-base leading-relaxed md:text-lg">
                                Our Mission at Pet Care Hospital is to supply the best quality
                                care possible to all animals presented to us for treatment. At
                                the same time we aim to treat all clients with kindness,
                                consideration, and empathy when they visit this hospital. We
                                strive to create a positive work environment for all of our
                                staff, that in turn creates a positive, comfortable environment
                                for all of our patients and their owners. We strive to have our
                                employees feel valued in their work and that they are able to
                                transfer this into their home life.
                            </p>
                            <AnimateSection>
                                <button className="rounded-lg bg-blue-500/75 px-6 py-3 hover:bg-blue-400/75">
                                    Read More About Us →
                                </button>
                            </AnimateSection>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default Home