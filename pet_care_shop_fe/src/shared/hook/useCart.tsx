import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addCart, removeCart, updateCart } from "../../page/site/cart/cart.slice";
import { IProducts } from "../../types/product.modal";

const useCart = () => {
    const distpath = useDispatch()
    const cartData = useSelector((state: RootState) => state.cart.cart)

    const addCartItem = (product: IProducts, quantity: number) => {
        distpath(addCart({ product: product, updateQty: quantity }))
    }
    const increaseCartItem = (product: IProducts) => {
        distpath(updateCart({ product: product, updateQty: 1 }))
    }
    const removeCartItem = (product: IProducts) => {
        distpath(removeCart(product.id))
    }

    const decreaseCartItem = (product: IProducts) => {
        distpath(updateCart({ product: product, updateQty: -1 }))
    }



    const totalPrice = () => cartData.reduce((sum: any, cartItem: any) => sum + cartItem.price * 1, 0)


    return { cartData, addCartItem, increaseCartItem, removeCartItem, decreaseCartItem, totalPrice }
}

export default useCart