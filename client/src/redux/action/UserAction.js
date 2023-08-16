import axios from 'axios'
import { REGISTER, LOGIN, GET_CURRENT } from '../actionType/ActionType'
import { alertError } from './AlertAction'
import Swal from 'sweetalert2'

export const register = (data) => async (dispatch) => {
    try {
        await axios.post('https://www.harmonystore01.com/api/Create_user', data).then((res)=>{
            if (res.data === "user exist") {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! USER Exists",
                  });
                }else {
                   dispatch({ type: REGISTER, payload: res.data })
                   
                }
        })
        

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
        await axios.post('https://www.harmonystore01.com/api/login', data).then((res)=>{
            dispatch({ type: LOGIN, payload: res.data })
        })
        
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
        await axios.get('https://www.harmonystore01.com/api/getone_user/'+id, config).then((res)=>{
            dispatch({ type: GET_CURRENT, payload:res.data[0] })

        })
    } catch (error) {
        console.log(error)
    }
}
export const update_current_user = (id,data) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }
    try {
        await axios.put('https://www.harmonystore01.com/api/update_user/'+id,data, config).then((res)=>{
          console.log(res)
        })
    } catch (error) {
        console.log(error)
    }
}