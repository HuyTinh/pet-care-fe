import { AnimateSection } from "../../../components/animate-section";
import "./contact.scss";
export const ContactPage = () => {
  return (
    <div className="bg-yellow-100">
      <section className="Contact bg-white pb-16">
        <div className="bg-base-300 pb-12 pt-24">
          <div className="B02 container mx-auto my-14 text-center">
            <AnimateSection>
              <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
            </AnimateSection>
            <AnimateSection>
              <p className="mb-12 text-lg text-gray-500">
                If you have any questions or would like to book an appointment,
                call us or send us an email.
              </p>
            </AnimateSection>

            <div className="B03 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <img src="." alt="Address Icon" className="h-8 w-8" />
                </div>
                <h3 className="mb-2 font-bold uppercase">Address</h3>
                <p className="text-gray-500">B5 Nguyen Anh Thu</p>
                <p className="text-gray-500">District 12, Ho Chi Minh City</p>
              </div>

              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <img
                    src="/path/to/phone-icon.png"
                    alt="Phone Icon"
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="mb-2 font-bold uppercase">Phone</h3>
                <p className="text-gray-500">Call Us</p>
                <p className="text-gray-500">(+84)0123456789</p>
              </div>

              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <img
                    src="/path/to/email-icon.png"
                    alt="Email Icon"
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="mb-2 font-bold uppercase">Email</h3>
                <p className="text-gray-500">Send Us an Email</p>
                <p className="text-gray-500">petcaresgcontact@gmail.com</p>
              </div>

              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <img
                    src="/path/to/hours-icon.png"
                    alt="Hours Icon"
                    className="h-8 w-8"
                  />
                </div>
                <h3 className="mb-2 font-bold uppercase">Hours</h3>
                <p className="text-gray-500">Mon, Tues, Fri: 8am to 5pm</p>
                <p className="text-gray-500">Wed & Thurs: 8am to 8pm</p>
                <p className="text-gray-500">Sat, Sun & Holidays: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Feedback flex justify-between p-6">
          <div className="mx-auto">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Have a question or a comment?
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Please be aware that{" "}
              <span className="font-semibold">
                if you are requesting an appointment
              </span>
              , no time can be confirmed until we contact you.
            </p>
            <form className="Form space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md border border-blue-700 p-3 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-blue-700 p-3 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-blue-700 p-3 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full rounded-md border border-blue-700 p-3 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full rounded-md border border-blue-700 p-3 focus:outline-none"
                // rows= '4'
              />
              <button
                type="submit"
                className="BT01 w-full rounded-md bg-blue-700 p-3 text-white transition-all hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="image">
            <img
              className="h-[500px] rounded shadow"
              src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/diane.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
