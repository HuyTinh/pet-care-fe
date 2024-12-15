import { motion } from "framer-motion";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AnimateSection } from "../../../shared/ui/animate-section";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store/store";
import { useGetProductByIdQuery } from "../product.service";
import { IProducts } from "../../../types/product.modal";
import { useParams } from "react-router-dom";
import useCart from "../../../shared/hook/useCart";
import { toCurrency } from "../../../shared/util/number-format";
import { useState } from "react";
import Swal from "sweetalert2";


const ProductDetail = () => {
    const { id } = useParams()

    const { data, isFetching, isLoading } = useGetProductByIdQuery({
        productId: id as any,
    })

    const { addCartItem } = useCart()
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount(prev => prev + 1);
    };
    console.log("data: ", ((data as any)?.data as IProducts[] as any)?.name);
    console.log("data: ", id);

    const decrement = () => {
        setCount(prev => Math.max(0, prev - 1)); // Không cho phép giá trị nhỏ hơn 0
    };

    const hanldAddItems = (product: IProducts, quantity: number) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Add items successfully"
        });
        addCartItem(product, quantity)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div id="chat-container"></div>
            <div className="bg-white">
                <section
                    className="Mission flex min-h-screen items-center justify-center bg-cover bg-center p-4 text-white md:p-8 "
                >
                    <div className="relative grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 mt-20">
                        {
                            isLoading
                                ?
                                <div className="flex flex-col justify-center items-center h-[400px]">
                                    <img className="w-60 h-40" src={"https://res.cloudinary.com/drni4vhwq/image/upload/v1733770668/bwzwlkxuxlyge9gwegxf.gif"} />
                                    <span className="text-[#ACACAD] font-bold" style={{ fontFamily: "blod" }}>Customer loading...</span>
                                </div>
                                :
                                !isFetching && 
                                    <>
                                        <div>
                                            <div>
                                                <img
                                                    src={((data as any)?.data as IProducts[] as any)?.name.image}
                                                    alt="Service 1"
                                                    className="h-[480px] w-full rounded object-cover shadow-lg"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-6 p-4 md:p-0 *:text-black">
                                            <AnimateSection>
                                                <h2 className="text-sm uppercase tracking-widest text-blue-500/85 md:text-xs">
                                                    Product with Pet Care Hospital
                                                </h2>
                                            </AnimateSection>
                                            <AnimateSection>
                                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                                    {((data as any)?.data as IProducts[] as any)?.name}
                                                </h1>
                                            </AnimateSection>
                                            <p className="text-base leading-relaxed md:text-lg">
                                                {((data as any)?.data as IProducts[] as any)?.description}
                                            </p>
                                            <div className="flex">
                                                <p className="font-bold text-2xl !text-[#0099CF]">
                                                    {toCurrency(((data as any)?.data as IProducts[] as any)?.price)} VNĐ 
                                                </p>
                                            </div>
                                            <div className="join">
                                                <button className="join-item btn" onClick={decrement}>-</button>
                                                <button className="join-item btn"><span className="!text-black">{count}</span></button>
                                                <button className="join-item btn" onClick={increment}>+</button>
                                            </div>
                                            <div className="flex gap-2">
                                                <AnimateSection>
                                                    <button
                                                        className="flex items-center justify-center gap-2 rounded-full bg-blue-500/75 px-6 py-3 hover:bg-blue-400/75 text-white font-bold">
                                                        Buy now
                                                    </button>
                                                </AnimateSection>
                                                <AnimateSection>
                                                    <button
                                                        className="flex items-center justify-center gap-2 rounded-full bg-green-500/75 px-6 py-3 hover:bg-green-400/75 text-white font-bold"
                                                        onClick={() => hanldAddItems(((data as any)?.data as IProducts[] as any), count)}
                                                    >
                                                        <MdOutlineAddShoppingCart color="white" />
                                                        Add to cart
                                                    </button>
                                                </AnimateSection>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <p>Product Id: </p>
                                                <p className="font-bold text-[#454545]">#PM{((data as any)?.data as IProducts[] as any)?.id}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <p>Categories: </p>
                                                <p className="font-bold text-[#454545]">{((data as any)?.data as IProducts[] as any)?.category}</p>
                                            </div>
                                        </div>
                                    </>
                                
                        }
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default ProductDetail