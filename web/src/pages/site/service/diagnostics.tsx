import { AnimateSection } from "../../../components/animate-section";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const textBox = {
  animate: { height: "auto", opacity: 1 },
};
const imageBox = {
  animate: { scale: 1.2 },
};
export const DiagnosticsService = () => {
  return (
    <div>
      <div
        className="h-[28rem] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/src/assets/images/services_diagnostics_hero.webp)",
        }}
      ></div>
      <section
        className="bg-gray-50 px-8 py-20"
        style={{
          backgroundImage:
            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/dark-grey-noise-bg.jpg)",
        }}
      >
        <div className="text-center">
          <AnimateSection>
            <h3 className="text-lg font-bold uppercase tracking-widest text-blue-700/75">
              Our Services
            </h3>
          </AnimateSection>
          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            Diagnostic Equipment
          </h1>
        </div>

        <div className="flex flex-col items-center px-8 py-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <AnimateSection>
              <img
                src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/x-rays-image-big.jpg"
                alt="Kitten with bubbles"
                className="h-[500px] w-full rounded-lg object-cover shadow-lg"
              />
            </AnimateSection>
          </div>

          <div className="mt-8 w-full md:mt-0 md:w-1/2 md:pl-12">
            <AnimateSection>
              <h2 className="mb-4 text-3xl font-bold">X-rays</h2>
            </AnimateSection>
            <p className="text-justify leading-relaxed text-gray-700">
              Aberdeen Veterinary Hospital has a separate and complete x-ray
              suite equipped with digital x-ray. Our machine takes excellent,
              good quality views that are stored digitally and can be sent out
              for interpretation at any time. All of the veterinarians and
              technicians are well trained in proper x-ray techniques. Digital
              x-ray creates an instant image for viewing by our clients and can
              easily be forwarded to other clinics and specialists. Our system
              can display immediately to a screen in our surgery suite, which
              alleviates the need for the surgeon to exit the sterile
              environment if a viewing is needed.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center py-16 md:flex-row">
          <div className="mt-8 w-full pe-10 md:mt-0 md:w-1/2 md:pl-12">
            <AnimateSection>
              <h2 className="mb-4 text-3xl font-bold">
                Ultrasound Diagnostics
              </h2>
            </AnimateSection>
            <p className="pleading-relaxed text-justify text-gray-700">
              Ultrasound is used diagnostically and gives great advantage to
              discovering hidden ailments in animals. Aberdeen Veterinary
              Hospital boasts a new SonoPath Mindray Ultrasound machine and puts
              it to good use in searching out things like how many puppies or
              kittens are to be expected, urinary tract issues, tumours,
              internal bleeding, foreign bodies and many other things that can
              be hiding inside a patient. We keep our ultrasound machine very
              busy and it has proved to be a very valuable tool for our
              practice. Should the need arise, we have access to specialists for
              more expert interpretation of our ultrasounds.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <AnimateSection>
              <img
                src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/ultrasound-big-image.jpg"
                alt="Kitten with bubbles"
                className="h-[500px] w-full rounded-lg object-cover shadow-lg"
              />
            </AnimateSection>
          </div>
        </div>
      </section>
      <div className="pb-16">
        <section className="H14 bg-gray-100 bg-cover bg-center px-8">
          <div className="H12 bg-gray-100 py-16">
            <div className="mb-12 text-center">
              <AnimateSection>
                <h3 className="text-lg font-bold uppercase tracking-widest text-blue-700/75">
                  What We Do
                </h3>
              </AnimateSection>
              <h1 className="mt-2 text-3xl font-bold">Our Services</h1>
            </div>

            <div className="mx-auto mb-12 max-w-7xl px-4 text-center text-gray-700">
              <p>
                Aberdeen Veterinary Hospital has state-of-the-art equipment in
                our newly-renovated hospital and an experienced staff comprised
                of 5 veterinarians and multiple support team members. Whether
                your pet simply needs a check-up or requires more intensive,
                ongoing treatment, we provide the highest quality care to all
                our patients. From regular health visits to when the time comes
                to say goodbye, you and your pet will be treated with compassion
                and kindness every step of the way.
              </p>
            </div>
          </div>
        </section>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          speed={5000}
          loop
          freeMode
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-2.5 px-12"
        >
          <SwiperSlide>
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
                  <b className="w-full text-white">
                    Aberdeen Veterunary Hopital is well establisshed as a
                    dentistry facility.
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
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-image.jpg"
                  alt="Service 1"
                  className="h-[300px] w-full rounded object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
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
                  <b className="w-full text-white">
                    Our lab consists of a complete Idexx blood analyzer system
                    which enables in-house diagnostics.
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
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/ultrasound-new-image.jpg"
                  alt="Service 1"
                  className="h-[300px] w-full rounded object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="Service-Image relative overflow-hidden rounded"
            >
              <div className="absolute bottom-10 left-8 z-10">
                <p className="rounded p-2 text-2xl font-semibold text-white">
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
                    This is a very specialized service and we are happy to be
                    able to offer this to uor client.
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
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-5.1-image.png"
                  alt="Service 1"
                  className="h-[300px] w-full rounded object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
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
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-3-image.jpg"
                  alt="Service 1"
                  className="h-[300px] w-full rounded object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="Service-Image relative overflow-hidden rounded"
            >
              <div className="absolute bottom-10 left-8 z-10">
                <p className="rounded p-2 text-2xl font-semibold text-white">
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
                    Annual health exams are important in identifying problems
                    before they become complicated.
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
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-6-image.png"
                  alt="Service 1"
                  className="h-[300px] w-full rounded object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
