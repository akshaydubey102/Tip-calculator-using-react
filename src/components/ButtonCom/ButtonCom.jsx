import Button from "react-bootstrap/Button";
// eslint-disable-next-line react/prop-types
const ButtonCom = ({ btnLbl, clickHandler }) => {
  return (
    <Button variant="primary" onClick={clickHandler}>
      {btnLbl}
    </Button>
  );
};

export default ButtonCom;
