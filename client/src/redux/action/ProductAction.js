import axios from 'axios'
import { GET_CARD_Product, GET_PRODUCT,GET_ONE_PRODUCT, GET_IMAGES } from '../actionType/ProtactType'
import { alertError } from './AlertAction'
import Swal from 'sweetalert2'

export const get_product = () => async (dispatch) => {
    try {
       await axios.get('https://www.harmonystore01.com/api/get_All_products').then((res)=>{
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
        await axios.post('https://www.harmonystore01.com/api/Create_products',data)
        .then((res)=>{
            if(res.data==="poste done"){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              dispatch(get_product())
              
            }
          })
        

    } catch (error) {
     console.log(error)

    }
}

export const update_product = (id,data) => async (dispatch) => {
    try {
       const res= await axios.put(`https://www.harmonystore01.com/api/update_product/${id}`,data)
        if(res.data==="Product updated"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            dispatch(get_product())
            
          }

    } catch (error) {
     console.log(error)

    }
}

export const delete_product = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://www.harmonystore01.com/api/delete_product/${id}`)
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
export const get_one_product = (id) => async (dispatch) => {
    try {
       await axios.get(`https://www.harmonystore01.com/api/get_one_product/${id}`).then((res)=>{
        dispatch({type:GET_ONE_PRODUCT,payload:res.data[0]})
       })
        

    } catch (error) {
       console.log(error)

    }
}

export const get_images = (id) => async (dispatch) => {
    try {
       await axios.get(`https://www.harmonystore01.com/api/get_images/${id}`).then((res)=>{
        dispatch({type:GET_IMAGES,payload:res.data})
       })
    } catch (error) {
       console.log(error)

    }
}
export const Add_images = (data,id) => async (dispatch) => {
    try {
       await axios.post(`https://www.harmonystore01.com/api/create_images`,data).then((res)=>{
        if(res.data==='image added'){
          Swal.fire('Success', 'Image Added successfully', 'success');
          dispatch(get_images(id))
        }
        
       })
    } catch (error) {
       console.log(error)

    }
}
export const update_images = (data,p_id,id) => async (dispatch) => {
    try {
       await axios.put(`https://www.harmonystore01.com/api/update_images/${id}`,data).then((res)=>{
        dispatch(get_images(p_id))
       })
    } catch (error) {
       console.log(error)

    }
}
export const delete_images = (id,p_id) => async (dispatch) => {
    try {
       await axios.delete(`https://www.harmonystore01.com/api/delete_images/${id}`).then((res)=>{
        if(res.data==='image deleted'){
            Swal.fire('Success', 'Image deleted successfully', 'success');
            dispatch(get_images(p_id))
          }
      
       })
    } catch (error) {
       console.log(error)

    }
}