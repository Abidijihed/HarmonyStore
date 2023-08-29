import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { get_one_product } from '../../redux/action/ProductAction';
export default function ProductInfo() {
  const { id  } = useParams();
  const dispatch=useDispatch()
  useEffect(()=>{
 dispatch(get_one_product(id))
  },[dispatch])
  const oneproduct=useSelector((state)=>console.log(state))

  return (
    <div>
        hello
        {console.log(id)}
    </div>
  )
}
