import { motion } from "framer-motion";
import { AnimateSection } from "../../../../shared/ui/animate-section";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const ProductDetail = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div id="chat-container"></div>
            <div className="">

                <section
                    className="Mission flex min-h-screen items-center justify-center bg-cover bg-center p-4 text-white md:p-8 mt-16"
                >
                    <div className="relative grid w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
                        <div>
                            <div>
                                <img
                                    src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733242696/mh8zmm1hwvhivkgeuwrk.jpg"
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
                                    Pate Meo-O
                                </h1>
                            </AnimateSection>
                            <p className="text-base leading-relaxed md:text-lg">
                                Give your cat a nutritious and delicious treat with our premium cat pâté.
                                Made from natural ingredients, it’s packed with essential nutrients to support your cat’s health and vitality.
                                Perfectly portioned and irresistibly tasty, it’s the ideal way to show your love every day!
                            </p>
                            <p className="font-bold text-2xl !text-[#0099CF]">
                                $ 100.00
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
                                        className="flex items-center justify-center gap-2 rounded-full bg-green-500/75 px-6 py-3 hover:bg-green-400/75 text-white font-bold">
                                        <MdOutlineAddShoppingCart color="white" />
                                        Add to cart
                                    </button>
                                </AnimateSection>
                            </div>


                            <div className="flex items-center gap-2">
                                <p>Product Id: </p>
                                <p className="font-bold text-[#454545]">#PM01</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>Categories: </p>
                                <p className="font-bold text-[#454545]">Pâté, Cat</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default ProductDetail