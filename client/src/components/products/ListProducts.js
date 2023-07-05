import React, { useState } from "react";
import AddProductModal from "./AddProduct";
import Products from "./Products"
import axios from "axios";

export default function ListProducts() {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [data, setData] = useState([]);
// const dispatch=useDispatch()
  const getProducts = () => {
    axios.get("https://www.harmonystore01.com/api/get_All_product").then((res) => {
      setData(res.data);
    });
  };
  setTimeout(() => {
    getProducts();
  }, 1000);
  return (
    <div>
      <div className="myproducts">
        {data.map((element) => {
          return (
            <div key={element.id}>
              <Products product={element}/>
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
