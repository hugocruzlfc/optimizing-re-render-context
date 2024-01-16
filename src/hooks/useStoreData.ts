import { useRef, useCallback } from "react";
import { StoreData } from "../types";

interface Store {
  current: StoreData;
}

export const useStoreData = () => {
  const store: Store = useRef({ first: "", last: "" });

  // getter method which retrieves store value
  const get = useCallback(() => store.current, []);

  // store the callback which subscribes the store
  const subscribers = useRef<Set<() => void>>(new Set());

  // setter method which update the store value and calls the subscribe function
  const set = useCallback((value: Partial<StoreData>) => {
    store.current = { ...store.current, ...value };
    return subscribers.current.forEach((callback) => callback());
  }, []);

  // subscribe method which adds callback to subscribers
  // and returns the cleanup function
  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return { get, set, subscribe };
};
