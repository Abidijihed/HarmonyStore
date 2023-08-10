import React, { useState } from "react";
import AddProductModal from "./AddProduct";
import Products from "./Products"
import axios from "axios";

export default function ListProducts({data,addToCart,getlen}) {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
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
        <button onClick={() => setOpenAddProductModal(true)}>
          Add Product
        </button>
      </div>

      <AddProductModal
        open={openAddProductModal}
        handleClose={() => setOpenAddProductModal(false)}
      />
    </div>
  );
}
