import React from "react";

interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
  isHighlighted?: boolean;
}

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
  isHighlighted = false,
}) => {
  const isSelected = selectedOperation === operation;

  return (
    <button
      className={[
        "font-medium py-3 rounded-full border transition-colors cursor-pointer text-white",
        isHighlighted
          ? "bg-violet-500/60 hover:bg-violet-400/60 border-violet-400/70"
          : "bg-violet-950/40 hover:bg-violet-900/50 border-violet-500/40",
        isSelected ? "border-white ring-1 ring-white" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => selectOperation(operation)}
    >
      {operation}
    </button>
  );
};
