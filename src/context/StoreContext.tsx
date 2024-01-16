import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Selector, StoreContextValue, StoreData } from "../types";
import { useStoreData } from "../hooks";

const StoreContext = createContext<StoreContextValue | null>(null);

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const storeData = useStoreData();

  return (
    <StoreContext.Provider value={storeData}>{children}</StoreContext.Provider>
  );
};

export function useStore<T>(selector: Selector<T>) {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  // subscribe the store and get the value from store
  const fieldValue = useSyncExternalStore(context.subscribe, () =>
    selector(context.get())
  );

  return { fieldValue, setStore: context.set }; // [store value, set method]
}

// export const useStore =<T>(selector: Selector<T>)  => {
//   const context = useContext(StoreContext);
//   if (context === null) {
//     throw new Error("useStore must be used within a StoreProvider");
//   }

//   // subscribe the store and get the value from store
//   const store = useSyncExternalStore(context.subscribe, () =>
//     selector(context.get())
//   );

//   return { store, setStore: context.set } as const; // [store value, set method]
// };
