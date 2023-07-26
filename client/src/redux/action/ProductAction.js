import axios from 'axios'
import { GET_CARD_Product, GET_PRODUCT } from '../actionType/ProtactType'
import { alertError } from './AlertAction'

export const get_product = () => async (dispatch) => {
    try {
        const res = await axios.get('https://www.harmonystore01.com/api/get_All_product')
        dispatch({ type: GET_PRODUCT, payload: res.data })

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
        const res = await axios.get('https://www.harmonystore01.com/api/Create_product',data)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}
export const get_product_card = (user_id) => async (dispatch) => {
    try {
        await axios.get(`http://localhost:5700/api/add-to-cart/${user_id}`).then((res)=>{
            console.log(res)
        })
        // dispatch({type:GET_CARD_Product,payload:res.data})

    } catch (error) {
       console.log(error)

    }
}

export const add_to_card = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`https://www.harmonystore01.com/api/add-to-cart`,data)
        dispatch(get_product_card())

    } catch (error) {
       console.log(error)

    }
}