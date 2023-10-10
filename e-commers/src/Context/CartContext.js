import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export let CartContext = createContext()

export default function CartContextProvider(props){

    let userToken = localStorage.getItem('userToken')
    let headers = {
        token:userToken
    }
    async function addTocart(id){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , {
            productId:id
        } , {
            headers
        }).then((res)=>res)
        .catch((err)=>err)
    }
    async function addtowish(id){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , {
            productId:id
        } , {
            headers
        }).then((res)=>res)
        .catch((err)=>err)
    }

     async function getCart(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
     }
     async function removeCartItem(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
     }
     async function updateCart(id ,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,{
            count
        },{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
     }
     async function onlinePayment(cartid, url ,values){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=${url}` ,{
            shippingAddress:values
        },{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
    }
    
    const [cartid , setcartid] = useState(null);

    async function getCartId(){
        let {data} = await getCart();
        setcartid(data.data._id)
        console.log(data.data._id);
    }
    
    useEffect(()=>{
        getCartId()
    },[])

    async function removeWishItem(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` ,{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
    }
    
    async function getWishlist(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
            headers
        })
        .then((res)=>res)
        .catch((err)=>err)
    }
    return<CartContext.Provider value={{ removeWishItem , getWishlist, headers, cartid, onlinePayment, updateCart,addTocart, addtowish ,getCart ,removeCartItem}}>
        {props.children}
    </CartContext.Provider>
}