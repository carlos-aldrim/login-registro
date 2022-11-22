import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment } from "@mui/material";
import React from "react";
import { TextField } from "../TextField/TextField";

interface PasswordFieldProps {
  value: string;
  variant: "outlined" | "filled";
  label?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  label,
  variant,
  placeholder,
  error,
  helperText,
  disabled,
  required,
  onChange
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const clickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <TextField
        value={value}
        variant={variant}
        onChange={onChange}
        placeholder={placeholder}
        helperText={helperText}
        error={error}
        label={label ?? "Senha"}
        disabled={disabled}
        required={required}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={clickShowPassword}
              edge="end"
              data-test-id="show-password-button"
            >
              {showPassword ? <Visibility/> : <VisibilityOff/>}
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};
