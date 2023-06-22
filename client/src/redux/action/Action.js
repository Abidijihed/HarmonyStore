import axios from 'axios'
import { REGISTER, LOGIN, GET_CURRENT } from '../actionType/ActionType'
import { alertError } from './AlertAction'

export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5700/api/Create_user', data)
        dispatch({ type: REGISTER, payload: res.data })

    } catch (error) {
        if (error.response.data) {
            (error.response.data.errors.forEach(element => {
                dispatch(alertError(element.msg))
            }))
        }

    }
}
export const login = (data, navigate) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5700/api/login', data)
        dispatch({ type: LOGIN, payload: res.data })
        navigate("/profile")
    } catch (error) {
        if (error.response.data) {
            (error.response.data.errors.forEach(element => {
                dispatch(alertError(element.msg))
            }))
        }


    }
}
export const get_current = (id) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }
    try {
        const res = await axios.get('http://localhost:5700/api/getone_user/'+id, config)
        dispatch({ type: GET_CURRENT, payload: res.data[0] })
    } catch (error) {
        console.log(error)
    }
}