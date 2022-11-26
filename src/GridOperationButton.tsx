import { Grid, Button, styled } from "@mui/material";
import { ReactNode } from "react";
interface GridOperationButtonProps {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
  xs?: number;
  backGColor?: string;
  opIcon?: ReactNode;
}

const StyledButton = styled(Button)<{
  selected: boolean;
  bgColor: string;
}>((props) => ({
  backgroundColor: props.bgColor,
  borderColor: props.selected ? "fff" : "rgba(153, 153, 255,0.5)",
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
  operation,
  selectOperation,
  selectedOperation,
  xs = 3,
  backGColor = "rgba(153, 153, 255, .1)",
  opIcon,
}) => {
  return (
    <Grid item xs={xs}>
      <StyledButton
        fullWidth
        variant="outlined"
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
        bgColor={backGColor}
      >
        {opIcon ? opIcon : operation}
      </StyledButton>
    </Grid>
  );
};
