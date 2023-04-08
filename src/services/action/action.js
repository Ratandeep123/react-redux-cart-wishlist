import { ADD_TO_CART ,REMOVE_FROM_CART} from "../constant";

export const AddToCart =(data)=> {
    // console.warn("from action",data)
  return {
    type: "ADD_TO_CART",
    data: data,
  };
};
export const RemoveToCart = () => {
    console.log('action')

  return {
    type: "REMOVE_TO_CART",
   };
};
