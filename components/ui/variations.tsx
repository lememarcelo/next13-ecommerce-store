import React, { useState } from "react";
import Button from "./button";
import { MinusCircle, PlusCircle } from "lucide-react";

const ColorSizeGrid = () => {
  // Defina suas variações de cor e tamanho
  const colors = ["Vermelho", "Azul", "Verde"];
  const sizes = ["P", "M", "G"];

  // Crie um estado para rastrear as quantidades
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Função para incrementar a quantidade
  const incrementQuantity = (color: string, size: string) => {
    const newQuantities = { ...quantities };
    const currentQuantity = newQuantities[`${color}-${size}`] || 0;
    newQuantities[`${color}-${size}`] = currentQuantity + 1;
    setQuantities(newQuantities);
  };

  // Função para decrementar a quantidade
  const decrementQuantity = (color: string, size: string) => {
    const newQuantities = { ...quantities };
    const currentQuantity = newQuantities[`${color}-${size}`] || 0;
    if (currentQuantity > 0) {
      newQuantities[`${color}-${size}`] = currentQuantity - 1;
      setQuantities(newQuantities);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {sizes.map((size) => (
            <th key={size} className="font-semibold text-sm">
              {size}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {colors.map((color, index) => (
          <tr key={color}>
            <td className="bg-slate-400 text-white">{color}</td>
            {sizes.map((size) => (
              <td key={size} className="bg-slate-300 text-black">
                <div className="flex p-2 space-y-1 space-x-1 items-center justify-center">
                  <MinusCircle className="h-4 w-4 text-rose-600 mt-1" />
                  <input
                    className="w-[35px] border border-slate-500 text-center rounded-sm text-sm"
                    type="text"
                    value={quantities[`${color}-${size}`] || 0}
                  />
                  <PlusCircle className="h-4 w-4 text-green-600 mt-1" />
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColorSizeGrid;
