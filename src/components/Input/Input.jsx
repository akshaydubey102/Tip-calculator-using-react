import styles from "./Input.module.css";
// eslint-disable-next-line react/prop-types
const Input = ({ inputLbl, inputplaceholder, changeHandler, val }) => {
  return (
    <input
      className={styles.inp}
      type={inputLbl}
      placeholder={inputplaceholder}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
      value={val}
    />
  );
};

export default Input;
