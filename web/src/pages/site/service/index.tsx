import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { SurgeryService } from "./surgery";
import { Autoplay } from "swiper/modules";
import { DiagnosticsService } from "./diagnostics";
import { AnimateSection } from "../../../components/animate-section";
import { AllService } from "./all-service";
import { Outlet } from "react-router-dom";

export const ServicePage = () => {
  return (
    <div className="bg-gray-100">
      <Outlet />
      {/* <SurgeryService /> */}
      {/* <AllService /> */}
      {/* <DiagnosticsService /> */}
      {/* <div className="pb-16">
        <section className="H14 bg-gray-100 bg-cover bg-center px-8">
          <div className="H12 bg-gray-100 py-16">
            <div className="mb-12 text-center">
              <AnimateSection>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700/75">
                  What We Do
                </h2>
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
      </div> */}
      {/* <Outlet /> */}
      {/* <section className="H14 bg-gray-100 bg-cover bg-center px-8 py-16">
        <div className="H12 bg-gray-100 py-16">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-500/75">
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
          <div>
            <DiagnosticsService />
          </div>
          <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
            <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="Service-Image relative overflow-hidden rounded"
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

            <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="Service-Image relative overflow-hidden rounded"
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
                    Our lab consists of a complete idexx blood analyzer system
                    wwhich enable in-house. Helpful in emergency cases, it
                    reduces the...
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

            <motion.div
              initial="initial"
              animate="initial"
              whileHover="animate"
              className="Service-Image relative overflow-hidden rounded"
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
                    Our self-contained surgery siute allows the surgeon access
                    to x-rays and necessary surgical equipment without...
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
          </div>

          <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
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
          </div>
        </div>
      </section> */}
    </div>
  );
};
