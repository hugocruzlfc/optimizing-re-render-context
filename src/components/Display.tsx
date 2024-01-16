import React from "react";
import { useStore } from "../context";
import { StoreData } from "../types";

export interface DisplayProps {
  value: "first" | "last";
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  const { fieldValue } = useStore((store: StoreData) => store[value]);
  return (
    <div className="value">
      {value}: {fieldValue}
    </div>
  );
};
