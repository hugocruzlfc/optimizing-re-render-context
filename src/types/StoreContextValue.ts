import { StoreData } from "./StoreData";

export interface StoreContextValue {
  get: () => StoreData;
  set: (value: Partial<StoreData>) => void;
  subscribe: (callback: () => void) => () => void;
}
