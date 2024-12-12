import { motion } from "framer-motion";
import { AnimateSection } from "../../../shared/ui/animate-section";
import { useGetProductQuery } from "../product.service";
import { IProducts } from "../../../types/product.modal";
// import { productId } from "../product.slice";
import { useNavigate } from "react-router-dom";
import useCart from "../../../shared/hook/useCart";
import Swal from "sweetalert2";

const Home = () => {
    const navigate = useNavigate()
    const { increaseCartItem } = useCart()

    const textBox = {
        animate: { height: "auto", opacity: 1 },
    };
    const imageBox = {
        animate: { scale: 1.2 },
    };
    const { data, isLoading, isFetching } = useGetProductQuery()



    const handleClick = (id: number) => {
        navigate(`/detail/${id}`)
    }

    const handleAddItems = (product : IProducts) => {
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
        increaseCartItem(product)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div id="chat-container"></div>
            <div className="">
                <header
                    className="Header relative h-screen bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/services-1-hero.jpg)",
                    }}
                >
                    <motion.div className="Content absolute top-1/2 w-full -translate-y-1/2 transform text-center text-white px-4 sm:px-8 md:px-16 lg:px-24">
                        <AnimateSection>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Welcome to product with Pet Care Hospital
                            </h1>
                        </AnimateSection>
                        <AnimateSection>
                            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">

                                Discover our special line of products designed just for your pets – premium nutrition to keep your dogs and cats healthy, active, and happy every day!
                            </p>
                        </AnimateSection>
                        <AnimateSection>
                            <a
                                href="#services"
                                className="mt-6 inline-block rounded-full border border-white bg-transparent px-4 py-2 sm:px-6 sm:py-3 hover:bg-white hover:text-black"
                            >
                                View Our Services →
                            </a>
                        </AnimateSection>
                    </motion.div>
                </header>
                <section className="H14 bg-gray-100 bg-cover bg-center px-8 pb-16">
                    <div className="H12 bg-gray-100 py-16">
                        <div className="mb-6 text-center">
                            <AnimateSection>
                                <h2 className="text-xl font-semibold uppercase tracking-wide text-blue-500/75">
                                    Introducing Dog and Cat Products
                                </h2>
                            </AnimateSection>
                            <AnimateSection>
                                <h1 className="mt-2 text-3xl font-bold">Our Products</h1>
                            </AnimateSection>
                        </div>

                        <div className="mx-auto mb-12 max-w-3xl px-4 text-center text-gray-700">
                            <p>
                                We are proud to provide comprehensive health care products for dogs and cats, meeting all needs from basic to advanced.
                                Our products are developed based on modern standards and high quality, ensuring the safety and health of your pets.
                                We are committed to accompanying you in caring for your pets, bringing health, joy, and happiness to your dogs and cats throughout their lives!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between">
                                <div>
                                    <span>Category 1</span>
                                </div>
                                <div>
                                    <span className="underline cursor-pointer">Show more</span>
                                </div>
                            </div>
                            <div className="DV mb-2.5 grid grid-cols-1 gap-6 px-4 md:grid-cols-4">
                                {
                                    isLoading
                                        ?
                                        ([1,2,3,4] as any).map(() =>
                                            <div className="flex w-52 flex-col gap-4">
                                                <div className="skeleton h-[300px] w-[343px]"></div>
                                            </div>
                                        )
                                        :
                                        !isFetching && ((data as any)?.data as IProducts[]).map((product: any) =>
                                            <AnimateSection>
                                                <motion.div
                                                    initial="initial"
                                                    animate="initial"
                                                    whileHover="animate"
                                                    className="Service-Image relative overflow-hidden rounded"
                                                >
                                                    <div className="absolute bottom-10 left-8 z-10">
                                                        <p className="p-2 text-2xl font-semibold text-white">
                                                            {product.name}
                                                        </p>
                                                        <motion.div
                                                            transition={{
                                                                duration: 0.8,
                                                                height: { duration: 0.5 },
                                                            }}
                                                            variants={textBox}
                                                            className="h-0 !w-[300px] overflow-hidden opacity-0"
                                                        >
                                                            <div className="flex *:text-white">
                                                                <button className="btn btn-info" onClick={() => handleClick(product.id)}><p className="text-white">Product detail</p></button>
                                                                <button className="btn btn-success ml-2" onClick={() => handleAddItems(product)}>Add to cart</button>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                    <motion.div
                                                        transition={{
                                                            duration: 0.5,
                                                        }}
                                                        variants={imageBox}
                                                        className="overflow-hidden"
                                                    >
                                                        <img
                                                            src={product.image}
                                                            alt="Service 1"
                                                            className="h-[300px] w-full rounded object-cover shadow-lg"
                                                        />
                                                    </motion.div>
                                                </motion.div>
                                            </AnimateSection>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="Mission flex min-h-screen items-center justify-center bg-gray-900 bg-cover bg-center p-4 text-white md:p-8"
                    style={{
                        backgroundImage:
                            "url(https://aberdeenvethospital.ca/wp-content/uploads/2022/05/mission-bg.jpg)",
                    }}
                >
                    <div className="relative grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-6 p-4 md:p-0">
                            <AnimateSection>
                                <h2 className="text-sm uppercase tracking-widest text-blue-500/75 md:text-xs">
                                    Pet Care Hospital
                                </h2>
                            </AnimateSection>
                            <AnimateSection>
                                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                    Mission Statement
                                </h1>
                            </AnimateSection>

                            <p className="text-base leading-relaxed md:text-lg">
                                Our Mission at Pet Care Hospital is to supply the best quality
                                care possible to all animals presented to us for treatment. At
                                the same time we aim to treat all clients with kindness,
                                consideration, and empathy when they visit this hospital. We
                                strive to create a positive work environment for all of our
                                staff, that in turn creates a positive, comfortable environment
                                for all of our patients and their owners. We strive to have our
                                employees feel valued in their work and that they are able to
                                transfer this into their home life.
                            </p>
                            <AnimateSection>
                                <button className="rounded-lg bg-blue-500/75 px-6 py-3 hover:bg-blue-400/75">
                                    Read More About Us →
                                </button>
                            </AnimateSection>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default Home