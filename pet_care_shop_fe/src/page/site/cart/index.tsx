import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import useCart from "../../../shared/hook/useCart";
import { FaHandPointRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toCurrency } from "../../../shared/util/number-format";

const ProductCart = () => {
    const { cartData, increaseCartItem, removeCartItem, decreaseCartItem, totalPrice } = useCart()


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="!bg-white">
                <section
                    className="Mission flex min-h-screen items-center justify-center p-4 text-white md:p-8"
                >

                    <div className="relative w-full max-w-7xl flex gap-5">
                        <div className=" w-2/3 border-r-2 border-slate-300">
                            {

                                !cartData.length
                                    ?
                                    <>
                                        <div>
                                            <span className="text-3xl text-black">You haven't product</span>

                                        </div>
                                        <div className="mt-5 flex items-center gap-4">
                                            <span className="text-3xl text-black">Add product is here </span> 
                                            <FaHandPointRight color="#0099CF" size={35}/>
                                            <NavLink to="/"><span className="text-3xl text-[#0099CF] underline">Pet Care Shop</span></NavLink>
                                        </div>
                                    </>
                                    :
                                    cartData.map((cartItem: any) =>
                                        <>
                                            <div className="flex gap-5 items-center ">
                                                <div className="flex items-center gap-5">
                                                    <MdOutlineClose color="black" className="cursor-pointer" onClick={() => removeCartItem(cartItem.product)} />
                                                    <img
                                                        src={cartItem.product.image}
                                                        alt="Service 1"
                                                        className="h-[110px] w-[110px] rounded object-cover shadow-lg"
                                                    />
                                                </div>
                                                <div className="flex !justify-around flex-col *:text-black">
                                                    <span className="font-bold">{cartItem.product.name}</span>
                                                    {/* <span>1 combo / 3 tablet</span> */}
                                                </div>
                                                <div className="ml-32">
                                                    <div className="join">
                                                        <button className="join-item btn" onClick={() => decreaseCartItem(cartItem.product)}>-</button>
                                                        <button className="join-item btn"><span className="!text-black">{cartItem.quantity}</span></button>
                                                        <button className="join-item btn" onClick={() => increaseCartItem(cartItem.product)}>+</button>
                                                    </div>
                                                </div>
                                                <div className="ml-28">
                                                    <span className="text-lg font-bold text-black">{toCurrency(cartItem.price)} VNĐ</span>
                                                </div>
                                            </div>
                                            <hr className="border-t border-slate-300 my-4 mx-4" />
                                        </>
                                    )
                            }
                        </div>
                        <div className="space-y-6 p-4 md:p-0 *:text-black  w-1/3">
                            <div className="border-b-2 border-slate-300 pb-3">
                                <span className="text-2xl">CART TOTAL</span>
                            </div>
                            <div className="flex justify-between pb-10">
                                <span className="font-bold">Total </span>
                                <span className="font-bold">{toCurrency(totalPrice())} VNĐ</span>
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