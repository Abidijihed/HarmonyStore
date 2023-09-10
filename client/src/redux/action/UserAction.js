import axios from 'axios'
import { REGISTER, LOGIN, GET_CURRENT, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL } from '../actionType/ActionType'
import { alertError } from './AlertAction'
import Swal from 'sweetalert2'

export const register = (data,handleNext,navigate) => async (dispatch) => {
    try {
        if(data.next===false){
            await axios.post('https://www.harmonystore01.com/api/Create_user', data).then((res)=>{
                if (res.data === "user exist") {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! USER Exists",
                      });
                    }else {
                       dispatch({ type: REGISTER, payload: res.data })
                       navigate("/profile")
                       setTimeout(() => {
                        window.location.reload()
                    }, 1500);
                       
                    }
            })
        }else{
            await axios.post('https://www.harmonystore01.com/api/Create_user', data).then((res)=>{
            if (res.data === "user exist") {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! USER Exists",
                  })
                }else {
                   dispatch({ type: REGISTER, payload: res.data })
                   handleNext()
                }
        })
        }
    } catch (error) {
       console.log(error)

    }
}
export const login = (data, navigate) => async (dispatch) => {
    try {
        await axios.post('https://www.harmonystore01.com/api/login', data).then((res)=>{
        if(res.data.msg==="secsuss"){
            dispatch({ type: LOGIN, payload: res.data })
           
            navigate("/profile")
            setTimeout(() => {
                window.location.reload()
            }, 1500);
           }else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Verifer Votre donner",
              })
           }
       
        })     
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
    // const config = { headers: { token: localStorage.getItem("token") } }
    try {
        await axios.put('https://www.harmonystore01.com/api/update_user/'+id,data).then((res)=>{
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
export const forgotPassword = (email) => async (dispatch) => {
    try {

        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            'https://www.harmonystore01.com/request-password-reset',
            email,
            config
        );

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Reset Password
export const resetPassword = (token, newPassword, confirmPassword) => async (dispatch) => {
    try {

        dispatch({ type: RESET_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.put(
            `https://www.harmonystore01.com/api/password/reset/${token}`,
            {newPassword, confirmPassword},
            config
        );

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};