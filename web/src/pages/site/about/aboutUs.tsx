export const AboutUs = () => {
    return <div className="bg-yellow-100">
        <section className="bg-gray-50 py-16 px-8"
                style={{ backgroundImage: 'url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/dark-grey-noise-bg.jpg)' }}>
                <div className="text-center">
                    <h1 className="mt-2 text-3xl font-bold text-gray-800">Join Our Team</h1>
                </div>
                <div className="max-w-6xl mx-auto text-center text-gray-700 mb-12 px-4">
                    <p>
                        We are a hard-working, enthusiastic group of passionate and compassionate professionals. If you love animals and the description of our team and workplace appeals to you, we would be glad to receive your resume.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center py-16 px-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://aberdeenvethospital.ca/wp-content/uploads/2024/05/New-Staff-Photo.jpg"
                            alt="Kitten with bubbles"
                            className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
                        <h2 className="text-3xl font-bold mb-4">CODE CHEF</h2>
                        <div className="text-gray-700 leading-relaxed">
                            <p className='mb-5'>
                            CODE CHEF was established at the end of semester 6 and beginning of semester 7 by a group of 6 members of FPT Polytechnic College, the group implemented a graduation project on veterinary hospital management:
                            </p>

                            <p>o Nguyen Thanh Huy Tinh aka Giao Su – Leader</p> 
                            <p>o Tong Dinh Tien Hoang aka Dua - Data Analyst</p>
                            <p>o Duong Minh Tan aka Chovy Viet Nam - Fullstack</p>
                            <p>o Le Nguyen Phuc Bao - aka Em Bao - Mobile</p>
                            <p>o Nguyen Man Dat aka A3 - Fullstack</p>
                            <p>o Ha Tan Hieu aka Embers - Carry water</p>

                            <p className='mt-5'>
                                Our veterinarians touch on all aspects of veterinary medicine that gives a well rounded balance to the practice.  Our clinic offers the best in general wellness and vaccinations, surgeons, dentistry, ultrasonography, orthopedic and urgent care. Our caring support staff of 8 registered veterinary technicians, 5 reception staff and 2 treatment room assistants are the best at keeping the flow within the hospital moving efficiently. We are a member of the Kamloops Veterinary On Call Group.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </div>;
};
