import React, { useEffect, useState } from "react";
import AddProductModal from "./AddProduct";
import Products from "./Products"
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { get_current } from "../../redux/action/UserAction";

export default function ListProducts({data,addToCart,getlen}) {
  const dispatch=useDispatch()
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  useEffect(() => {
    const id = localStorage.getItem("id");
      dispatch(get_current(id))
  }, [dispatch]);
  const user=useSelector((state)=>state.UserReducer.users)

  
  return (
    <div>
      <div className="myproducts">
        {data.map((element) => {
          return (
            <div key={element.id}>
              <Products product={element} addToCart={addToCart} getlen={getlen}/>
            </div>
          );
        })}
      </div>
      <div>
        {user?.role==="admin"?<button onClick={() => setOpenAddProductModal(true)}>
          Add Product
        </button>:null}
      </div>

      <AddProductModal
        open={openAddProductModal}
        handleClose={() => setOpenAddProductModal(false)}
      />
    </div>
  );
}
