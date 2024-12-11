import "./footer.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-yellow-100">
      <section className="Footer py-16 text-center">
        <div className="Footer-Content container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="mb-8">
            <h4 className="text-xs sm:text-sm tracking-widest text-white">OUR CLINIC</h4>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Expert Pet Care
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-white">
              Pet Care Hospital, located in beautiful Kamloops, British Columbia, is a veterinary clinic providing
              medical, dental, surgical, and emergency care for companion and exotic animals. With five experienced
              veterinarians and a newly renovated hospital with the latest equipment, we are passionate about
              veterinary care for your beloved pets.
            </p>
          </div>

          <div className="Map relative mx-auto h-64 sm:h-80 md:h-96 w-full max-w-lg sm:max-w-2xl md:max-w-4xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7836.519228661375!2d106.6169377!3d10.867848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1726840247077!5m2!1svi!2s"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: "0" }}
            />
          </div>

          <div className="mt-12 text-gray-700">
            <p className="mb-4 text-sm sm:text-base">
              <strong>Mon, Tues, Fri:</strong> 8am–5pm
              <br />
              <strong>Wed & Thurs:</strong> 8am–8pm
              <br />
              <strong>Sat, Sun & Holidays:</strong> Closed
            </p>
            <p className="mb-6 text-sm sm:text-base">
              Call:{" "}
              <a href="tel:250-374-7549" className="underline">
                250-374-7549
              </a>{" "}
              |{" "}
              <a href="mailto:avh@aberdeenvethospital.ca" className="underline">
                avh@aberdeenvethospital.ca
              </a>
            </p>

            <div className="mb-4 flex justify-center space-x-4 sm:space-x-6">
              <a href="#" aria-label="Facebook">
                <FaFacebook size={28} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram size={28} />
              </a>
            </div>

            <p className="H24 w-full text-xs sm:text-sm text-white">
              © 2024 Pet Care Hospital. Website Design Code Chef{" "}
              <a href="#" className="underline">
                Sitemap
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>

  );
};
