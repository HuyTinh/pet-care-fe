import './contact.scss'
export const Contact = () => {
    return <div className="bg-yellow-100">
        <section className="Contact py-16 bg-white">
            <div className="B02 container mx-auto text-center my-14">
                <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                <p className="text-lg text-gray-500 mb-12">
                    If you have any questions or would like to book an appointment, call us or send us an email.
                </p>

                <div className="B03 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="B04 contact-item text-center">
                        <div className="B05 icon w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                            <img src="." alt="Address Icon" className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold uppercase mb-2">Address</h3>
                        <p className="text-gray-500">B5 Nguyen Anh Thu</p>
                        <p className="text-gray-500">District 12, Ho Chi Minh City</p>
                    </div>

                    <div className="B04 contact-item text-center">
                        <div className="B05 icon w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                            <img src="/path/to/phone-icon.png" alt="Phone Icon" className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold uppercase mb-2">Phone</h3>
                        <p className="text-gray-500">Call Us</p>
                        <p className="text-gray-500">(+84)0123456789</p>
                    </div>

                    <div className="B04 contact-item text-center">
                        <div className="B05 icon w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                            <img src="/path/to/email-icon.png" alt="Email Icon" className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold uppercase mb-2">Email</h3>
                        <p className="text-gray-500">Send Us an Email</p>
                        <p className="text-gray-500">petcaresgcontact@gmail.com</p>
                    </div>

                    <div className="B04 contact-item text-center">
                        <div className="B05 icon w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                            <img src="/path/to/hours-icon.png" alt="Hours Icon" className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold uppercase mb-2">Hours</h3>
                        <p className="text-gray-500">Mon, Tues, Fri: 8am to 5pm</p>
                        <p className="text-gray-500">Wed & Thurs: 8am to 8pm</p>
                        <p className="text-gray-500">Sat, Sun & Holidays: Closed</p>
                    </div>
                </div>
            </div>

            <div className="Feedback p-6 flex justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Have a question or a comment?</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Please be aware that <span className="font-semibold">if you are requesting an appointment</span>, no time can be confirmed until we contact you.
                    </p>
                    <form className="Form space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-3 border border-blue-700 rounded-md focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-3 border border-blue-700 rounded-md focus:outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border border-blue-700 rounded-md focus:outline-none"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full p-3 border border-blue-700 rounded-md focus:outline-none"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 border border-blue-700 rounded-md focus:outline-none"
                        // rows= '4'
                        />
                        <button
                            type="submit"
                            className="BT01 w-full text-white p-3 bg-blue-700 rounded-md hover:bg-blue-800 transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='image '>
                    <img className='rounded h-[500px] shadow' src="https://aberdeenvethospital.ca/wp-content/uploads/2022/05/diane.jpg" alt="" />
                </div>
            </div>
        </section>
    </div>;
};
