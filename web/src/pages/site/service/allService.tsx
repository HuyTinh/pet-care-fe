import { motion } from "framer-motion"

const textBox = {
    animate: { height: "auto", opacity: 1, },
}
const imageBox = {
    animate: { scale: 1.2 }
}
export const AllService = () => {
    return <div className="bg-yellow-100">
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

                <div className="DV grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-2.5">
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

                    <motion.div initial="initial"
                        animate="initial"
                        whileHover="animate" className="Service-Image relative ">
                        <div className="absolute z-10 bottom-10 left-8">
                            <p className="text-white text-2xl font-semibold p-2 rounded">Diagnostics</p>
                            <motion.div transition={{
                                duration: 0.8,
                                height: { duration: 0.5 }
                            }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                <b className='text-white w-full'>Our lab consists of a complete idexx blood analyzer system wwhich enable in-house. Helpful in emergency cases, it reduces the...</b>
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

                    <motion.div initial="initial"
                        animate="initial"
                        whileHover="animate" className="Service-Image relative ">
                        <div className="absolute z-10 bottom-10 left-8">
                            <p className="text-white text-2xl font-semibold p-2 rounded">Surgery</p>
                            <motion.div transition={{
                                duration: 0.8,
                                height: { duration: 0.5 }
                            }} variants={textBox} className='h-0 opacity-0 overflow-hidden !w-[300px]'>
                                <b className='text-white w-full'>Our self-contained surgery siute allows the surgeon access to x-rays and necessary surgical equipment without...</b>
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

                </div>

                <div className="DV grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-2.5">
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

                </div>
            </div>
        </section>
    </div>;
};
