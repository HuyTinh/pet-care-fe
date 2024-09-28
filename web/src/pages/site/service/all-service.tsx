import { AnimateSection } from "../../../components/animate-section";
import { motion } from "framer-motion";
const textBox = {
  animate: { height: "auto", opacity: 1 },
};
const imageBox = {
  animate: { scale: 1.2 },
};

export const AllService = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div
          className="h-[52rem] w-full bg-cover"
          style={{
            backgroundImage: "url(/src/assets/images/services_hero_image.webp)",
          }}
        ></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-16 space-y-5 text-3xl text-white">
          <AnimateSection>
            <h2 className="text-center text-lg font-bold uppercase tracking-wide text-blue-700/75">
              <span className="rounded-full bg-white px-2">
                Partners in Care
              </span>
            </h2>
          </AnimateSection>
          <AnimateSection>
            <div className="text-center text-5xl font-bold">Our Services</div>
          </AnimateSection>
          <AnimateSection>
            <div className="text-center text-xl">
              We strongly believe that the more familiar a client is with their
              animal’s health issues, the better we are able to work together to
              diagnose and resolve health and behavioural problems.
            </div>
          </AnimateSection>
        </div>
      </div>
      <div className="pb-16">
        <section className="H14 bg-gray-100 bg-cover bg-center px-8">
          <div className="H12 bg-gray-100 p-16">
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
        <div className="space-y-6">
          <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
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
            </AnimateSection>
          </div>

          <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
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
                    src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-3-image.jpg"
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
            </AnimateSection>
          </div>
        </div>
        {/* <Swiper
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
        </Swiper> */}
      </div>
    </motion.div>
  );
};
