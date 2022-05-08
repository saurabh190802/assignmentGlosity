import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: '100%',
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "1px",
    height: "28vh",
    width:"200px",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
 
  grid: {
    display: "flex",
  },
  
  title: {
    padding: "0 16px",
  },
 
});
