import {ALERT_ERROR, CLEAR_ERROR} from '../actionType/AlertType'


export const alertError = (msg)=>async(dispatch)=>{
    const id=Math.random()
    dispatch({type:ALERT_ERROR, payload:{msg,id}})
    setTimeout(() => {
        dispatch({type: CLEAR_ERROR, payload:id})
    }, 20000);
}