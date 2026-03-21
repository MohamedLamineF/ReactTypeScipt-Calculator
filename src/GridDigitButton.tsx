import React from "react";

interface GridDigitButtonProps {
  digit: string;
  enterDigit: (digit: string) => void;
}

export const GridDigitButton: React.FC<GridDigitButtonProps> = ({
  digit,
  enterDigit,
}) => {
  return (
    <button
      className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white font-medium py-3 rounded-full border border-gray-600 transition-colors cursor-pointer"
      onClick={() => enterDigit(digit)}
    >
      {digit}
    </button>
  );
};
