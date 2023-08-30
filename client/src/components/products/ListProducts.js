import React, { useEffect, useState } from "react";
import AddProductModal from "./AddProduct";
import Products from "./Products"
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { get_current } from "../../redux/action/UserAction";

export default function ListProducts({data,getlen,search}) {
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
        {data.filter((el)=>el.product_name.toUpperCase().includes(search.toUpperCase())||el.Product_material.toUpperCase().includes(search.toUpperCase())||el.category.toUpperCase().includes(search.toUpperCase())).map((element) => {
          return (
            <div key={element.id}>
              <Products product={element}  getlen={getlen}/>
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
