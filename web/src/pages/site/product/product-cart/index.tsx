import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

const ProductCart = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div id="chat-container"></div>
            <div>
                <div className="mt-44 ml-10">
                    <span className="font-semibold text-4xl text-black ">YOUR CART</span>
                </div>
                <section
                    className="Mission flex min-h-screen items-center justify-center p-4 text-white md:p-8 -mt-28"
                >
                    <div className="relative w-full max-w-7xl flex gap-5">
                        <div className=" w-2/3 border-r-2 border-slate-300">
                            <div className="flex gap-5 items-center ">
                                <div className="flex items-center gap-5">
                                    <MdOutlineClose color="black" className="cursor-pointer" />
                                    <img
                                        src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733242696/mh8zmm1hwvhivkgeuwrk.jpg"
                                        alt="Service 1"
                                        className="h-[110px] w-[110px] rounded object-cover shadow-lg"
                                    />
                                </div>
                                <div className="flex !justify-around flex-col *:text-black">
                                    <span className="font-bold">Pate Mew-O</span>
                                    <span>1 combo / 3 tablet</span>
                                </div>
                                <div className="ml-32">
                                    <div className="join">
                                        <button className="join-item btn">-</button>
                                        <button className="join-item btn">0</button>
                                        <button className="join-item btn">+</button>
                                    </div>
                                </div>
                                <div className="ml-28">
                                    <span className="text-lg font-bold text-black">$100.00</span>
                                </div>
                            </div>
                            <hr className="border-t border-slate-300 my-4 mx-4" />
                            <div className="flex gap-5 items-center ">
                                <div className="flex items-center gap-5">
                                    <MdOutlineClose color="black" className="cursor-pointer" />
                                    <img
                                        src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733242696/mh8zmm1hwvhivkgeuwrk.jpg"
                                        alt="Service 1"
                                        className="h-[110px] w-[110px] rounded object-cover shadow-lg"
                                    />
                                </div>
                                <div className="flex !justify-around flex-col *:text-black">
                                    <span className="font-bold">Pate Mew-O</span>
                                    <span>1 combo / 3 tablet</span>
                                </div>
                                <div className="ml-32">
                                    <div className="join">
                                        <button className="join-item btn">-</button>
                                        <button className="join-item btn">0</button>
                                        <button className="join-item btn">+</button>
                                    </div>
                                </div>
                                <div className="ml-28">
                                    <span className="text-lg font-bold text-black">$100.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 p-4 md:p-0 *:text-black  w-1/3">
                            <div className="border-b-2 border-slate-300 pb-3">
                                <span className="text-2xl">CART TOTAL</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery (3 to 5 days)</span>
                                <span className="font-bold">Free</span>
                            </div>
                            <div className="flex justify-between">
                                <span>VAT </span>
                                <span className="font-bold">0$</span>
                            </div>
                            <div className="flex justify-between border-b-2 border-slate-800 pb-3">
                                <span>Subtotal </span>
                                <span className="font-bold">200.00$</span>
                            </div>
                            <div className="flex justify-between pb-10">
                                <span className="font-bold">Total </span>
                                <span className="font-bold">200.00$</span>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    className="flex justify-center rounded-lg bg-blue-500/75 px-6 py-3 hover:bg-blue-400/75 text-white font-bold w-[300px]">
                                    Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default ProductCart