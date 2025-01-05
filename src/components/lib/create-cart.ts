import {create} from 'zustand'

export type Variant = {
    VariantID: number
    quantity: number
}

export  type CartItem = {
    name: string
    image: string
    id: number
    variant: Variant
    price: number
}

export type CartState ={
    cart: CartItem[]
    addToCart: (item: CartItem) => void
}



export const useStore = create<CartState>((set)=>({
    cart: [],
    addToCart: (item)=>  set((state)=> {
        const existingItem = state.cart.find((cartItem)=> cartItem.variant.VariantID === item.variant.VariantID)
        if(existingItem){
            const updatedCart = state.cart.map((cartItem)=> {
                if(cartItem.variant.VariantID === item.variant.VariantID){
                    return{
                        ...cartItem,
                        variant:{
                            ...cartItem.variant,
                            quantity: cartItem.variant.quantity + item.variant.quantity,
                        },
                    }
                }
                return cartItem
            })
            return{cart: updatedCart}
        }else{
            return{ cart: [...state.cart, {...item , variant: {VariantID: item.variant.VariantID , quantity: item.variant.quantity}}]}
        }
    }),
}))