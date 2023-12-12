import React, { createContext } from "react";
import { new_collections } from "../components/assets/new_collections";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  // TODO: Change new collections with different json data like all products...
  const contextValue = { new_collections };
  return (
    <ShopContextProvider value={contextValue}>
      {props.children}
    </ShopContextProvider>
  );
};

export default ShopContextProvider;
