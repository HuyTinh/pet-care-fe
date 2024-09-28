import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const textBox = {
    animate: { height: "auto", opacity: 1, },
}
const imageBox = {
    animate: { scale: 1.2 }
}
export const DentistryService = () => {
    return <div className="bg-yellow-100">
        <section className="bg-gray-50 py-16 px-8"
            style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/dark-grey-noise-bg.jpg)' }}>
            <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Our Services</h3>
                <h1 className="mt-2 text-3xl font-bold text-gray-800">Pet Dentistry</h1>
            </div>

            <div className="mt-8 text-center">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Aberdeen Veterinary Hospital is well established as a dentistry facility. Our well-equipped dental suite is a separate room designated for dentistry only. The suite contains all of the dental x-ray equipment, anaesthetic equipment, and dentistry tools to do safe, efficient dental practice.
                </p>

                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                    Good dental care assists in your pets achieving a long and healthy lifespan. Aberdeen Veterinary Hospital has a number of veterinary and technical staff with a passion for delivering proper dental care. They are knowledgeable about the proper dietary issues that assist in slowing the deterioration in teeth and gums in both cats and dogs.
                </p>
            </div>

            <div className="mt-10 text-center">
                <a
                    href="#"
                    className="inline-block px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                >
                    Contact Us
                </a>
            </div>
        </section>

        <section className='H14 py-16 px-8 bg-gray-100 bg-cover bg-center'>
            <div className="H12 py-16 bg-gray-100">

                <div className="text-center mb-12">
                    <h2 className="text-sm uppercase text-green-600 tracking-wide font-semibold">What We Do</h2>
                    <h1 className="text-3xl font-bold mt-2">Our Services</h1>
                </div>

                <div className="max-w-7xl mx-auto text-center text-gray-700 mb-12 px-4">
                    <p>
                        Aberdeen Veterinary Hospital has state-of-the-art equipment in our newly-renovated hospital and an experienced
                        staff comprised of 5 veterinarians and multiple support team members. Whether your pet simply needs a check-up
                        or requires more intensive, ongoing treatment, we provide the highest quality care to all our patients. From
                        regular health visits to when the time comes to say goodbye, you and your pet will be treated with compassion
                        and kindness every step of the way.
                    </p>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="px-4 mb-2.5"
                >

                    <SwiperSlide>
                        <motion.div initial="initial"
                            animate="initial"
                            whileHover="animate" className="Service-Image relative">
                            <div className="absolute z-10 bottom-10 left-8">
                                <p className="text-white text-2xl font-semibold p-2 rounded">Diagnostics</p>
                                <motion.div transition={{
                                    duration: 0.8,
                                    height: { duration: 0.5 }
                                }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                    <b className='text-white w-full'>Our lab consists of a complete Idexx blood analyzer system which enables in-house diagnostics.</b>
                                </motion.div>
                            </div>

                            <motion.div transition={{
                                duration: 0.5
                            }} variants={imageBox} className='overflow-hidden'>
                                <img
                                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/ultrasound-new-image.jpg"
                                    alt="Service 1"
                                    className=" w-full h-[300px] object-cover rounded shadow-lg"
                                />
                            </motion.div>

                        </motion.div>
                    </SwiperSlide>



                    <SwiperSlide>
                        <motion.div initial="initial"
                            animate="initial"
                            whileHover="animate" className="Service-Image relative">
                            <div className="absolute z-10 bottom-10 left-8">
                                <p className="text-white text-2xl font-semibold p-2 rounded">Surgery</p>
                                <motion.div transition={{
                                    duration: 0.8,
                                    height: { duration: 0.5 }
                                }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                    <b className='text-white w-full'>Our self-contained surgery suite allows the surgeon access to necessary surgical equipment without delay.</b>
                                </motion.div>
                            </div>

                            <motion.div transition={{
                                duration: 0.5
                            }} variants={imageBox} className='overflow-hidden'>
                                <img
                                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-4-image.jpg"
                                    alt="Service 1"
                                    className=" w-full h-[300px] object-cover rounded shadow-lg"
                                />
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.div initial="initial"
                            animate="initial"
                            whileHover="animate" className="Service-Image relative ">
                            <div className="absolute z-10 bottom-10 left-8">
                                <p className="text-white text-2xl font-semibold p-2 rounded">In-Home Euthanasia</p>
                                <motion.div transition={{
                                    duration: 0.8,
                                    height: { duration: 0.5 }
                                }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                    <b className='text-white w-full'>This is a very specialized service and we are happy to be able to offer this to uor client.</b>
                                </motion.div>
                            </div>

                            <motion.div transition={{
                                duration: 0.5
                            }} variants={imageBox} className='overflow-hidden'>
                                <img
                                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-5.1-image.png"
                                    alt="Service 1"
                                    className=" w-full h-[300px] object-cover rounded shadow-lg"
                                />
                            </motion.div>

                        </motion.div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.div initial="initial"
                            animate="initial"
                            whileHover="animate" className="Service-Image relative ">
                            <div className="absolute z-10 bottom-10 left-8">
                                <p className="text-white text-2xl font-semibold p-2 rounded">Emergency Care</p>
                                <motion.div transition={{
                                    duration: 0.8,
                                    height: { duration: 0.5 }
                                }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                    <b className='text-white w-full'>Aber Veterinary Hospitaal is a member of the Kamloops Veterinary On Call Group.</b>
                                </motion.div>
                            </div>

                            <motion.div transition={{
                                duration: 0.5
                            }} variants={imageBox} className='overflow-hidden'>
                                <img
                                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-3-image.jpg"
                                    alt="Service 1"
                                    className=" w-full h-[300px] object-cover rounded shadow-lg"
                                />
                            </motion.div>

                        </motion.div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <motion.div initial="initial"
                            animate="initial"
                            whileHover="animate" className="Service-Image relative ">
                            <div className="absolute z-10 bottom-10 left-8">
                                <p className="text-white text-2xl font-semibold p-2 rounded">Yearly Health Checks & Vaccinations</p>
                                <motion.div transition={{
                                    duration: 0.8,
                                    height: { duration: 0.5 }
                                }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                    <b className='text-white w-full'>Annual health exams are important in identifying problems before they become complicated.</b>
                                </motion.div>
                            </div>

                            <motion.div transition={{
                                duration: 0.5
                            }} variants={imageBox} className='overflow-hidden'>
                                <img
                                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-6-image.png"
                                    alt="Service 1"
                                    className=" w-full h-[300px] object-cover rounded shadow-lg"
                                />
                            </motion.div>

                        </motion.div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    </div>;
};
