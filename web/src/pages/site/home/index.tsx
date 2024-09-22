import { motion } from "framer-motion"
const textBox = {
  animate: { height: "auto", opacity: 1, },
}
const imageBox = {
  animate: { scale: 1.2 }
}
export const HomePage = () => {
  return <div className="">
    <header className="Header relative z-0 h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-hero.jpg)' }}>

      <div className=" Content absolute top-1/2 transform -translate-y-1/2 text-center w-full text-white">
        <h1 className="text-5xl font-bold">Welcome to Aberdeen Veterinary Hospital</h1>
        <p className="mt-4 text-lg">
          We invite new clients and old friends to experience the best healthcare we can provide for their animal companion.
        </p>
        <a href="#services" className="mt-6 inline-block py-3 px-6 bg-transparent border border-white rounded-full hover:bg-white hover:text-black">
          View Our Services →
        </a>
      </div>
    </header>

    <section className="About py-16 px-8 bg-gray-100 bg-cover bg-center "
                style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/wellcome-bg.jpg)' }}>
                <h2 className="text-center text-2xl font-bold uppercase text-green-800">Skilled Team</h2>
                <h3 className="text-center text-4xl font-bold mt-4">A Passion for Helping</h3>
                <p className="text-center mt-6 text-gray-700 max-w-2xl mx-auto">
                    Aberdeen Veterinary Hospital, located in beautiful Kamloops, British Columbia, is a veterinary clinic providing medical, dental, surgical, and emergency care for companion and exotic animals. With five experienced veterinarians and a newly renovated hospital with the latest equipment, we are passionate about veterinary care for your beloved pets.
                </p>

                <div className="Images flex flex-col md:flex-row justify-between items-center mt-12 space-y-4 md:space-y-0">
                    <div className="Image-Left flex-1 flex justify-center items-center">
                        <img
                            className="Image-Conten h-auto max-h-[500px] md:max-h-full shadow-lg object-cover"
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/pic-two.jpg"
                            alt="Veterinarian"
                        />
                    </div>

                    <div className="Image-Center flex-1 flex flex-col items-center justify-center text-center space-y-4">
                        <img
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/icon1.1.png"
                            alt="Icon"
                            className="Icon-Size"
                        />
                        <div className="Content w-full md:w-[200px]">
                            <b className="text-white text-sm md:text-base">
                                30 minute appointments: we make the time for you and your pet
                            </b>
                        </div>
                    </div>

                    <div className="Image-Right flex-1 flex justify-center items-center">
                        <img
                            className="Image-Conten h-auto max-h-[500px] md:max-h-full shadow-lg object-cover"
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2024/05/reception-with-puppy.jpg"
                            alt="Veterinarian"
                        />
                    </div>
                </div>


                <div className="Images flex justify-between flex-col md:flex-row items-center space-y-8 md:space-y-0">

                    <div className="Image-Center flex-1 flex flex-col items-center justify-center text-center space-y-4">
                        <img
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/icon2.png"
                            alt="Icon"
                            className="Icon-Size"
                        />
                        <div className="Content w-full md:w-[200px]">
                            <b className="text-white text-sm md:text-base">
                                Easy accessibility for people who use wheelchairs
                            </b>
                        </div>
                    </div>

                    <div className="Image-Left flex-1 flex justify-center items-center">
                        <img
                            className="Image-Conten h-auto max-h-[500px] md:max-h-full shadow-lg object-cover"
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/wellcome-image.jpg"
                            alt="Veterinarian"
                        />
                    </div>

                    <div className="Image-Center flex-1 flex flex-col items-center justify-center text-center space-y-4">
                        <img
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/icon3.png"
                            alt="Icon"
                            className="Icon-Size"
                        />
                        <div className="Content w-full md:w-[200px]">
                            <b className="text-white text-sm md:text-base">
                                Board-Certified Feline Specialist: Dr. Embers HA
                            </b>
                        </div>
                    </div>
                </div>
            </section>


            <section className='H14 py-16 px-8 bg-gray-100 bg-cover bg-center'>
                <div className="H12 py-16 bg-gray-100">

                    <div className="text-center mb-12">
                        <h2 className="text-sm uppercase text-green-600 tracking-wide font-semibold">What We Do</h2>
                        <h1 className="text-3xl font-bold mt-2">Our Services</h1>
                    </div>

                    <div className="max-w-3xl mx-auto text-center text-gray-700 mb-12 px-4">
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

            <section
                className="Mission flex items-center justify-center bg-gray-900 text-white min-h-screen p-4 md:p-8 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/mission-bg.jpg)' }}
            >
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="space-y-6 p-4 md:p-0">
                        <h2 className="text-green-400 text-sm md:text-xs uppercase tracking-widest">
                            Aberdeen Veterinary Hospital
                        </h2>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Mission Statement
                        </h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            Our Mission at Aberdeen Veterinary Hospital is to supply the best quality care possible to all animals
                            presented to us for treatment. At the same time we aim to treat all clients with kindness, consideration, and
                            empathy when they visit this hospital. We strive to create a positive work environment for all of our staff, that
                            in turn creates a positive, comfortable environment for all of our patients and their owners. We strive to have our
                            employees feel valued in their work and that they are able to transfer this into their home life.
                        </p>
                        <button className="bg-green-400 text-gray-900 py-3 px-6 rounded-lg hover:bg-green-500 transition-colors">
                            Read More About Us →
                        </button>
                    </div>

                </div>
            </section>
  </div>;
};
