import axios from 'axios'
import { GET_CARD_Product, GET_PRODUCT } from '../actionType/ProtactType'
import { alertError } from './AlertAction'

export const get_product = () => async (dispatch) => {
    try {
       await axios.get('https://www.harmonystore01.com/api/get_All_product').then((res)=>{
        dispatch({ type: GET_PRODUCT, payload: res.data })

       })

    } catch (error) {
        if (error.response.data) {
            (error.response.data.errors.forEach(element => {
                dispatch(alertError(element.msg))
            }))
        }

    }
}
export const add_product = (data) => async (dispatch) => {
    try {
        await axios.post('https://www.harmonystore01.com/api/Create_product',data)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}

export const update_product = (id,data) => async (dispatch) => {
    try {
        await axios.put(`https://www.harmonystore01.com/api/update/product/${id}`,data)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}

export const delete_product = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://www.harmonystore01.com/api/delete/product/${id}`)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}
export const get_product_card = (user_id) => async (dispatch) => {
   
    try {
        await axios.get(`https://www.harmonystore01.com/api/get-to-cart/${user_id}`).then((res)=>{
            dispatch({type:GET_CARD_Product,payload:res.data})
        })
        

    } catch (error) {
       console.log(error)

    }
}

export const add_to_card = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`https://www.harmonystore01.com/api/add-to-cart`,data)
        dispatch(get_product_card(data.user_id))

    } catch (error) {
       console.log(error)

    }
}