// eslint-disable-next-line react/prop-types
const DropDown = ({ dropDownHandler, val }) => {
  return (
    <select
      onChange={(e) => {
        dropDownHandler(e.target.value);
      }}
      value={val}
    >
      <option>Select</option>
      <option value="20">excellent(20%)</option>
      <option value="10">Moderate(10%)</option>
      <option value="5">bad(5%) </option>
    </select>
  );
};

export default DropDown;
