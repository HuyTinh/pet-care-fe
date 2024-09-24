import { motion } from "framer-motion";
import { AnimateSection } from "../../../components/animate-section";
const textBox = {
  animate: { height: "auto", opacity: 1 },
};
const imageBox = {
  animate: { scale: 1.2 },
};

export const HomePage = () => {
  return (
    <div className="">
      <header
        className="Header relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-hero.jpg)",
        }}
      >
        <motion.div className="Content absolute top-1/2 w-full -translate-y-1/2 transform text-center text-white">
          <AnimateSection>
            <h1 className="text-5xl font-bold">Welcome to Pet Care Hospital</h1>
          </AnimateSection>
          <AnimateSection>
            <p className="mt-4 !px-96 text-xl">
              We invite new clients and old friends to experience the best
              healthcare we can provide for their animal companion.
            </p>
          </AnimateSection>
          <AnimateSection>
            <a
              href="#services"
              className="mt-6 inline-block rounded-full border border-white bg-transparent px-6 py-3 hover:bg-white hover:text-black"
            >
              View Our Services →
            </a>
          </AnimateSection>
        </motion.div>
      </header>

      <section
        className="About bg-gray-100 bg-cover bg-center px-8 py-16"
        style={{
          backgroundImage:
            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/wellcome-bg.jpg)",
        }}
      >
        <AnimateSection>
          <h2 className="text-center text-xl font-bold uppercase text-blue-500/75">
            Skilled Team
          </h2>
        </AnimateSection>
        <AnimateSection>
          <h3 className="mt-4 text-center text-4xl font-bold">
            A Passion for Helping
          </h3>
        </AnimateSection>
        <p className="mx-auto mt-6 max-w-4xl text-center text-gray-700">
          Pet Care Hospital, located in beautiful Kamloops, British Columbia, is
          a veterinary clinic providing medical, dental, surgical, and emergency
          care for companion and exotic animals. With five experienced
          veterinarians and a newly renovated hospital with the latest
          equipment, we are passionate about veterinary care for your beloved
          pets.
        </p>

        <div className="Images mt-12 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="Image-Left flex flex-1 items-center justify-center">
            <AnimateSection>
              <img
                className="Image-Conten h-auto max-h-[500px] object-cover shadow-lg md:max-h-full"
                src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/pic-two.jpg"
                alt="Veterinarian"
              />
            </AnimateSection>
          </div>

          <div className="Image-Center flex-1">
            <AnimateSection>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <img
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/icon1.1.png"
                  alt="Icon"
                  className="Icon-Size"
                />
                <div className="Content w-full md:w-[200px]">
                  <b className="text-sm text-white md:text-base">
                    30 minute appointments: we make the time for you and your
                    pet
                  </b>
                </div>
              </div>
            </AnimateSection>
          </div>

          <div className="Image-Right flex flex-1 items-center justify-center">
            <AnimateSection>
              <img
                className="Image-Conten h-auto max-h-[500px] object-cover shadow-lg md:max-h-full"
                src="https://aberdeenvethospital.ca/wp-content/uploads/2024/05/reception-with-puppy.jpg"
                alt="Veterinarian"
              />
            </AnimateSection>
          </div>
        </div>

        <div className="Images flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          <div className="Image-Center flex-1">
            <AnimateSection>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <img
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/icon2.png"
                  alt="Icon"
                  className="Icon-Size"
                />
                <div className="Content w-full md:w-[200px]">
                  <b className="text-sm text-white md:text-base">
                    Easy accessibility for people who use wheelchairs
                  </b>
                </div>
              </div>
            </AnimateSection>
          </div>

          <div className="Image-Left flex flex-1 items-center justify-center">
            <AnimateSection>
              <img
                className="Image-Conten h-auto max-h-[500px] object-cover shadow-lg md:max-h-full"
                src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/wellcome-image.jpg"
                alt="Veterinarian"
              />
            </AnimateSection>
          </div>

          <div className="Image-Center flex-1">
            <AnimateSection>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <img
                  src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/icon3.png"
                  alt="Icon"
                  className="Icon-Size"
                />
                <div className="Content w-full md:w-[200px]">
                  <b className="text-sm text-white md:text-base">
                    Board-Certified Feline Specialist: Dr. Embers HA
                  </b>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      <section className="H14 bg-gray-100 bg-cover bg-center px-8 pb-16">
        <div className="H12 bg-gray-100 py-16">
          <div className="mb-6 text-center">
            <AnimateSection>
              <h2 className="text-xl font-semibold uppercase tracking-wide text-blue-500/75">
                What We Do
              </h2>
            </AnimateSection>
            <AnimateSection>
              <h1 className="mt-2 text-3xl font-bold">Our Services</h1>
            </AnimateSection>
          </div>

          <div className="mx-auto mb-12 max-w-3xl px-4 text-center text-gray-700">
            <p>
              Pet Care Hospital has state-of-the-art equipment in our
              newly-renovated hospital and an experienced staff comprised of 5
              veterinarians and multiple support team members. Whether your pet
              simply needs a check-up or requires more intensive, ongoing
              treatment, we provide the highest quality care to all our
              patients. From regular health visits to when the time comes to say
              goodbye, you and your pet will be treated with compassion and
              kindness every step of the way.
            </p>
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
              care possible to all animals presented to us for treatment. At the
              same time we aim to treat all clients with kindness,
              consideration, and empathy when they visit this hospital. We
              strive to create a positive work environment for all of our staff,
              that in turn creates a positive, comfortable environment for all
              of our patients and their owners. We strive to have our employees
              feel valued in their work and that they are able to transfer this
              into their home life.
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
  );
};
