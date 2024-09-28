export const History = () => {
    return <div className="bg-yellow-100">
        <div className="flex h-screen bg-gray-100">

            <div className="w-1/4 bg-gray-200 p-4">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-left mb-10">Account Center</h1>
                </div>
                <button className="w-full mb-10 p-2 bg-white text-black border border-gray-400 rounded-lg">
                    Profile
                </button>
                <button className="w-full p-2 bg-blue-500 text-white rounded-lg">
                    History
                </button>
            </div>

            <div className="w-3/4 p-6 bg-white">

                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">History</h1>
                    </div>
                </header>

                <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div onClick={() => (document.getElementById('my_modal_history') as any)?.showModal()}
                            key={item}
                            className="flex justify-between items-center p-4 bg-gray-200 rounded-lg shadow"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Service Icon"
                                    className="w-12 h-12"
                                />
                                <div>
                                    <p className="text-gray-700">Ngày 15/09/2004</p>
                                    <p className="text-xl font-semibold">Dịch vụ khám chữa bệnh</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-red-500 font-semibold">Thanh toán: 509.000 VND</p>
                            </div>
                        </div>
                    ))}
                    <dialog id="my_modal_history" className="modal">
                        <div className="modal-box max-w-4xl">

                            <div className="text-left mb-4">
                                <p className="text-sm">PETCARE PET SERVICES</p>
                                <p>Date: <strong>November 15th, 2024</strong></p>
                                <p>ID: <strong>54225152</strong></p>
                                <p>Pet's name: <strong>Vàng</strong></p>
                                <p>Weight: <strong>4kg5</strong></p>
                                <p>Age: <strong>Three months old</strong></p>
                                <p>Diagnos: <strong>Đau ruột thừa, rối loạn tiêu hóa, tăng động</strong></p>
                            </div>

                            <table className="w-full border border-gray-300 mb-4">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 p-2">Drug name</th>
                                        <th className="border border-gray-300 p-2">Dosage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 p-2">Thuốc đau ruột thừa</td>
                                        <td className="border border-gray-300 p-2">10 viên</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">Thuốc tiêu hóa</td>
                                        <td className="border border-gray-300 p-2">10 viên</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2">Thuốc ổn định đường ruột</td>
                                        <td className="border border-gray-300 p-2">10 viên</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 p-2"></td>
                                        <td className="border border-gray-300 p-2"></td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Note:</label>
                                    <textarea
                                        className="border border-gray-300 rounded-lg w-full p-2"
                                        rows={3}
                                        placeholder="Cách sử dụng thuốc"
                                    />
                                </div>
                                <div className="text-right">
                                    <p>Doctor prescribes</p>
                                    <p className="font-bold">Phuc Bao</p>
                                </div>
                            </div>

                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>

    </div>;
};