import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from "framer-motion"

const textBox = {
    animate: { height: "auto", opacity: 1, },
}
const imageBox = {
    animate: { scale: 1.2 }
}
export const DiagnosticsService = () => {
    return <div className="bg-yellow-100">
        <section className="bg-gray-50 py-16 px-8"
            style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/dark-grey-noise-bg.jpg)' }}>
            <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Our Services</h3>
                <h1 className="mt-2 text-3xl font-bold text-gray-800">Diagnostic Equipment</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center py-16 px-8">
                <div className="w-full md:w-1/2">
                    <img
                        src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/x-rays-image-big.jpg"
                        alt="Kitten with bubbles"
                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                    <h2 className="text-3xl font-bold mb-4">X-rays</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Aberdeen Veterinary Hospital has a separate and complete x-ray suite equipped with digital x-ray.
                        Our machine takes excellent, good quality views that are stored digitally and can be sent out for
                        interpretation at any time. All of the veterinarians and technicians are well trained in proper x-ray
                        techniques. Digital x-ray creates an instant image for viewing by our clients and can easily be forwarded
                        to other clinics and specialists. Our system can display immediately to a screen in our surgery suite,
                        which alleviates the need for the surgeon to exit the sterile environment if a viewing is needed.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center py-16">

                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                    <h2 className="text-3xl font-bold mb-4">Ultrasound Diagnostics</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ultrasound is used diagnostically and gives great advantage to discovering hidden
                        ailments in animals. Aberdeen Veterinary Hospital boasts a new SonoPath Mindray Ultrasound
                        machine and puts it to good use in searching out things like how many puppies or kittens are
                        to be expected, urinary tract issues, tumours, internal bleeding, foreign bodies and many
                        other things that can be hiding inside a patient. We keep our ultrasound machine very busy
                        and it has proved to be a very valuable tool for our practice. Should the need arise,
                        we have access to specialists for more expert interpretation of our ultrasounds.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/ultrasound-big-image.jpg"
                        alt="Kitten with bubbles"
                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                    />
                </div>
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
                            whileHover="animate" className="Service-Image relative ">
                            <div className="absolute z-10 bottom-10 left-8">
                                <p className="text-white text-2xl font-semibold p-2 rounded">Dentistry</p>
                                <motion.div transition={{
                                    duration: 0.8,
                                    height: { duration: 0.5 }
                                }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                    <b className='text-white w-full'>Aberdeen Veterunary Hopital is well establisshed as a dentistry facility.</b>
                                </motion.div>
                            </div>

                            <motion.div transition={{
                                duration: 0.5
                            }} variants={imageBox} className='overflow-hidden'>
                                <img
                                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-image.jpg"
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