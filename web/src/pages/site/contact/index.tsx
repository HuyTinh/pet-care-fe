import { motion } from "framer-motion";
import "./contact.scss";
export const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-yellow-100">
        <section className="Contact bg-white py-16">
          <div className="B02 container mx-auto my-14 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Contact Us</h2>
            <p className="mb-12 text-lg text-gray-500">
              If you have any questions or would like to book an appointment,
              call us or send us an email.
            </p>

            <div className="B03 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#1547d1"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4"
                        stroke="#fcfcfd"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold uppercase">Address</h3>
                <p className="text-gray-500">B5 Nguyen Anh Thu</p>
                <p className="text-gray-500">District 12, Ho Chi Minh City</p>
              </div>

              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#1040c5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M18.9998 17.5V6.5C19.0627 5.37366 18.6774 4.2682 17.9279 3.42505C17.1784 2.5819 16.1258 2.06958 14.9998 2H8.99981C7.87387 2.06958 6.82121 2.5819 6.07175 3.42505C5.32228 4.2682 4.9369 5.37366 4.99982 6.5V17.5C4.9369 18.6263 5.32228 19.7317 6.07175 20.5748C6.82121 21.418 7.87387 21.9303 8.99981 21.9999H14.9998C16.1258 21.9303 17.1784 21.418 17.9279 20.5748C18.6774 19.7317 19.0627 18.6263 18.9998 17.5V17.5Z"
                        stroke="#fbf9f9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M14 5H10"
                        stroke="#fbf9f9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold uppercase">Phone</h3>
                <p className="text-gray-500">Call Us</p>
                <p className="text-gray-500">(+84)0123456789</p>
              </div>

              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#1050c5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                        stroke="#f7f3f3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="#f7f3f3"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></rect>{" "}
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold uppercase">Email</h3>
                <p className="text-gray-500">Send Us an Email</p>
                <p className="text-gray-500">petcaresgcontact@gmail.com</p>
              </div>

              <div className="B04 contact-item text-center">
                <div className="B05 icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#00000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                        fill="#f5f0f0"
                      ></path>{" "}
                      <path
                        d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                        fill="#f5f0f0"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h3 className="mb-2 font-bold uppercase">Hours</h3>
                <p className="text-gray-500">Mon, Tues, Fri: 8am to 5pm</p>
                <p className="text-gray-500">Wed & Thurs: 8am to 8pm</p>
                <p className="text-gray-500">Sat, Sun & Holidays: Closed</p>
              </div>
            </div>
          </div>

          <div className="Feedback flex justify-center p-6">
            <div>
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
                />
                <button
                  type="submit"
                  className="BT01 w-full rounded-md bg-blue-700 p-3 text-white transition-all hover:bg-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="Space w-[90px]"></div>
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
    </motion.div>
  );
};
