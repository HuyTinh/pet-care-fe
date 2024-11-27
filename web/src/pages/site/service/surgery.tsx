import { AnimateSection } from "../../../shared/ui/animate-section";

export const SurgeryService = () => {
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
            <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-700/75">
              Our Services
            </h3>
          </AnimateSection>
          <AnimateSection>
            <h1 className="mt-2 text-3xl font-bold text-gray-800">
              Pet Surgery
            </h1>
          </AnimateSection>
        </div>

        <div className="mt-8 text-center">
          <p className="mx-auto max-w-7xl text-lg text-gray-600">
            Our self-contained surgery suite allows the surgeon access to x-rays
            and necessary surgical equipment with out having to leave the
            sterile environment of the suite. Our suite is completely equipped
            with everything needed to perform surgeries of all kinds. Aberdeen
            Veterinary Hospital surgeons are proficient with routine spays and
            neuters, orthopedic procedures, lump removals and many of the other
            types of surgeries that arise on an emergency basis (lacerations,
            abdominal explorations etc.).
          </p>
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-md bg-blue-700/75 px-6 py-3 text-white transition hover:bg-blue-800"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="H14 bg-gray-100 bg-cover bg-center px-8 py-8">
        <div className="H12 bg-gray-100 py-16">
          <div className="mb-12 text-center">
            <AnimateSection>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700/75">
                What We Do
              </h2>
            </AnimateSection>
            <AnimateSection>
              <h1 className="mt-2 text-3xl font-bold">Our Services</h1>
            </AnimateSection>
          </div>

          <div className="mx-auto max-w-7xl px-4 text-center text-gray-700">
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
        </div>
      </section>
    </div>
  );
};
