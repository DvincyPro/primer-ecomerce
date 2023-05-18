// importamos la función createSlice desde la librería redux toolkit
import { createSlice } from "@reduxjs/toolkit";
import { StoreProduct, UserInfo } from "../type";

interface ShopperState {
  productData: StoreProduct[];
  userInfo: null | UserInfo;
}

// definimos el estado inicial de nuestro slice (reducer)
const initialState: ShopperState = {
  productData: [],
  userInfo: null,
};

// creamos nuestro slice con el nombre "shopper" y el estado inicial que acabamos de definir
export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  // definimos los reducers (acciones) que puede ejecutar nuestro slice
  reducers: {
    // definimos un reducer llamado "addTocart" que recibe el estado actual y un objeto action que contiene un payload
    addTocart: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        // actualizamos la propiedad productData del estado con el payload que recibimos en la acción
        state.productData.push(action.payload);
      }
    },
    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item!.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state,action)=>{
      state.productData = action.payload;
    },
    removeUser: (state)=>{
      state.userInfo = null;
    }
  },
});

// exportamos la acción "addTocart" que creamos anteriormente para que pueda ser utilizada en otros lugares de nuestra aplicación
export const { addTocart, deleteItem, plusQuantity, minusQuantity, resetCart,addUser,removeUser } = shopperSlice.actions;
// exportamos nuestro slice para que pueda ser utilizado en nuestra store
export default shopperSlice.reducer;
