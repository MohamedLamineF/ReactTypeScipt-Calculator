import { useState } from "react";
import { GridOperationButton } from "./GridOperationButton";
import { GridDigitButton } from "./GridDigitButton";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(true);
  const [prevaValue, setPrevValue] = useState("");

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0" && !currentValue.includes("."))
      return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };
  const clear = () => {
    setCurrentValue("0");
    setOperation("");
    setOverwrite(true);
    setPrevValue("");
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const selectOperation = (operation: string) => {
    if (prevaValue) {
      setCurrentValue(`${calculate()}`);
      setPrevValue(`${calculate()}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(operation);
    setOverwrite(true);
  };

  const percent = () => {
    setCurrentValue((parseFloat(currentValue) / 100).toString());
  };

  const minus = () => {
    setCurrentValue((parseFloat(currentValue) * -1).toString());
  };
  const calculate = () => {
    if (!prevaValue || !operation) return currentValue;
    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevaValue);

    let result;
    switch (operation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = prev / curr;
        break;
    }
    return result;
  };

  const equal = () => {
    setCurrentValue(`${calculate()}`);
    setOperation("");
    setOverwrite(true);
    setPrevValue("");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-3xl p-5 shadow-2xl w-72">
        {/* Display */}
        <div className="text-right text-4xl font-light text-white px-3 py-4 overflow-hidden truncate">
          {currentValue}
        </div>

        {/* Row 1: AC, C, %, / */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          <GridOperationButton
            operation={"AC"}
            selectOperation={clear}
            selectedOperation={operation}
            isHighlighted
          />
          <GridOperationButton
            operation={"C"}
            selectOperation={del}
            selectedOperation={operation}
          />
          <GridOperationButton
            operation={"%"}
            selectOperation={percent}
            selectedOperation={operation}
          />
          <GridOperationButton
            operation={"/"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </div>

        {/* Row 2: 7, 8, 9, * */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          <GridDigitButton digit={"7"} enterDigit={setDigit} />
          <GridDigitButton digit={"8"} enterDigit={setDigit} />
          <GridDigitButton digit={"9"} enterDigit={setDigit} />
          <GridOperationButton
            operation={"*"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </div>

        {/* Row 3: 4, 5, 6, - */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          <GridDigitButton digit={"4"} enterDigit={setDigit} />
          <GridDigitButton digit={"5"} enterDigit={setDigit} />
          <GridDigitButton digit={"6"} enterDigit={setDigit} />
          <GridOperationButton
            operation={"-"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </div>

        {/* Row 4: 1, 2, 3, + */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          <GridDigitButton digit={"1"} enterDigit={setDigit} />
          <GridDigitButton digit={"2"} enterDigit={setDigit} />
          <GridDigitButton digit={"3"} enterDigit={setDigit} />
          <GridOperationButton
            operation={"+"}
            selectOperation={selectOperation}
            selectedOperation={operation}
          />
        </div>

        {/* Row 5: +/-, 0, ., = */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          <GridOperationButton
            operation={"+/-"}
            selectOperation={minus}
            selectedOperation={operation}
          />
          <GridDigitButton digit={"0"} enterDigit={setDigit} />
          <GridDigitButton digit={"."} enterDigit={setDigit} />
          <button
            className="group bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white font-semibold rounded-full py-3 transition-colors cursor-pointer"
            onClick={equal}
          >
            <span className="group-hover:hidden">=</span>
            <span className="hidden group-hover:inline">^人^</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
