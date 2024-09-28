import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AnimateSection } from "../../../components/animate-section";
const textBox = {
  animate: { height: "auto", opacity: 1 },
};
const imageBox = {
  animate: { scale: 1.2 },
};
export const EmergencyCareService = () => {
  return (
    <div className="bg-yellow-100">
      <section
        className="bg-gray-50 px-8 py-36"
        style={{
          backgroundImage:
            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/dark-grey-noise-bg.jpg)",
        }}
      >
        <div className="text-center">
          <AnimateSection>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Our Services
            </h3>
          </AnimateSection>
          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            Emergency Care
          </h1>
        </div>

        <div className="mt-8 text-center">
          <p className="mx-auto max-w-7xl text-lg text-gray-600">
            Kamloops is now home to Phases, a 24-hour emergency care facility
            located very close to our hospital. Aberdeen Veterinary Hospital is
            a general practice and not specifically an emergency hospital. We do
            our utmost to supply urgent care to our clients if we have the time
            space and staff to accommodate such situations as they arise. If we
            are presented with something that we do not have the time, staff or
            equipment to care for, we refer such cases to Phases Veterinary
            Emergency Hospital, located here in Kamloops. Phases is beautifully
            equipped and well staffed, and they will take any emergency that
            arises from anywhere in the area.{" "}
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            The number for Phases is 236-766-0450.
          </p>
        </div>
      </section>

      <section className="H14 bg-gray-100 bg-cover bg-center px-8 py-16">
        <div className="H12 bg-gray-100 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-green-600">
              What We Do
            </h2>
            <h1 className="mt-2 text-3xl font-bold">Our Services</h1>
          </div>

          <div className="mx-auto mb-12 max-w-7xl px-4 text-center text-gray-700">
            <p>
              Aberdeen Veterinary Hospital has state-of-the-art equipment in our
              newly-renovated hospital and an experienced staff comprised of 5
              veterinarians and multiple support team members. Whether your pet
              simply needs a check-up or requires more intensive, ongoing
              treatment, we provide the highest quality care to all our
              patients. From regular health visits to when the time comes to say
              goodbye, you and your pet will be treated with compassion and
              kindness every step of the way.
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
            className="mb-2.5 px-4"
          >
            <SwiperSlide>
              <motion.div
                initial="initial"
                animate="initial"
                whileHover="animate"
                className="Service-Image relative"
              >
                <div className="absolute bottom-10 left-8 z-10">
                  <p className="rounded p-2 text-2xl font-semibold text-white">
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
                className="Service-Image relative"
              >
                <div className="absolute bottom-10 left-8 z-10">
                  <p className="rounded p-2 text-2xl font-semibold text-white">
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
                className="Service-Image relative"
              >
                <div className="absolute bottom-10 left-8 z-10">
                  <p className="rounded p-2 text-2xl font-semibold text-white">
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
                    <b className="w-full text-white">
                      Our self-contained surgery suite allows the surgeon access
                      to necessary surgical equipment without delay.
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
                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-4-image.jpg"
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
                className="Service-Image relative"
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
                className="Service-Image relative"
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
      </section>
    </div>
  );
};
