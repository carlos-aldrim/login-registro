import { AccountCircle, GitHub, Google } from "@mui/icons-material";
import { Alert, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../../components/PageContainer";
import { PasswordField } from "../../../components/PasswordField";
import { TextField } from "../../../components/TextField";
import { useStyles } from "./Register.styles";
import { validateEmail, validateLenght, validateName, validatePassword, validateSequence, validateTypeCharacters } from "../../../services/validator";
import { ValueContext } from "../../../contexts";

export const Register: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const isEmailValid = validateEmail(email);
  const isNameValid = validateName(name);
  const isPasswordValid = validatePassword(password);
  const isCharacteresValid =  validateTypeCharacters(password);
  const isLenghtValid = validateLenght(password);
  const isSequenceValid = validateSequence(password);
  const { registerAccount } = React.useContext(ValueContext);
  const [message, setMessage] = React.useState("");

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const onLoginButtonClick = () => {
    navigate("/");
  };

  const onRegisterButtonClick = () => {
    if(registerAccount(name, email, password)) {
      setMessage("sucess");
    }
    else {
      setMessage("error");
    }
  };

  const onCloseMessageClick = () => {
    setMessage("close");
  };

  const onGoogleButtonClick = () => {
    navigate("#");
  };

  const onGithubButtonClick = () => {
    navigate("#");
  };

  return (
    <PageContainer>
      <Box className={styles.container}>
        <Box className={styles.register}>
          {message === "sucess" ? <Alert onClose={onCloseMessageClick} severity="success">Conta cadastrada!</Alert> : (message === "error" ? <Alert onClose={onCloseMessageClick} severity="error">Conta já cadastrada.</Alert> : <Box></Box>)}
          <Box className={styles.iconAccount}>
            <AccountCircle sx={{ color: "#89D963", fontSize: "7rem" }}/>
          </Box>
          <TextField
            type={"email"}
            value={email}
            label={"Email"}
            placeholder={"Digite seu email"}
            variant={"outlined"}
            onChange={onEmailInputChange}
            required={true}
            inputMode={"email"}
          />
          <TextField
            type={"text"}
            value={name}
            label={"Nome"}
            placeholder={"Digite seu nome"}
            variant={"outlined"}
            onChange={onNameInputChange}
            required={true}
            inputMode={"text"}
          />
          <PasswordField
            value={password}
            placeholder={"Digite a senha"}
            onChange={onPasswordInputChange}
            variant={"outlined"}
            required={true}
          />
          <PasswordField
            value={confirmPassword}
            label={"Confirme a senha"}
            placeholder={"Repita a Senha"}
            onChange={onConfirmPasswordInputChange}
            variant={"outlined"}
            required={true}
          />
          <Box className={styles.detailsPassword}>
            <Typography style={{color: isLenghtValid ? "#89D963" : "#D8D8D8"}}>*No mínimo 8 caracteres e no máximo 16.</Typography>
            <Typography style={{color: isCharacteresValid ? "#89D963" : "#D8D8D8"}}>*Conter letra maiúscula, minúscula, caracter especial e número.</Typography>
            <Typography style={{color: isSequenceValid ? "#89D963" : "#D8D8D8"}}>*Não pode ter letras ou números em sequência (ex.: da, 27, aa).</Typography>
          </Box>
          <Box className={styles.button}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={onRegisterButtonClick}
              disabled={isPasswordValid && isEmailValid && isNameValid && (password === confirmPassword) ? false : true}
            >
              Registrar
            </Button>
          </Box>
          <Box className={styles.linkLogin}>
            <Typography onClick={onLoginButtonClick}>Já tem conta? Faça o login</Typography>
            <Typography></Typography>
          </Box>
          <Box className={styles.socialNetworks}>
            <Google onClick={onGoogleButtonClick} sx={{ color: "#89D963", fontSize: "2.5rem" }}/>
            <GitHub onClick={onGithubButtonClick} sx={{ color: "#89D963", fontSize: "2.5rem" }}/>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};