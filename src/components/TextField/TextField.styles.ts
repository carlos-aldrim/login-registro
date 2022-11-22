import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    marginBottom: "9px",
    "& .MuiFormLabel-root": {
      color: "#D8D8D8",
    },
    "& label.Mui-focused": {
      color: "#89D963",
    },
    "& .MuiInputBase-root": {
      "& fieldset": {
        borderColor: "#D8D8D8",
      },
      "&:hover fieldset": {
        borderColor: "#89D963",
      },
      "& .MuiInputBase-input": {
        textAlign: "start",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#89D963",
      },
    },
  },
});