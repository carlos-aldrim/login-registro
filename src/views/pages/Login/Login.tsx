import { AccountCircle, GitHub, Google } from "@mui/icons-material";
import { Alert, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../../components/PageContainer";
import { PasswordField } from "../../../components/PasswordField";
import { TextField } from "../../../components/TextField";
import { ValueContext } from "../../../contexts";
import { useStyles } from "./Login.styles";

export const Login: React.FC = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { enterAccount } = React.useContext(ValueContext);
  const [message, setMessage] = React.useState(false);

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const onRegisterButtonClick = () => {
    navigate("/register");
  };

  const onLoginButtonClick = () => {
    setMessage(enterAccount(email, password));
  };

  const onCloseMessageClick = () => {
    setMessage(false);
  };

  const onGoogleButtonClick = () => {
    navigate("#");
  };

  const onGithubButtonClick = () => {
    navigate("#");
  };

  return (
    <PageContainer>
      <div className={styles.container}>
        <div className={styles.login}>
          {message ? <Alert onClose={onCloseMessageClick} severity="success">Conta logada!</Alert> : <div></div>}
          <div className={styles.iconAccount}>
            <AccountCircle sx={{ color: "#89D963", fontSize: "7rem" }}/>
          </div>
          <TextField
            value={email}
            label={"Email"}
            placeholder={"Digite seu Email"}
            variant={"outlined"}
            onChange={onEmailInputChange}
            required={true}
            inputMode={"email"}
          />
          <PasswordField
            value={password}
            placeholder={"Digite sua Senha"}
            onChange={onPasswordInputChange}
            variant={"outlined"}
            required={true}
          />
          <div className={styles.button}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={onLoginButtonClick}
              disabled={(email !== "") && (password !== "") ? false : true}
            >
              Login
            </Button>
          </div>
          <div className={styles.linkRegister}>
            <Typography onClick={onRegisterButtonClick}>Não tem conta? Registra-se</Typography>
          </div>
          <div className={styles.socialNetworks}>
            <Google onClick={onGoogleButtonClick} sx={{ color: "#89D963", fontSize: "2.5rem" }}/>
            <GitHub onClick={onGithubButtonClick} sx={{ color: "#89D963", fontSize: "2.5rem" }}/>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
