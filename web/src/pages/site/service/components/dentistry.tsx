export const DentistryService = () => {
  return (
    <div className="bg-yellow-100">
      <section
        className="bg-gray-50 px-8 py-28"
        style={{
          backgroundImage:
            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/dark-grey-noise-bg.jpg)",
        }}
      >
        <div className="text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Our Services
          </h3>
          <h1 className="mt-2 text-3xl font-bold text-gray-800">
            Pet Dentistry
          </h1>
        </div>

        <div className="mt-8 text-center">
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Aberdeen Veterinary Hospital is well established as a dentistry
            facility. Our well-equipped dental suite is a separate room
            designated for dentistry only. The suite contains all of the dental
            x-ray equipment, anaesthetic equipment, and dentistry tools to do
            safe, efficient dental practice.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Good dental care assists in your pets achieving a long and healthy
            lifespan. Aberdeen Veterinary Hospital has a number of veterinary
            and technical staff with a passion for delivering proper dental
            care. They are knowledgeable about the proper dietary issues that
            assist in slowing the deterioration in teeth and gums in both cats
            and dogs.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-md bg-green-500 px-6 py-3 text-white transition hover:bg-green-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
