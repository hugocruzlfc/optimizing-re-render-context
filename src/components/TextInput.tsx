import React from "react";
import { useStore } from "../context";
import { StoreData } from "../types";

export interface TextInputProps {
  value: "first" | "last";
}

export const TextInput: React.FC<TextInputProps> = ({ value }) => {
  const { fieldValue, setStore } = useStore((store: StoreData) => store[value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStore({ [value]: e.target.value });
  };

  return (
    <div className="field">
      {value}:{" "}
      <input
        value={fieldValue}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
