export const OurTeam = () => {
    return <div className="bg-yellow-100">
        <section className="bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Team</h2>
                    <hr className="border-t border-[#1040c5] w-full mb-3" style={{ borderWidth: '1px' }} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
                     
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src="src\assets\image\Dua.jpg"
                                alt="Dr. Ken Gummeson"
                                className="w-full h-[500px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                            <p className="text-sm uppercase font-bold">Leader</p>
                            <h3 className="text-xl font-semibold">Nguyen Thanh Huy Tinh</h3>
                            </div>
                        </div>

                       
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src="src\assets\image\Dua.jpg"
                                alt="Dr. Diane McKelvey"
                                className="w-full h-[500px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                                <p className="text-sm uppercase font-bold">Data Analyst(DA)</p>
                                <h3 className="text-xl font-semibold">Tong Dinh Tien Hoang</h3>
                                <p>Sống ngoài đảo làm việc luôn hoàn hảo</p>
                            </div>
                        </div>

                      
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <img
                               src="src\assets\image\Dua.jpg"
                                alt="Dr. Rebecca Campbell"
                                className="w-full h-[500px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                            <p className="text-sm uppercase font-bold">Fullstack (FT)</p>
                            <h3 className="text-xl font-semibold">Duong Minh Tan</h3>
                            <p>Nếu không thể sống hãy chết thật nhanh</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src="src\assets\image\Dua.jpg"
                                alt="Dr. Ken Gummeson"
                                className="w-full h-[500px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                            <p className="text-sm uppercase font-bold">Mobile</p>
                            <h3 className="text-xl font-semibold">Le Nguyen Phuc Bao</h3>
                            </div>
                        </div>

                       
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <img
                                src="src\assets\image\Dua.jpg"
                                alt="Dr. Diane McKelvey"
                                className="w-full h-[500px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                                <p className="text-sm uppercase font-bold">Fullstack</p>
                                <h3 className="text-xl font-semibold">Nguyen Man Dat</h3>
                            </div>
                        </div>

                      
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <img
                               src="src\assets\image\Dua.jpg"
                                alt="Dr. Rebecca Campbell"
                                className="w-full h-[500px] object-cover rounded-lg mb-4"
                            />
                            <div className="text-center">
                            <p className="text-sm uppercase font-bold">Carry Water</p>
                            <h3 className="text-xl font-semibold">Ha Tan Hieu</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>;
};