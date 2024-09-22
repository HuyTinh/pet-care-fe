export const Profile = () => {
    return <div className="bg-yellow-100">
        <div className="flex h-[600px] bg-gray-200 ">
                <div className="w-1/4 bg-gray-300 p-4 ">
                    <h3 className='text-center mb-10 text-2xl'>Accout Center</h3>
                    <button className="w-full mb-10 p-2 bg-blue-500 text-white rounded-lg">Profile</button>
                    <button className="w-full p-2 bg-white text-black border border-gray-400 rounded-lg">History</button>
                </div>

                <div className="w-3/4 p-6 bg-white">
                    <div className="flex justify-center mb-6">
                        <div className="relative ">
                            <img
                                src="/src/assets/images/logo-nobackground.png"
                                alt="Profile"
                                className="w-32 h-32 rounded-full object-cover "
                            />
                            {/* <input type="file" /> */}
                            <button className="left-10 bg-blue-500 text-white px-2 py-1 rounded-lg">
                                Choose Image
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name:</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address:</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email:</label>
                            <input
                                type="email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender:</label>
                            <div className="flex mt-2">
                                <label className="mr-4">
                                    <input type="radio" className="mr-1" />
                                    Male
                                </label>
                                <label>
                                    <input type="radio" className="mr-1" />
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => (document.getElementById('my_modal_changeto') as any )?.showModal()}>Change to password
                            <dialog id="my_modal_changeto" className="modal">
                                <div className="modal-box max-w-xl">
                                    <h2 className="text-center text-black text-xl font-bold mb-4">CHANGE TO PASSWORD</h2>
                                    <form>
                                        <div className="mb-4">
                                            <label className="block text-black text-sm font-medium mb-1" htmlFor="password">
                                                Password:
                                            </label>
                        
                                            <input
                                                id="password"
                                                type="password"
                                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label className="block text-black text-sm font-medium mb-1" htmlFor="newPassword">
                                                New password:
                                            </label>
                                            <input
                                                id="newPassword"
                                                type="password"
                                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-black text-sm font-medium mb-1" htmlFor="confirmPassword">
                                                Confirm Password:
                                            </label>
                                            <input
                                                id="confirmPassword"
                                                type="password"
                                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                                        >
                                            Change to
                                        </button>
                                    </form>

                                </div>


                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
                    </div>
                </div>
            </div>
    </div>;
  };