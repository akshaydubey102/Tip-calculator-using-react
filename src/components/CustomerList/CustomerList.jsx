// eslint-disable-next-line react/prop-types
const CustomerList = ({ listHandler }) => {
  // eslint-disable-next-line react/prop-types
  const arr = listHandler.map((item, index) => <li key={index}>{item}</li>);

  return <ul>{arr}</ul>;
};

export default CustomerList;
