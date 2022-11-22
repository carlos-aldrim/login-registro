import React from "react";
import { Box, TextField as MuiTextField } from "@material-ui/core";
import { useStyles } from "./TextField.styles";

interface TextFieldProps {
  type?: "number" | "email" | "password" | "date" | "text";
  label?: string;
  value: string;
  variant: "outlined" | "filled";
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  endAdornment?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  variant,
  inputMode,
  disabled,
  required,
  onChange,
  placeholder,
  helperText,
  endAdornment,
  type,
  error,
}) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <MuiTextField
        label={label}
        variant={variant}
        fullWidth
        type={type}
        error={error}
        value={value}
        placeholder={placeholder}
        inputMode={inputMode}
        onChange={onChange}
        disabled={disabled}
        required={required}
        helperText={helperText}
        InputProps={{
          endAdornment,
        }}
      />
    </Box>
  );
};
