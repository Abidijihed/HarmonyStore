import axios from 'axios'
import { REGISTER, LOGIN, GET_CURRENT } from '../actionType/ActionType'
import { alertError } from './AlertAction'
import Swal from 'sweetalert2'

export const register = (data,handleNext,navigate) => async (dispatch) => {
    try {
        if(handleNext){
            await axios.post('https://www.harmonystore01.com/api/Create_user', data).then((res)=>{
                if (res.data === "user exist") {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! USER Exists",
                      });
                    }else {
                       dispatch({ type: REGISTER, payload: res.data },handleNext())
                       
                    }
            })
        }else if (navigate){
            await axios.post('https://www.harmonystore01.com/api/Create_user', data).then((res)=>{
            if (res.data === "user exist") {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! USER Exists",
                  });
                }else {
                   dispatch({ type: REGISTER, payload: res.data },navigate("/profile"))
                   
                }
        })
        }
        
        

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
           if(res.data.msg==="secsuss"){
            dispatch({ type: LOGIN, payload: res.data })
            console.log(res.data)
            navigate("/profile")
           }
       
        })
        
        
        // setTimeout(() => {
        //     window.location.reload()
        // }, 1500);
    } catch (error) {
       console.log(error)


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
export const update_current_user = (id,data,handleNext) => async (dispatch) => {
    const config = { headers: { token: localStorage.getItem("token") } }
    try {
        await axios.put('https://www.harmonystore01.com/api/update_user/'+id,data, config).then((res)=>{
       if(res.data.message=="User updated successfully."){
        dispatch(get_current(id),handleNext())
       }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
       }
        
    })
    } catch (error) {
        console.log(error)
    }
}