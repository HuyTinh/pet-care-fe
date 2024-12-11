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


const ProductDetail = () => {
    const { id } = useParams()
    const { data, isFetching, isLoading } = useGetProductByIdQuery(id as any)

    const { increaseCartItem } = useCart()


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
                                !isFetching && ((data as any)?.data as IProducts[]).map((product: any) =>
                                    <>
                                        <div>
                                            <div>
                                                <img
                                                    src={product.image}
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
                                                    {product.name}
                                                </h1>
                                            </AnimateSection>
                                            <p className="text-base leading-relaxed md:text-lg">
                                                {product.description}
                                            </p>
                                            <p className="font-bold text-2xl !text-[#0099CF]">
                                                {toCurrency(product.price)} VNĐ
                                            </p>
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
                                                        onClick={() => increaseCartItem(product)}
                                                    >
                                                        <MdOutlineAddShoppingCart color="white" />
                                                        Add to cart
                                                    </button>
                                                </AnimateSection>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <p>Product Id: </p>
                                                <p className="font-bold text-[#454545]">#PM {product.id}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <p>Categories: </p>
                                                <p className="font-bold text-[#454545]">{product.type}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default ProductDetail