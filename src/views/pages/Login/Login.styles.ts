import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "auto",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "radial-gradient(circle 993px at .5% 50.5%,#b1d99e 0,#c4c4c4 100.2%)",
  },
  login: {
    width: "30%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "30px",
    borderRadius: "25px",
    backgroundColor: "#FFFFFF",
    boxShadow: "5px 10px 18px rgba(100, 100, 111, 0.2)",
    margin: "30px 30px",
    minWidth: "300px",
  },
  iconAccount: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    "& button": {
      backgroundColor: "#89D963",
      height: "56px",
      "&:hover": {
        backgroundColor: "#89D963",
      },
    },
  },
  linkRegister: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "10px 0px 0px 0px",
    "& p": {
      cursor: "pointer",
      fontWeight: 500,
      color: "#89D963",
      fontSize: "14px",
      "&:hover": {
        color: "#54C121",
      },
    },
  },
  socialNetworks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px",
    "& svg": {
      cursor: "pointer",
      margin: "0px 10px 0px 10px",
      "& path": {
        "&:hover": {
          color: "#54C121",
        },
      },
    },
  },
});