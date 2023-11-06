import styles from "./TotalTable.module.css";
// eslint-disable-next-line react/prop-types
const TotalTable = ({ value, val }) => {
  return (
    <table className={styles.tab}>
      <tr>
        <td style={{ border: "2px solid black" }}>Total Customer</td>
        <td style={{ border: "2px solid black" }}>Tip</td>
      </tr>
      <tr>
        <td style={{ border: "2px solid black" }}>{val}</td>
        <td style={{ border: "2px solid black" }}>{value}</td>
      </tr>
    </table>
  );
};

export default TotalTable;
