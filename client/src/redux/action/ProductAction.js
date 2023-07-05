import axios from 'axios'
import { GET_PRODUCT } from '../actionType/ProtactType'
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
        if (error.response.data) {
            (error.response.data.errors.forEach(element => {
                dispatch(alertError(element.msg))
            }))
        }

    }
}
export const add_to_card = (id,data) => async (dispatch) => {
    try {
        const res = await axios.put(`https://www.harmonystore01.com/api/add_to_card/${id}`,data)
        dispatch(get_product())

    } catch (error) {
       console.log(error)

    }
}