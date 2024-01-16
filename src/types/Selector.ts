import { StoreData } from "./StoreData";

export type Selector<T> = (state: StoreData) => T;
